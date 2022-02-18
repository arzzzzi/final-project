import React from "react";
import ListItem from "./listitem/listitem";
import { savelist, loadDesks, loadTasksByDeskId, updateList } from '../api';
import { connect } from "react-redux";
import './todolist.css'
import { setList } from '../../redux/actions';
import Swal from 'sweetalert2'


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
        if (title) {
            savelist(list, title, activeDesk)
                .then(data => {
                    console.log(data)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Ваша доска сохранена',
                        showConfirmButton: false,
                        timer: 1500
                      })
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Что-то пошло не так...',
                text: 'Введите название доски!'
              })
        }
    }
    updateList = () => {
        const {activeDesk} = this.state;
        const {list} = this.props
        updateList(list, activeDesk)
                .then(data => {
                    this.props.setList(data.list)
                })
                Swal.fire({
                    title: 'Вы уверены?',
                    text: "Вы не сможете отменить это действие!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Да, обновить доску!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Перезаписано!',
                        'Ваша доска была обновлена.',
                        'success'
                      )
                    }
                  })
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
                <button className="updatelist" onClick={this.updateList}>Обновить доску</button>
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
