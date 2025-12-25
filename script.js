let body = document.querySelector("body");
let choices=document.querySelectorAll(".choice");

let info= document.querySelector(".info");
let meroscore=document.querySelector(".mscore");
let botkoscore=document.querySelector(".bscore");
let mscore=0;
let bscore=0;
let def =()=>{ 
        info.style.backgroundColor="rgb(220, 220, 220)", 
        info.innerText="Sekect your choice";
    }


        let winmsgrock=()=>{  // Message to display when we win by choosing Rock 
            info.style.backgroundColor="rgb(135, 253, 78)",
            info.innerText="You Won!, The Bot chose Rock.";
        }
        let winmsgpaper=()=>{ 
            info.style.backgroundColor="rgb(135, 253, 78)",
            info.innerText="You Won!, The Bot chose Paper.";
        }
        let winmsgscissors=()=>{ 
            info.style.backgroundColor="rgb(135, 253, 78)",
            info.innerText="You Won!, The Bot chose Scissors";
        }
let losemsgrock=()=>
    {   // Message to display when we lose by choosing Rock 
        info.style.backgroundColor="rgb(249, 85, 63)",
        info.innerText="You Lost!, The Bot chose Rock.";
    }
    let losemsgpaper=()=>
        {
            info.style.backgroundColor="rgb(249, 85, 63)",
            info.innerText="You Lost!, The Bot chose Paper.";
            
        }
    let losemsgscissors=()=>
        {
            info.style.backgroundColor="rgb(249, 85, 63)",
            
            info.innerText="You Lost!, The Bot chose Scissors.";
        }
           
    let drawmsgrock=()=>{
   
        info.innerText="Draw!, The Bot also chose Rock.",
        info.style.background="rgb(220,220,220)";
    }

    let drawmsgpaper=()=>{

        info.innerText="Draw!, The Bot also chose Paper.",
        info.style.background="rgb(220,220,220)";

    }
    let drawmsgscisors=()=>{
   
    info.innerText="Draw!, The Bot also chose Scissors.",
    info.style.background="rgb(220,220,220)";

    }

let botchoice = ()=>{
    opt=["rock", "scissors", "paper"];
   let botopt= Math.floor(Math.random() *3);
   //console.log("bot:", opt[botopt]);
  return opt[botopt];
   
};

let game = (oID)=>{
   
  
    let botid= botchoice();
    console.log("You: ", oID);
    console.log("bot:", botid);
       
 //for  draw  
    // if(oID===botid){
    //     console.log("Draw");
    //     drawmsg();}
        if(oID==="rock"){
            if(botid==="rock"){
                drawmsgrock();
            }
        }
        if(oID==="paper"){
            if(botid==="paper"){
                drawmsgpaper();
            }
        }
        if(oID==="scissors"){
            if(botid==="scissors"){
                drawmsgscisors();
            }
        }
    
   
//for rock
    if(oID==="rock"){
       
        if(botid==="scissors"){
            console.log("You win");
            winmsgscissors();
            mscore++;
            meroscore.innerText = mscore;
   
        }
        else if(botid==="paper"){

            console.log("Bot wins");
            losemsgpaper();
            bscore++;
            botkoscore.innerText = bscore;
        }
    }
//for paper
if(oID==="paper"){
    if(botid==="rock"){
        console.log("You win");
        winmsgrock();
        mscore++;
        meroscore.innerText = mscore;
    }
    else if(botid==="scissors"){
        console.log("Bot wins");
        losemsgscissors();
        bscore++;
        botkoscore.innerText = bscore;
    }
}
//for scisors
if(oID==="scissors"){
    if(botid==="rock"){
        console.log("Bot wins");
        losemsgrock();
        bscore++;
        botkoscore.innerText = bscore;
    }
    else if(botid==="paper"){
        console.log("You win");
        winmsgpaper();
        mscore++;
        meroscore.innerText = mscore;
    }
}
};


choices.forEach(choice =>{
    choice.addEventListener("click", ()=>{
        def();
        const oID= choice.getAttribute("id");
        botchoice();
        game(oID);
        console.log("my:", mscore);
        console.log("bot:", bscore);
       
});
});



// let btn = document.getElementById("hy");

// btn.addEventListener("click",()=>{
//     for(let i=0;i<=1000;i++){
//         let num = Math.floor(Math.random()*10);
//             if(num==10){
//                 console.log("10 printed");
//             }else{

//                 console.log(num);
//             }
//     }
// })