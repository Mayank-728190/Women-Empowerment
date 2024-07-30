var urlParams = new URLSearchParams(window.location.search);
var data = urlParams.get('data');
console.log(data);

var data = localStorage.getItem('data');
console.log(data); // Output: value


var cookies = document.cookie.split(';');
var data;
cookies.forEach(cookie => {
    if (cookie.includes('data')) {
        data = cookie.split('=')[1];
    }
});
console.log(data); // Output: value


var urlParams = new URLSearchParams(window.location.search);
var data = urlParams.get('data');
console.log(data); // Output: value