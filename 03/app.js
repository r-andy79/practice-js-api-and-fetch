document.addEventListener('DOMContentLoaded', init);

function init() {
  const btnEl = document.querySelector('button');
  btnEl.addEventListener('click', getData);
}

function getData() {
  fetch('https://api.ipify.org')
    .then((resp) => {
      if (resp.ok) {
        return resp.text();
      }
      return Promise.reject(resp);
    })
    .then((ip) => insertData(ip))
    .catch((err) => console.error(err));
}

function insertData(data) {
  const spanEl = document.querySelector('span');
  spanEl.innerText = `${data}`;
}
