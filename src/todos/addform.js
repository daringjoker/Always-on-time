import React from 'react'
import uuid from 'uuid'

class Additem extends React.Component {
    state = {
        title: ""
    }
    changed = (e) => {
        this.setState({ title: e.target.value })
    }
    save = (e) => {
        e.preventDefault();
        if (this.state.title !== "") {
            var newitem = {
                title: this.state.title,
                id: uuid(),
                completed: false
            }
            this.setState({ title: "" })
            this.props.mainapp.setState({
                data: [...this.props.mainapp.state.data, newitem]
            })
            this.props.mainapp.savestate()
        }

    }
    render() {
        return (
            <form onSubmit={this.save} style={{ display: "flex" }}>
                <input type="text" name="title" placeholder="Title For the new Todo" value={this.state.title} onChange={this.changed} style={{ flex: "10", padding: "5px" }}></input>
                <input type="submit" value="Add Todo" style={{ flex: "1", padding: "5px" }}></input>
            </form>
        )
    }
}

export default Additem;