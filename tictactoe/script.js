let box = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbtn")
let newbtn = document.querySelector("#newbtn")
let details = document.querySelector(".details")
let msg = document.querySelector(".message")

let valueO  = true;



let winparameter = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let disabledbox = ()=>{
    box.forEach((b)=>{
        b.disabled=true
    })
}

let enabledbox = ()=>{
    box.forEach((b)=>{
        b.disabled=false
        b.innerText = ""
        b.classList.remove("o-color", "x-color")
    })
    details.classList.add("hide")
}
let click = 0;
box.forEach((b) => {
    b.addEventListener("click", ()=>{
        if (valueO) {
            b.innerText = "O";
            b.classList.add("o-color")
            valueO = false
            click++
        }
        else{
            b.innerText = "X";
            valueO = true
            b.classList.add("x-color")  
            click++
        }
        b.disabled = true
        checkwinner()
    })
    
});

const showwinner = (winner)=>{
    msg.innerText = `Winner is ${winner}`
    details.classList.remove("hide")
}


const checkwinner = ()=>{
    for (let i of winparameter){
        let pos1 = box[i[0]].innerText
        let pos2 = box[i[1]].innerText
        let pos3 = box[i[2]].innerText

        if (pos1 !="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
                disabledbox()
                showwinner(pos1);
                return
            }
        }
    }
    if (click === 9){
        disabledbox()
        msg.innerText = "Draw"
        details.classList.remove("hide")
    }
} 

let disable = ()=>{
    valueO = true
    click = 0
    enabledbox()
}

newbtn.addEventListener("click", disable)
resetbtn.addEventListener("click", disable)
