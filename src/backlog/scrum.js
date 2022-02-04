import React from "react";
import ScrumItem from "./scrumitem/scrumitem";

class Scrum extends React.Component {
    state = {
        backlog: [],
        todo: [],
        doing: [],
        done: []
    }
    render() {
        return(
            <div>
                <div className="scrumelements">
                    <div className="backlog">
                        {this.state.backlog}
                    </div>
                    <div className="todoscrum">
                        {this.state.todo}
                    </div>
                    <div className="doing">
                        {this.state.doing}
                    </div>
                    <div className="done">
                        {this.state.done}
                    </div>
                </div>
                <ScrumItem />
            </div>
        )
    }
}

export default Scrum;