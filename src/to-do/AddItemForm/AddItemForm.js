import React from "react";
import { addItem } from "../../redux/actions";
import { connect } from 'react-redux';
import './Add.css'


class AddItemForm extends React.Component {
    state = {
        title: '',
        option: ''
    }

    addItem = () => {
        const {title, option} = this.state;
        this.props.addItem({
            title,
            style: option
        })
    }
    
    render() {

        const { title, option } = this.state

        return (
            <div>
                <div className={`goal ${option}`}>
                    <input className="my-objective"
                        defaultValue={title}
                        onBlur={(e) => this.setState({ title: e.target.value })}
                    />
                    <select
                        name="sel"
                        className="theme"
                        onChange={(e) => this.setState({ option: e.target.value })}
                    >
                        <option selected={option === 'red'} value='red'>Срочно и важно</option>
                        <option selected={option === 'pink'}  value='pink'>Срочно, но не важно</option>
                        <option selected={option === 'blue'}  value='blue'>Важно, но не срочно</option>
                        <option selected={option === 'green'}  value='green'>Не срочно и не важно</option>
                    </select>
                    <button className="add" onClick={this.addItem}>✔</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (obj) => {
            dispatch(addItem(obj))
        }
    }
}

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);


export default functionFromConnect(AddItemForm);

