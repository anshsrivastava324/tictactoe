let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset');
let newgamebtn=document.querySelector('#new-btn');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.createElement("p");


let turn0=true;

const winningCombos=[
    [0,1,2],    
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Add event listeners to each box
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(box.innerHTML==''){
            box.innerHTML=turn0?'X':'O';
            turn0=!turn0;
        }
        checkWinner();
    });
});

// New game button
newgamebtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerHTML='';
    });
    msg.innerText='New game started!';
    msgcontainer.prepend(msg);
    enableBoxes();
    turn0=true;
});

// Reset button
resetbtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerHTML='';
    });
    msg.innerText='Game reset!';
    msgcontainer.prepend(msg);
    enableBoxes();
});

// Enable all boxes
const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    });
}

// Disable all boxes
const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}

// Check for a winner and display the message
const checkWinner=()=>{
    winningCombos.forEach((combo)=>{
        let [a,b,c]=combo;
        if(boxes[a].innerHTML==boxes[b].innerHTML && boxes[a].innerHTML==boxes[c].innerHTML && boxes[a].innerHTML!=''){
            
        msg.innerText=`Player ${boxes[a].innerHTML} wins!`;
        msgcontainer.prepend(msg);
        disableBoxes();
        }
    });
}