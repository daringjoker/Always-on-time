import React from 'react'


class Todoitem extends React.Component {
    style = () => {
        return {
            margin: "auto 0px",
            background: this.props.todo.completed ? "#567" : "#999",
            borderBottom: "2px dashed black",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }
    render() {
        let completed = this.props.todo.completed
        return (
            <div style={this.style()}>
                <input type="checkbox" style={{ float: "left" }} onChange={this.props.mainapp.toggled.bind(this, this.props.todo.id)} checked={completed}></input>
                <p>{this.props.todo.title}</p>
                <button onClick={this.props.mainapp.del.bind(this, this.props.todo.id)} style={{ borderRadius: "50%", float: "right", backgroundColor: "#ff0000" }}>x</button>
            </div>
        )
    }
}

export default Todoitem;