import { refs } from './refs';
const { inputSearch, countryList, countryInfo } = refs;
export function clearLine() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  // console.log(countryInfo);
}
