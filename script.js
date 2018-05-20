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
    document.getElementById("transaction-text").innerText = "Transaction was successful";
    requireBalance();
}

function responseFunction() {
    $('#money-amount').text(parseInt(this.responseText.replace("\"", "")) + "€");
    console.log(this.responseText);
}


function transferMoney(money) {
    money = document.getElementById("amount").value;
    requestPaymentConfirmation(money);
    showModalDialog();

}

function showModalDialog() {
    document.getElementById("transaction-text").innerText = "Transaction in progress";
    jQuery.noConflict();
    $("#myModal").modal('show');

}


function checkConfirmation() {
 }

function cancelInterval() {

}

$(function () {
    $('.mon').text('60');
    requireBalance();
});