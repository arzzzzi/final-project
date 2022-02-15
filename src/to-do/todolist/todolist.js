import React from "react";
import ListItem from "./listitem/listitem";
import { savelist, loadDesks, loadTasksByDeskId, updateList } from '../api';
import { connect } from "react-redux";
import './todolist.css'
import { setList } from '../../redux/actions'

class ToDoList extends React.Component {
    state = {
        list: [],
        title: '',
        id: null,
        options: [],
        activeDesk: null
    }
    componentDidMount() {
        loadDesks()
            .then(data => {
                console.log(data)
                this.setState({
                    options: data,
                    activeDesk: data[0].id
                })
            })
    }
    saveList = () => {
        const { title, activeDesk } = this.state
        const { list } = this.props
        console.log({
            list,
            title,
            desk: activeDesk
        })
        if (title === '') {

            updateList(list, activeDesk)
                .then(data => {
                    this.props.setList(data.list)
                })
        } else {
            savelist(list, title, activeDesk)
                .then(data => {
                    console.log(data)
                })
        }
    }
    changeActiveOption = (e) => {
        this.setState({
            activeDesk: e.target.value
        })
    }
    setList = (activeDesk) => {
        loadTasksByDeskId(activeDesk)
            .then(data =>
                this.props.setList(data.list))
    }
    render() {
        const { title, options, activeDesk } = this.state
        const { list } = this.props
        console.log(list)
        return (
            <div className="list">
                <select className="options" onChange={(e) => this.changeActiveOption(e)}>
                    {options.map(item => {
                        return <option value={item.id} key={item.id}>{item.title}</option>
                    })}
                </select>
                <button className="choose" onClick={() => this.setList(activeDesk)}>Выбрать доску</button>
                <input className="desk-title"
                    defaultValue={title}
                    onBlur={(e) => this.setState({ title: e.target.value })}
                    placeholder='Введите название доски'
                />
                <ListItem list={list} />
                <button className="savelist" onClick={this.saveList}>Сохранить</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    setList: list => dispatch(setList(list))
})

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(ToDoList)
