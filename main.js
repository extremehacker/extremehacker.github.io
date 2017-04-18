setInterval(function() {
    var myImageElement = document.getElementById('img');
    myImageElement.src = myImageElement.src + '?rand=' + Math.random();
}, 1000);
