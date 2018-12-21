import React, {Component, ReactNode}  from 'react';

class Menu extends Component {
    public props: any;
    public state = {
        people: 'active',
        auto: '',
        tech: '',
        realt: ''
    };

    constructor(props: any) {
        super(props);
    }

    navSwitch = (e: any): void => {
        for (let key in this.state) {
            this.setState({[key]: ''});
            if (e.target.id === key) {
                this.setState({[key]: 'active'});
            }
        }

        this.props.doSwitch(e.target.id);
    };

    public render(): ReactNode {
        return (
            <div>
                <header className="App-header">
                    <div className="logo">
                        <img alt="logo"
                             src="https://gc.onliner.by/images/logo/onliner_logo.v3@2x.png?token=1542621721"/>
                        <div>FAKE</div>
                    </div>
                    <div id="navigate" className="navigate">
                        <div onClick={this.navSwitch} id="people"
                             className={'navigate-items ' + this.state.people}>Люди
                        </div>
                        <div onClick={this.navSwitch} id="auto" className={'navigate-items ' + this.state.auto}>Авто
                        </div>
                        <div onClick={this.navSwitch} id="tech"
                             className={'navigate-items ' + this.state.tech}>Техника
                        </div>
                        <div onClick={this.navSwitch} id="realt"
                             className={'navigate-items ' + this.state.realt}>Недвижимость
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Menu;