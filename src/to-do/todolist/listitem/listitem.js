import React from "react";
import { deleteItem } from "../../../redux/actions";
import { connect } from "react-redux";
import '../todolist.css'
import {DeleteOutlined} from '@ant-design/icons';

class ListItem extends React.Component {
    deleteItem = (id) => {
        this.props.deleteItem(id)
    }
    render() {
        const {list} = this.props
        console.log(this.props)
        return (
            <div className="list">
                {list && list.map((item) => {
                    return <div className={`goal ${item.style} `}  key={item.id}>
                        <div className='deleteBtn' onClick={() => this.deleteItem(item.id)}> <DeleteOutlined /></div>
                        <div className='todoItem' >{item.title} </div>
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
        list: state.list
    }
}
const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(ListItem);
