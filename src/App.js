import React from 'react';
import Todolist from './todos/todo.js'
import Additem from './todos/addform.js'
import Header from './todos/header.js'
import Footer from './todos/footer.js'
import './App.css';


class App extends React.Component {
  state = {
    data: []
  }


  componentDidMount() {
    // localStorage.clear()
    let savedData = JSON.parse(localStorage.getItem("data"));
    if (!savedData) {
      savedData = []
    }
    this.setState({ data: savedData })
  }


  savestate = () => {
    console.log("saving data to local storage")
    setTimeout(() => {
      localStorage.setItem("data", JSON.stringify(this.state.data))
    }, 1000);
  }


  toggled = (id) => {
    this.setState({
      data: this.state.data.map((current) => {
        if (current.id === id) {
          current.completed = !current.completed
        }
        return current
      })
    })
    this.savestate()
  }


  del = (id) => {
    this.setState({
      data: [...this.state.data.filter((curr) => (curr.id !== id))]
    })
    this.savestate()
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Additem mainapp={this} />
        <Todolist list={this.state.data} mainapp={this} />
        <Footer />
      </div>
    );
  }


}

export default App;