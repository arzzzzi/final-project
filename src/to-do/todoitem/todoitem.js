import React from "react";

class ToDoItem extends React.Component {
    state = {
        title: '',
        goal: ''
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return(
            <div className="objectives">
                <div className="goal">
                    {/* <button className="add" onClick={addObjective}>+</button>
                    <button className="edit" onClick={editObjective}></button>
                    <button className="remover" onClick={removeObjective}>-</button> */}
                    <input name='title' type='text' />
                    <input name='goal' type='text' />
                </div>
            </div>
        )
    }
}

export default ToDoItem;


