function requireBalance() {
    var requestUrl = "requestBalance.php";
    var oReq = new XMLHttpRequest();
    console.log("requestFilterData: " + requestUrl);
    oReq.addEventListener("load", responseFunction);
    oReq.open("GET", requestUrl);
    oReq.send();
}

function responseFunction() {
    $('#money-amount').text(parseInt(this.responseText.replace("\"", "")) + "€");
    console.log(this.responseText);
}

// function transferMoney(money) {
//     console.log("neki");

//     $.ajax({
//         type : 'GET',
//         url : 'http:193.2.178.88/dragonhack/public/api/pay/{amount}/{walletid}',
//       //Any post-data/get-data parameters
//       //This is optional
//         data : {
//           'amount' : 'money',
//         //   TODO: hardcodan id
//           'walletid' : ''
//         },
//       //The response from the server
//         success : function(data) {
//           if (data == "success") {
//             alert('request sent!');
//           }
//         }
//       });
// }

$(function() { 
    $('.mon').text('60');
    requireBalance();
});