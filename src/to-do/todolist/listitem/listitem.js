import React from "react";
import { deleteItem } from "../../../redux/actions";
import { connect } from "react-redux";
import './todolist.css'
import {DeleteOutlined} from '@ant-design/icons';

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
                        <div className='deleteBtn' onClick={() => this.deleteItem(item.id)}> <DeleteOutlined /></div>
                        <div className='todoItem' key={item.id} >{item.title} </div>
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

export default functionFromConnect(ListItem);
