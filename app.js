let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#rstbtn");
let msgcontainer = document.querySelector(".msg-container");
let rst =document.querySelector("#rst");
let msg =document.querySelector(".msg");
let trurn0 = true;
const winpatern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const rstbtn=()=>{
    let trurn0 = true;
    
    msgcontainer.classList.add("hide")
    enableboxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (trurn0) {
            box.innerHTML = "x"
            trurn0 = false;
        } else {
            box.innerHTML = "o"
            trurn0 = true;
        }
        box.disabled = true

        checkwinner();
    })
})
const enableboxes=()=>{
 for(box of boxes){
    box.disabled=false;
    box.innerHTML="";
 }
}
const disabledboxes=()=>{
    for(box of boxes){
        box.disabled=true
    }
}
const showwinner=(winner)=>{
    msg.innerHTML =`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes()
}
const checkwinner = () => {
    for (let pattern of winpatern) {
        
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;
        if(pos1val !=""&&pos2val !=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winer")
                showwinner(pos1val);
            }
        }

    }
}

rest.addEventListener("click",rstbtn)
rst.addEventListener("click",rstbtn)