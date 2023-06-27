
const obj = document.getElementById("container");
const off = document.getElementById("btn-blink-off-2");
const btnblink = document.getElementById("btn-blink-on");

function start() {
    
    setInterval(() => {

        btnblink.title = "For Blink speed Increase click time";

        setTimeout(() => {
            obj.style.backgroundColor = "red";
            obj.style.boxShadow = "0px -19px 50px red";
            obj.style.border = "0px ";
        }, 200);

        

        setTimeout(() => {
            obj.style.backgroundColor = "white";
            obj.style.boxShadow = "0px -19px 50px white";
            obj.style.border = " 0px ";
        }, 500);


    }, 700);

}


function light(){
    
    setTimeout(()=>{
        obj.style.backgroundColor = "yellow";
        obj.style.boxShadow = "0px -19px 50px orange";
        obj.style.border = "0px ";
    });
    
}

function unlight(){
    setTimeout(()=>{
        obj.style.backgroundColor = "";
        obj.style.boxShadow = "";
        obj.style.border = "2px solid black ";
    });
}


