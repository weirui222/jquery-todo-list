var removeList = function() {
    $(this).parent().remove();
}

//add
var addList = function() {
    var textSpan = $('<span></span>', {
      text: $("#input").val()
    });

    var xSpan = $('<span></span>', {
      text: '\u00D7',
      class: 'close'
    });

    // xSpan.on("click", removeList);

    var node = $('<li></li>');
    node.append(textSpan);
    node.append(xSpan);

    $("#myOl").append(node);

    $("#input").val('');
    $("#input").focus();
}

$("button").on("click", addList);

$("#myOl").on("click", ".close", removeList);
