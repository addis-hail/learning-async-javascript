// fetch api

fetch('todos/addis.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(() => {
    console.log('rejected', err);
});
