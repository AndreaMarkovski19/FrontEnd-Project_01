//$(function () {

//    $.getJSON("mydata.json", function () {
//        $.value(function () {
//            $("#mainTitle_Ohridsko_Ezero").append("<p>" + e.value + e.obj + ohrids_lake.value + "</p>");
//        });
//    });
//});


$.ajax({
    url: 'mydata.json',
    type: 'GET',
    data: 'data',
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
        $.success("#mainTitle_Ohridsko_Ezero").append("<p>" + data + "</p>");
        console.log(data);
    },
    error: function (e) {
        console.log(error);
    }
});

