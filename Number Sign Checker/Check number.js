
function checkerr(){
        let num1 = document.getElementById("num1").value;
        let btn = document.getElementById("btn");

        if (num1 > 0){
            document.getElementById("p1").innerHTML = ("The number " + num1 + " is Positive.")
        }else{
            document.getElementById("p1").innerHTML = ("The numbe " + num1 + " is negative.")
        }
};