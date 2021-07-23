fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(Data => console.log(Data))