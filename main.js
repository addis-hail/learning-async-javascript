// async & await

const getTodos = async () => {

    const response = await fetch('todos/addis.json');
    const data = await response.json();
    return data;

};

console.log(1);
console.log(2);

getTodos()
.then(data => console.log('resolved:', data));

console.log(3);
console.log(4);



// fetch('todos/addis.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('rejected', err);
// });
