let count=0;
const displayCount=document.getElementById('count');
const IncrementBtn=document.getElementById('incrementBtn');
const ResetBtn=document.getElementById('resetBtn');
const DecrementBtn=document.getElementById('decrementBtn');
const sound=new Audio('click.mp3');
 function updateColor(){
    if(count>0){
        displayCount.style.color='green';
    }else if(count<0){
        displayCount.style.color='yellow';
    }else{
        displayCount.style.color='beige';
    }
 }
 document.body.addEventListener("click",()=>{
    sound.play().then(()=>{
        sound.pause();
        sound.currentTime=0;
    });
 },{once:true});

IncrementBtn.addEventListener('click',()=>{
    count++;
    displayCount.textContent=count;
    updateColor();
    sound.currentTime=0;
    sound.play().catch(err=>
        console.log("sound blocked",err));
    
});
ResetBtn.addEventListener('click',()=>{
    count=0;
    displayCount.textContent=count;
    updateColor();
     sound.currentTime=0;
    sound.play().catch(err=>
        console.log("sound blocked",err));
});
DecrementBtn.addEventListener('click',()=>{
    count--;
    displayCount.textContent=count;
    updateColor();
     sound.currentTime=0;
    sound.play().catch(err=>
        console.log("sound blocked",err));
});