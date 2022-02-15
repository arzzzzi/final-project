import React from "react";
import { addItem } from "../../redux/actions";
import { connect } from 'react-redux';
import './Add.css';
import {CheckOutlined} from '@ant-design/icons';
import {CloseOutlined } from '@ant-design/icons';


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
    onClick = () => {
        this.props.hide()
    }
    render() {

        const { title, option } = this.state
        return (
            <div>
                <div className={`goal ${option}`} >
                    <input className="my-objective"
                        defaultValue={title}
                        onBlur={(e) => this.setState({ title: e.target.value })}
                        placeholder="Введите задачу"
                    />
                    <select
                        name="sel"
                        className="theme"
                        value={option.value}
                        onChange={(e) => this.setState({ option: e.target.value })}
                        defaultValue='Выберите приоритет'
                    >
                        <option value=''  hidden >Выберите приоритет</option>
                        <option  value='red'>Срочно и важно</option>
                        <option  value='pink'>Срочно, но не важно</option>
                        <option value='blue'>Важно, но не срочно</option>
                        <option value='green'>Не срочно и не важно</option>
                    </select>
                    <div className="add" onClick={this.addItem}><CheckOutlined /></div>
                    <div className="hide-tab" onClick={this.onClick}><CloseOutlined /></div>
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


