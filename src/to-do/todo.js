import React from "react";
import AddItemForm from "./AddItemForm/AddItemForm";
import ToDoList from "./todolist/todolist";


class ToDo extends React.Component {

    state = {
        show: true
    }
    componentDidMount() {
        const { objectives } = this.props;
        this.setState({ objectives });
    }
    show = () => {
        this.setState({show: true})
    }
    hide = () => {
        this.setState({show: false})
    }
    render() {
        const {show} = this.state
        return (
            <div className="main">
                <ToDoList />
                <div className="objectives">
                    {show === true && <AddItemForm/>}
                </div>
                {show === false && <button className="new-goal" onClick={this.show} >Создать новую задачу</button>}
                {show === true && <button className="hide-tab" onClick={this.hide}>X</button>}
            </div>
        )
    }
}


export default ToDo;
