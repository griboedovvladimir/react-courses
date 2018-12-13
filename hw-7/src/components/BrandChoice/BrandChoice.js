import React, {Component} from 'react';
import './BrandChoice.css';


class BrandChoice extends Component {

    addToStore = (e) => {
        // console.log(e.target.selectedIndex.value)
    };

    render() {
        let options = Object.keys(this.props.renderData).map((brand, i) => <option key={i}>{brand}</option>);
        return (
            <form onFocus={this.props.changeUndisabled} id="form">
                <label htmlFor="brand">Choice brand</label>
                <select onChange={this.addToStore} name="brand" id="brand">
                    ${options}
                </select>
            </form>
        )
    }
}

export default BrandChoice;