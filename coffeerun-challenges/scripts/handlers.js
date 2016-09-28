function changeEventHandler(event) {
    var caffeine_label = document.getElementById('numerical-value');

    caffeine_label.innerHTML = event.target.value;

    caffeine_label.style.color = greenToRedGradient(event.target.valueAsNumber);
}

function greenToRedGradient(value) {
    var val = (-1.2 * value) + 120;
    return 'hsl('+val+',100%,50%)';
}
