import React, {Component} from "react";
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";

export default class Countries extends Component {
    constructor() {
        super();
        this.state = {filter: ''}
    }

    handleFilterUpdate = (filter) => {
        this.setState({filter})
    };

    render() {
        const {filter} = this.state;
        return (
            <section className="container home">
                <h3 className="ds-h3">ReactJS AutoComplete</h3>
                <h5 className="ds-h5">pure ReactJS autoComplete country search</h5>
                <div className="row">
                    <div className="column column-50 ds-0auto">
                        <CountryFilter onUpdate={this.handleFilterUpdate}/>
                        <CountryList filter={filter}/>
                    </div>
                </div>
            </section>
        );
    }
}

Countries.contextTypes = {
    router: React.PropTypes.object.isRequired,
};
