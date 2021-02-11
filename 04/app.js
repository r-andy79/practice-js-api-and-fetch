document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('DOM');
}

// fetch(
//   'https://api.weatherbit.io/v2.0/current?lat=52.52&lon=19.39&key=c92ba49a540b45b0937367034a371e30'
// )
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//   })
//   .then((data) => console.log(data.data[0].weather.description));

const formEl = document.querySelector('form');
formEl.addEventListener('submit', (e) => {
  const [lat, lng] = e.target.elements;
  fetch(
    `https://api.weatherbit.io/v2.0/current?lat=${lat.value}&lon=${lng.value}&key=c92ba49a540b45b0937367034a371e30`
  )
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((data) => {
      const summaryEl = document.querySelector('.weather__summary');
      console.log(summaryEl);
      summaryEl.textContent = data.data[0].weather.description;
    })
    .catch((err) => console.error(err));
});
