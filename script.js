document.addEventListener("DOMContentLoaded", function() {
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeRandomColors() {
        var elements = document.querySelectorAll('.random-bg');
        elements.forEach(function(element) {
            element.style.backgroundColor = getRandomColor();
            element.style.color = getRandomColor();
        });
    }

    setInterval(changeRandomColors, 1000);

    function clickCounter(event) {
        if (!event.target.dataset.clicks) {
            event.target.dataset.clicks = 0;
        }
        event.target.dataset.clicks++;
        alert("Nombre de clics : " + event.target.dataset.clicks);
    }

    var clickElements = document.querySelectorAll('.click-counter');
    clickElements.forEach(function(element) {
        element.addEventListener('click', clickCounter);
    });
});
