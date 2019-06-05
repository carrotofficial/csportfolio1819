// save our input and output ids
var input = document.getElementById("in");
var output = document.getElementById("out");
var select = document.getElementsByTagName("select")[0];



input.addEventListener("keypress", function(){
    setTimeout(function(){
        if (select.value == "reverse"){
            // unicode character for text reversal
            output.innerHTML = "\u202e" + input.value;
        }
        if (select.value == "vertical"){
            // insert newlines between every letter
            var newStr = "";
            for (var i=0;i<input.value.length;i++){
                newStr += input.value[i];
                newStr += "<br />";
            }
            output.innerHTML = newStr;
        }
        if (select.value == "owo"){
            var newStr = "";
            for (var i=0;i<input.value.length;i++){
                if (input.value[i] == "l" || input.value[i] == "r") {
                    newStr += "w";
                }
                else {
                    newStr += input.value[i];
                }
                output.innerHTML = newStr;
            }
        }
        if (select.value == "umlaut"){
            var newStr = "";
            for (var i=0;i<input.value.length;i++){
                if (input.value[i] == "a") {
                    newStr += "ä";
                }
                else if (input.value[i] == "e") {
                    newStr += "ë";
                }
                else if (input.value[i] == "i") {
                    newStr += "ï";
                }
                else if (input.value[i] == "o") {
                    newStr += "ö";
                }
                else if (input.value[i] == "u") {
                    newStr += "ü";
                }
                else {
                    newStr += input.value[i];
                }
                output.innerHTML = newStr;
            }
        }
        if (window.sans === true){
            input.style.visibility = "hidden";
            document.write("<h1>you are gonna have a bad time</h1><br /><img src='assets/Sans_griffin.jpg'><audio src='assets/Bruhlovania.mp3'></audio>");
            document.getElementsByTagName("audio")[0].play();
        }
    }, 100);
});