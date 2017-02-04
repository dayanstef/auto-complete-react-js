import React, {PropTypes} from "react";

export default CountryListItem;

function CountryListItem({country}) {
    return (
        <li>
            {country.name}
        </li>
    );
}

CountryListItem.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.string,
    }),
};

CountryListItem.defaultProps = {
    country: {},
};
