

let str = document.getElementById("stringg");
    myDiv = document.getElementById("result");


function getCheck() {
    let newStr = str.value.split("").reverse().join("");

    if (str.value === newStr) {
        myDiv.value = "This string is Plindrome!";
    } else { myDiv.value = "This string is Not Plindrome!";
        }
    

}

