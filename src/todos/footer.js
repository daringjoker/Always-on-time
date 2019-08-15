import React from 'react'

class Footer extends React.Component {

    footerstyle = {
        textAlign: "center",
        background: "#89a",
        margin: "0px",
        padding: "10px",
        position: "fixed",
        left: "0px",
        right: "0px",
        bottom: "0"
    }
    render() {

        return (
            <React.Fragment>
                <div style={{ height: "20%", paddingTop: "100px" }}></div>
                <footer style={this.footerstyle}>
                    <p style={{ margin: "0px", flex: "10", textAlign: "center" }}><strong>Made by:</strong><em> Pukar Giri (Daring Joker)</em></p>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;