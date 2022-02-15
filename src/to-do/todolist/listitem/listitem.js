import React from "react";
import { deleteItem } from "../../../redux/actions";
import { connect } from "react-redux";
import '../todolist.css'
import { DeleteOutlined } from '@ant-design/icons';

class ListItem extends React.Component {
    state = {
        currentItem: null
    }
    deleteItem = (id) => {
        this.props.deleteItem(id)
    }
    // dragStartHandler = (e, item) => {
    //     console.log('drag', item)
    //     this.setState({currentItem: item})
    // }
    // dragEndHandler = (e) => {
    // }
    // dragOverHandler = (e) => {
    //     e.preventDefault()
    // }
    // dropHandler = (e, item) => {
    //     e.preventDefault();
    //     console.log('drop', item)
    // }
    render() {
        const { list } = this.props
        console.log(this.props)
        return (
            <div className="list">
                {list && list.map((item) => {
                    return <div className={`goal ${item.style} `}
                        key={item.id}
                        // draggable={true}
                        // onDragStart={(e) => this.dragStartHandler(e, item)}
                        // onDragLeave={(e) => this.dragEndHandler(e)}
                        // onDragEnd={(e) => this.dragEndHandler(e)}
                        // onDragOver={(e) => this.dragOverHandler(e)}
                        // onDrop={(e) => this.dropHandler(e, item)}
                    >
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
