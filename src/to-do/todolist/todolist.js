import React from "react";
import ToDoItem from "../todoitem/todoitem"

class ToDoList extends React.Component {
    state = {
        list: []
    }

    render() {
        const {list} = this.props
        return (
            <div>
                {list && <ToDoItem />}
            </div>
        )
    }
}

export default ToDoList;