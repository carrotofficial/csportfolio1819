function parse(str){
    var operators = [];
    // count the number of operators
    for (var i=0;i<str.length;i++){
        if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/" || str[i] === "^") {
            operators += i;
        }
    }
    
    // this app currently has support for only one operator
    if (operators.length !== 1) {
        return "Invalid input!";
    }
    else {
        // store what operator we need for easier access
        var op = operators[0];
        // return the array of [firstNum, operation, secondNum]
        return [str.substring(0, op), str[op], str.substring(op)];
    }
}

function calc(str) {
    var parsed_str = parse(str);
    // test what our operator is
    if (parsed_str[1] === "+") {
        return Number(parsed_str[0]) + Number(parsed_str[2].substring(1));
    }
    if (parsed_str[1] === "-") {
        return Number(parsed_str[0]) - Number(parsed_str[2].substring(1));
    }
    if (parsed_str[1] === "*") {
        return Number(parsed_str[0]) * Number(parsed_str[2].substring(1));
    }
    if (parsed_str[1] === "/") {
        return Number(parsed_str[0]) / Number(parsed_str[2].substring(1));
    }
    if (parsed_str[1] === "^") {
        return Number(parsed_str[0]) ** Number(parsed_str[2].substring(1));
    }
}

// run this when everything else has loaded
$(document).ready(function(){
    // run this when the button is clicked
    $("#submit").on("click", function(){
        // set the <span> tag to the output of the calc() function
        $("#output").html(calc($("input").val()));
    });
});