import React from "react";
import ToDoItem from "./todoitem/todoitem";

class ToDo extends React.Component {
    state = {
        objectives: [],
        date: ''
    }
    createGoal = () => {
        console.log('lol')
    }
    render() {
        return(
            <div className="objectives">
                <ToDoItem />
                <button className="createGoal" onClick={this.createGoal}>Create new goal</button>
            </div>
        )
    }
}

export default ToDo;