import React, {Component, PropTypes} from "react";

export default class CountryFilter extends Component {
    constructor() {
        super();
    }

    clearInput(event) {
        if (event.keyCode === 27) {
            this.refs['country'].value = '';
        }
    }

    render() {
        return (
            <section>
                <input
                    ref='country'
                    type="text"
                    placeholder="Search country..."
                    onKeyUp={({target: {value}}) => this.props.onUpdate(value)}
                    onKeyDown={this.clearInput.bind(this)}
                />
            </section>
        );
    }
}

CountryFilter.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};
