import React from "react";
import ListItem from "./listitem/listitem";
import {savelist} from '../api';
import { connect } from "react-redux";

class ToDoList extends React.Component {
   state = {
       list: []
   }
    render() {
        const {list} = this.state
        return (
            <div>
            <ListItem />
            <button onClick={() => savelist(list)}>Save</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
})

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(ToDoList)
