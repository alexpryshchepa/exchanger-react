import React from 'react'

const API_URL = 'http://api.fixer.io/latest?base=USD'

export default function GetRates(cb) {
  let url = API_URL;
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        let data = response.json();
        return data;
      } else {
        alert('We cannot resolve currency rates, sorry!');
      }
    }).then(function (data) {
      cb(data);
    })
}