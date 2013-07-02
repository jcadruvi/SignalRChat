$(function () {
    var myConnection = $.connection("/chat");
    myConnection.received(function (data) {
        $("#content").append("<div>" + data.Name + ': ' + data.Message + "</div>");
    });

    myConnection.error(function (error) {
        console.warn(error);
    });

    myConnection.start()
    .promise()
    .done(function () {
        $("#send").click(function () {
            var myName = $("#name").val();
            var myMessage = $("#field").val();
            myConnection.send(JSON.stringify({ name: myName, message: myMessage }));
        });
    });
});