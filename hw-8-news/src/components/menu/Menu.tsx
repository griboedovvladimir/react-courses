import React, {Component, ReactNode} from 'react';

interface MenuStateTypes {
    people: string;
    auto: string;
    tech: string;
    realt: string;

    [x: string]: string;
}

interface MenuPropsTypes {
    doSwitch: (id: string) => void;
}

class Menu extends Component<MenuPropsTypes, MenuStateTypes> {
    public state = {
        people: 'active',
        auto: '',
        tech: '',
        realt: ''
    };

    navSwitch = (e: React.MouseEvent<HTMLElement>): void => {
        let target = e.target as HTMLElement;
        for (let key in this.state) {
            this.setState({[key]: ''});
            if (target.id === key) {
                this.setState({[key]: 'active'});
            }
        }

        this.props.doSwitch(target.id);
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