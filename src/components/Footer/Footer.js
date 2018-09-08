import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var style = {
            backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            position: "relative",
            overflow: 'hidden',
            left: "0",
            bottom: "0",
            height: "5.5em",
            width: "100%",
        }
        
        var phantom = {
          display: 'block',
          marginTop: '79vh'
        //   padding: '20px',
        //   height: '60px',
        //   width: '100%',
        }

        return (
            <div style={phantom}>
                <footer style={style}>
                    <h3>This is your footer.</h3>
                    <p> Current year = {new Date().getFullYear()}</p>
                </footer>
            </div>
        )
    }
}

export default Footer;
