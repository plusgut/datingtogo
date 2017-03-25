import React, { Component } from 'react';


class Header extends Component {
    render () {
        return (
            <div className="header" onClick={this.props.showLogo}>
                Destiny
                <div className="subheader">MAKE ONLINE DATING<br />OFFLINE AGAIN</div>
            </div>
        );
    }
}

export default Header;