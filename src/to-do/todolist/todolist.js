import React from "react";
import ListItem from "./listitem/listitem";
import {savelist} from '../api';
import { connect } from "react-redux";
import './todolist.css'

class ToDoList extends React.Component {
   state = {
       list: [],
       title: 'Maga',
       id: null
   }
   saveList = () => {
        const { title, id } = this.state
        const {list} = this.props
        savelist(list, title, id)
            .then(data => console.log(data))
   }
    render() {
        const {title} = this.state
        return (
            <div className="list">
                <input className="desk-title"  
                    defaultValue={title}
                    onBlur={(e) => this.setState({ title: e.target.value })}
                />
                <ListItem />
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
