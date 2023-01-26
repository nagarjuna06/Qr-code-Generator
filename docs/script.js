let qrCode = new QRCode(document.querySelector('.qr-code'))
qrCode.makeCode("https://github.com/nagarjuna06")
let qrCodeContainer = document.querySelector(".qr-code-container")
let input = document.querySelector(".input");
var link = document.querySelector("a");
function generateQr(){
    qrCode.makeCode(input.value)
    downloadimage()
    link.classList.remove('d-none')

}

input.addEventListener("input",generateQr)
function downloadimage() {
    var container = document.querySelector(".qr-code-cont"); /* full page */
    html2canvas(container, { allowTaint: true }).then(function (canvas) {

        link.download = "qr-code.jpg";
        link.href = canvas.toDataURL();
        link.target = '_blank';
    });
}
link.click();
