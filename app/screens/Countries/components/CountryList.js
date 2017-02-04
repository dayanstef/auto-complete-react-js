import React, {Component, PropTypes} from "react";
import CountryListItem from "./CountryListItem";
import {getCountries} from "../../../utils/countries-api";

export default class CountryList extends Component {
    constructor() {
        super();
        this.state = {countries: []}
    }

    getCountries() {
        this.props.getCountries().then(countries => {
            this.setState({countries});
        });
    }

    componentWillMount() {
        this.getCountries();
    }

    render() {
        const {countries} = this.state;
        const {filter} = this.props;
        return (
            <ul id="countries">
                {renderCountries(countries, filter.toLowerCase())}
            </ul>
        );
    }
}

CountryList.propTypes = {
    filter: PropTypes.string.isRequired,
    getCountries: PropTypes.func,
};
CountryList.defaultProps = {getCountries};

function renderCountries(countries, filter) {
    return countries
        .filter(country => {
            return !filter ||
                (country.name && country.name.toLowerCase().includes(filter));
        })
        .map(country => <CountryListItem key={country.name} country={country}/>);
}
