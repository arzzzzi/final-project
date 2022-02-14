import React from "react";
import ListItem from "./listitem/listitem";
import {savelist, loadDesks, loadTasksByDeskId} from '../api';
import { connect } from "react-redux";
import './todolist.css'

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
       })})
   }
   saveList = () => {
        const { title, activeDesk } = this.state
        const {list} = this.props
        console.log({
            list,
            title,
            deskId: activeDesk
        })
        savelist(list, title, activeDesk)
            .then(data => {console.log(data)
            })
   }
   changeActiveOption = (e) => {
       this.setState({
           activeDesk: e.target.value
       })
   }

   loadTasks = (activeDesk) => {
    loadTasksByDeskId(activeDesk)
    .then(data =>
        this.setState({
            activeDesk: data.desk,
            list: data.list
        }))
   }
    render() {
        const {title, options, list, activeDesk} = this.state
        console.log(list)
        return (
            <div className="list">
                <select onChange={(e) => this.changeActiveOption(e)}>
                    {options.map(item => {
                       return <option value={item.id} key={item.id}>{item.title}</option>
                    })}
                </select>
                <button onClick={() => this.loadTasks(activeDesk)}>Выбрать</button>
                <input className="desk-title"  
                    defaultValue={title}
                    onBlur={(e) => this.setState({ title: e.target.value })}
                />
                <ListItem list={list} />
                <button className="savelist" onClick={this.saveList}>Save</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const functionFromConnect = connect(mapStateToProps);

export default functionFromConnect(ToDoList)
