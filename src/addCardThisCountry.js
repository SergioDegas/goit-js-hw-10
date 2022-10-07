export function thisCountryList({ flags, name }) {
  return `
    <li class = country-item>
    <img class = 'country-list__flags' src="${flags.svg}" alt="${name.official}" width=50/>
    <h2 class = country-list__name>${name.official}</h2>
    </li>
    `;
}

export function countryCard({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  return `
    <div class=" country">
      <img class = "flag" src="${flags.svg}" alt="${
    name.official
  }" width = 100/>
  <h2 class = "title">Country: ${name.official}</h2>
  <p class = "text">Capital: ${capital}</p>
      <p class="text">Population: ${population}</p>
      <p class="text">Languages: ${Object.values(languages)}</p>
    </div>
    `;
}
