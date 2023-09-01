var example = ['GeoFS Addons', '737 Fuel Addon'];

textSequence(0);
function textSequence(i) {

    if (example.length > i) {
        setTimeout(function () {
            document.getElementById("sequence").innerHTML = example[i];
            textSequence(++i);
        }, 800); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}