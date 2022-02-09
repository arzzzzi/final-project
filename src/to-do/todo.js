import React from "react";
import AddItemForm from "./AddItemForm/AddItemForm";
import ToDoList from "./todolist/todolist";
import red from '../images/red.jpg';
import blue from '../images/blue.jpg';
import pink from '../images/pink.jpg';
import green from '../images/green.jpg';

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
            <>
            <div className="main">
                <ToDoList />
                <div className="objectives">
                    {show === true && <AddItemForm hide={this.hide} />}
                </div>
                {show === false && <button className="new-goal" onClick={this.show} >Создать новую задачу</button>}
            </div>
            <div className="legend">
                <p className="leg-elem"><img src={red} /> Срочно и важно</p>
                <p className="leg-elem"><img src={pink} /> Срочно, но не важно</p>
                <p className="leg-elem"><img src={blue} /> Важно, но не срочно</p>
                <p className="leg-elem"><img src={green} /> Не срочно и не важно</p>
            </div>
            </>
            )
    }
}


export default ToDo;
