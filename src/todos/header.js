import React from 'react';

class Header extends React.Component {
    headerstyle = {
        background: "#89a",
        margin: "0px",
        padding: "10px",
        textAlign: "center"
    }
    h1style = {
        margin: "0px"
    }
    render() {
        return (
            <header style={this.headerstyle}>
                <h1 style={this.h1style}>Always On Time</h1>
                <p><em>A Very compact in browser Todo app.</em></p>
            </header>
        )
    }


}
export default Header;