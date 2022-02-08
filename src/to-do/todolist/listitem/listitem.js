import React from "react";
import { deleteItem } from "../../../redux/actions";
import { connect } from "react-redux";
import './todolist.css'

class ListItem extends React.Component {
    state = {
        list: []
    }
    deleteItem = (id) => {
        this.props.deleteItem(id)
    }
    render() {
        const {objectives} = this.props
        return (
            <div className="list">
                {objectives && objectives.map((item) => {
                    return <div className={`goal ${item.style} `} >
                        <div className='todoItem' key={item.id} >{item.title} </div>
                        <button className='deleteBtn' onClick={() => this.deleteItem(item.id)}>  X </button>
                    </div>
                })}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(deleteItem(id))
})

const mapStateToProps = (state) => {
    return {
        objectives: state.list
    }
}
const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(ListItem)