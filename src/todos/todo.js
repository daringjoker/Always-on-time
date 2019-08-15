import React from 'react';
import Todoitem from './todoitem';

class Todolist extends React.Component {

    render() {
        return (
            this.props.list.map((cur_todo, index) => {
                return <Todoitem todo={cur_todo} mainapp={this.props.mainapp} key={index} />
            })
        )
    }
}

export default Todolist;