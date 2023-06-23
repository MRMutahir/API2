// fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
//     if (!response.ok) {
//         throw new Error("error")
//     }
//     return response.json();
// }).then(getData => {
//     console.log(getData)
// }).catch(ele => {
//     alert(ele)
// })

fetch('https://api.slingacademy.com/v1/sample-data/photos').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    ui(data)

});
function ui(uiset) {
    console.log(uiset);
    let title = document.querySelector('.title');
    let discription = document.querySelector('.discription');
    let url = document.querySelector('.url');
    console.log(title, discription, url);
    title.innerHTML = uiset.photos[0].title;
    discription.innerHTML = uiset.photos[0].description
    url.innerHTML = uiset.photos[0].url
}
