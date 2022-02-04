import React from "react";

class ScrumItem extends React.Component {

    state = {
        goal: ''
    }
    changeGoal = e => {
        this.setState({
            goal: e.target.value,
        })
    }

    render() {
        return(
            <div>
               <input value={this.state.goal} onChange={this.changeGoal}/> 
            </div>
        )
    }
}

export default ScrumItem;