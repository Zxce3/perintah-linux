import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', this.loadData);
  }

  loadData = () => {
    const searchInputs = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchTerm = searchInputs.value;

    if (searchTerm.length > 0) {
      fetch('/assets/search.json')
        .then(response => response.json())
        .then(data => {
          SimpleJekyllSearch({
            searchInput: searchInputs,
            resultsContainer: searchResults,
            json: data,
            searchResultTemplate: `<li><a href="{u}" class="dropdown-item text-decoration-none text-wrap d-block bg-dark-light-dm bg-white-lm">
            {t} - {d}</a></li><hr/>`,
            noResultsText: '<p class="mt-5 text-center text-danger">Oops! Nggak ketemu.</p>',
            templateMiddleware: function(prop, value, template) {
              if (prop === 'categories') {
                if (value === '') {
                  return `${value}`;
                } else {
                  return `${value}`;
                }
              }
            }
          });
        })
        .then(() => {
          const links = searchResults.getElementsByTagName('a');
          for (let i = 0; i < links.length; i++) {
            let text = links[i].textContent;
            let words = text.split(' ');
            for (let j = 0; j < words.length; j++) {
              if (words[j].toLowerCase().includes(searchTerm.toLowerCase())) {
                words[j] = words[j].replace(
                  new RegExp(`(${searchTerm})`, 'gi'),
                  '<span class="text-primary font-weight-bold">$1</span>'
                );
              } else {
                let chars = words[j].split('');
                for (let k = 0; k < chars.length; k++) {
                  if (chars[k].toLowerCase() === searchTerm.toLowerCase()) {
                    chars[k] = `<span class="text-primary font-weight-bold">${chars[k]}</span>`;
                  }
                }
                words[j] = chars.join('');
              }
            }
            links[i].innerHTML = words.join(' ');
          }
        });
        searchInputs.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim();
          if (searchTerm) {
            searchResults.style.display = 'block';
          } else {
            searchResults.style.display = 'none';
          }
      });
    }
  };
}
