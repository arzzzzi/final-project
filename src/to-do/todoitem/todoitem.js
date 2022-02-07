import React from "react";
import { changeObjective } from "../../redux/actions";
import { connect } from 'react-redux'


class ToDoItem extends React.Component {
    state = {
        title: '',
        option: ''
    }

    test = (e) => {
        this.setState({
            option: e.target.value
        })
    }
    render() {
        const {moveToList, removeObjective, changeObjective, title, id } = this.props

        console.log(id, title)

        return (
            <div>
                <div className={`goal ${this.state.option}`}>
                    <input
                        defaultValue={title}
                        onBlur={(e) => changeObjective(id, e.target.value)}
                        onChange={() => console.log(title)}
                    />
                    <select name="sel" className="theme" onChange={(e) => this.test(e)}>
                        <option value='red'>Срочно и важно</option>
                        <option value='pink'>Срочно, но не важно</option>
                        <option value='blue'>Важно, но не срочно</option>
                        <option value='green'>Не срочно и не важно</option>
                    </select>
                    <button className="remover" onClick={() => removeObjective(this.props)}>-</button>
                    <button className="add" onClick={() => moveToList(this.props)}>+</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        objectives: state.objectives
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeObjective: (id, value) => {
            dispatch(changeObjective(id, value))
        }
    }
}

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);


export default functionFromConnect(ToDoItem);


