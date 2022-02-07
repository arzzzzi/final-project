import React from "react";
import { addObjective, moveToList, removeObjective } from "../redux/actions";
import ToDoItem from "./todoitem/todoitem";
import { connect } from 'react-redux';
import ToDoList from "./todolist/todolist";


class ToDo extends React.Component {
    state = {
        objectives: [],
        date: ''
    }
    componentDidMount() {
        const { objectives } = this.props;
        this.setState({ objectives });
    }
    addObjective = () => {
        this.props.addObjective({ title: '' })
    }
    moveToList = (id) => {
        this.props.moveToList(id)
    }
    removeObjective = (index) => {
        this.props.removeObjective(index)
        console.log(index)
    }
    render() {
        const { objectives } = this.props
        console.log(objectives)
        return (
            <div>
                <div>
                    <ToDoList />
                </div>
                <div className="objectives">
                    {objectives && objectives.map((item, index) => (
                        <ToDoItem
                            key={item.id}
                            {...item}
                            removeObjective={() => this.removeObjective(index)}
                            moveToList={() => this.moveToList}
                        />
                    ))}
                    <button onClick={this.addObjective}>Создать новую задачу</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addObjective: obj => dispatch(addObjective(obj)),
    removeObjective: index => dispatch(removeObjective(index)),
    moveToList: id => dispatch(moveToList(id))
})

const mapStateToProps = (state) => {
    return {
        objectives: state.objectives,
        itemId: state.id
    }
}

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);


export default functionFromConnect(ToDo);
