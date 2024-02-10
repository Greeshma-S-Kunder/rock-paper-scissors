let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".divclass1");
let userid=document.querySelector("#user");
let compid=document.querySelector("#comp");
let resultid=document.querySelector("#result");

const userturn = (userchoice) =>{
    
    console.log("user choice=",userchoice);
    const compchoice=compturn();
    console.log("comp turn=",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
       
        showinner(userwin, userchoice, compchoice); 
    }
    
    
}
const showinner=(userwin)=>{
    

    if(userwin){
        userscore++;
        userid.innerText=userscore;
        resultid.innerText="The User has won";
        
    }
    else{
        compscore++;
        compid.innerText=compscore;
        resultid.innerText="The Computer has won";
        
    }

}

const compturn=()=>{
    const coice=['rock','paper','scissors'];
    let num=Math.floor(Math.random()*3);
    return coice[num]; 
}


choices .forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id");
        userturn(userchoice);
    })
})
const drawgame=()=>{
    console.log("the game is draw");
};
