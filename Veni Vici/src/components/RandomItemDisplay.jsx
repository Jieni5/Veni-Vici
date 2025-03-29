const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_qnLNvnoCRPpu05b66eXqYGpJ2vBnc1fxXJhIGATZKLoIOuoTy4O7GdPVKpLB2cwR"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));        