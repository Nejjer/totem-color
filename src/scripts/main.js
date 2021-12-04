$(document).ready(function(){
    $("button").click(
        () => {
            let hex = "#" + decimalToHex(parseDate($("input").val()));
            $(".color").css("background-color",hex);
        }
    )
});

function decimalToHex(d) {
    var hex = Number(d).toString(16);
    return hex;
}

function parseDate(date){
    let year = date.substring(0,4);
    let month = date.substring(5,7);
    let day = date.substring(8,11);
    return month + day + year;
}