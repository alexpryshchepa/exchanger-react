import React from 'react'

const API_URL = 'http://api.fixer.io/latest?base=USD'

export default function GetRates(cb, error) {
  let url = API_URL;
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        let data = response.json();
        return data;
      } else {
        error();
      }
    }).then(function (data) {
      let names = [];
      for (let key in data.rates) {
        names.push(String(key))
      }
      cb(data, names);
    })
}