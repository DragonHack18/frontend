var looperNumber = 0;


function requireBalance() {
    var requestUrl = "requestBalance.php";
    var oReq = new XMLHttpRequest();
    console.log("requestFilterData: " + requestUrl);
    oReq.addEventListener("load", responseFunction);
    oReq.open("GET", requestUrl);
    oReq.send();
}

function requestPaymentConfirmation(money) {
    var requestUrl = "requestPay.php?walletid=1&amount=" + money;
    var oReq = new XMLHttpRequest();
    console.log("requestingPayment: " + requestUrl);
    oReq.addEventListener("load", requestPaymentConfirmationResponse);
    oReq.open("GET", requestUrl);
    oReq.send();
}

function requestPaymentConfirmed() {
    var requestUrl = "requestConfirmation.php";
    var oReq = new XMLHttpRequest();
    console.log("requestingIfPaymentConfirmed: " + requestUrl);
    oReq.addEventListener("load", paymentConfirmationResponse);
    oReq.open("GET", requestUrl);
    oReq.send();
}

function paymentConfirmationResponse() {
    if (this.responseText === "1") {
        document.getElementById("transaction-text").innerText = "Transaction was successful";
    }
}


function requestPaymentConfirmationResponse() {
    console.log(this.responseText);
}

function responseFunction() {
    $('#money-amount').text(parseInt(this.responseText.replace("\"", "")) + "€");
    console.log(this.responseText);
}
var intervalId;
function transferMoney(money) {
    money = document.getElementById("amount").value;
    requestPaymentConfirmation(money);

    intervalId = window.setInterval(checkConfirmation(), 3000);
    showModalDialog();

}

function showModalDialog() {
    var modal = $('#myModal');
    modal.modal();
}


function checkConfirmation() {
    looperNumber++;
    if (looperNumber === 5) {
        window.clearInterval(intervalId);
        looperNumber = 0;
    }
    requestPaymentConfirmed()
}

function cancelInterval() {

}

$(function () {
    $('.mon').text('60');
    requireBalance();
});