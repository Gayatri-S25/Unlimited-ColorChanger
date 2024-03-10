//First Step is to generate random color
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
        // console.log(color);
    } 
    return color;
}
let intervalId; //gobal scope
//Function to Start Changing Color
const startChangingColor=function(){
    if(!intervalId){
        intervalId=setInterval(changeColor,1000);
    } 
    function changeColor(){
        document.body.style.backgroundColor=randomColor();
    }
};
//Function For Stoppig 
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;
    // console.log("stopped");
};

const goToHome=function(){
    document.body.style.backgroundColor="white";
};

//Click Event On Button
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
document.querySelector('#home').addEventListener('click',goToHome);





