import axios from "axios";

const BASE_URL = 'http://autocomplete.seav.us';

export {getCountries};

function getCountries() {
    const url = `${BASE_URL}/countries.json`;
    return axios.get(url).then(response => response.data);
}