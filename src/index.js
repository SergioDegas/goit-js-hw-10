import './css/styles.css';
import { fetchCountries } from './fechCountries';
import { thisCountryList, countryCard } from './addCardThisCountry';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { refs} from './refs';
import { clearLine } from './clearLine'

const DEBOUNCE_DELAY = 300;
const { inputSearch, countryList, countryInfo } = refs

inputSearch.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// console.log(inputSearch);



function onSearch(e) {
  e.preventDefault();
  let search = inputSearch.value;
  console.log(search);
  if (search.trim() === '') {
   clearLine()
    return;
  }

  fetchCountries(search.trim())
    .then(countries => {
      console.log(countries);

      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
       clearLine()
        return;
      }

      if (countries.length > 1 && countries.length <= 10) {
        const cardList = countries.map(country => thisCountryList(country));
        countryList.innerHTML = cardList.join('');
        countryInfo.innerHTML = '';
      }

      if (countries.length === 1) {
        const card = countries.map(country => countryCard(country));
        countryList.innerHTML = '';
        countryInfo.innerHTML = card.join('');
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    clearLine()
      return error;
    });
}
