import React, {Component} from 'react';
import './Menu.scss';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    navSwitch = (e) => {
        let navItems = document.getElementsByClassName('navigate-items');
        for (let el of navItems) {
            if (el.classList.contains('active')) {
                el.classList.remove('active')
            }
            if (el.id === e.target.id) {
                el.classList.add('active')
            }
        }
        this.props.doSwitch(e.target.id);
    };

    render() {
        return (
            <div>
                <header className="App-header">
                    <div className="logo">
                        <img alt="logo" src="https://gc.onliner.by/images/logo/onliner_logo.v3@2x.png?token=1542621721"/>
                        <div>FAKE</div>
                    </div>
                    <div id="navigate" className="navigate">
                        <div onClick={this.navSwitch} id="people" className="navigate-items active">Люди</div>
                        <div onClick={this.navSwitch} id="auto" className="navigate-items">Авто</div>
                        <div onClick={this.navSwitch} id="tech" className="navigate-items">Техника</div>
                        <div onClick={this.navSwitch} id="realt" className="navigate-items">Недвижимость</div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Menu;