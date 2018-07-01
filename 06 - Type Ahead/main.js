window.addEventListener('load', () => {

  /*
   * Elements
   */

  const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = [];
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  /*
   * Functions
   */

  function displayMatches() {
    const matches = findMatches(this.value, cities);
    const html = matches.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, match => `<span class="hl">${match}</span>`);
      const stateName = place.state.replace(regex, match => `<span class="hl">${match}</span>`);
      return `<li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>`
    }).join('');
    suggestions.innerHTML = html;
  }

  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /*
   * Event listeners
   */

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);

  /*
   * Initialise
   */

  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

});
