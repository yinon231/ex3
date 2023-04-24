let newRec,recsJs;
let recWidth=80,recHeight=80;
let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let RecArray;
let flippedRecs = [];
let randomInt;
window.onload=function(){
document.getElementById("black-rec3").onclick=function(){
        for(var i=0;i<3;i++)
        {
            newRec=document.createElement("section");
            newRec.className="black-rec-js";
            newRec.style.width=`${recWidth}px`;
            newRec.style.height=`${recHeight}px`;
            randomInt = Math.floor(Math.random() * 16) + 0;
            newRec.textContent = characters[randomInt];
            newRec.style.contentVisibility="hidden";
            newRec.style.fontSize=`${(Math.floor(recHeight/2))}px`;
            recsJs=document.getElementById("recs-flex");
            recsJs.appendChild(newRec);
            recWidth+=20;
            recHeight+=20;
        }
        RecArray=document.querySelectorAll('.black-rec-js');
        RecArray.forEach(rec => {
        rec.onclick=function(){
            if(flippedRecs.length<2 && !flippedRecs.includes(rec))
            {
                rec.style.contentVisibility="visible";
                flippedRecs.push(rec);
            }
            if(flippedRecs.length==2)
            {
                if(flippedRecs[0].textContent==flippedRecs[1].textContent)
                {
                    flippedRecs[0].style.backgroundColor="green";
                    flippedRecs[1].style.backgroundColor="green";
                    flippedRecs[0].onclick=null;
                    flippedRecs[1].onclick=null;
                    flippedRecs=[];
                }
                else{
                   setTimeout(function(){
                    flippedRecs[0].style.contentVisibility="hidden";
                    flippedRecs[1].style.contentVisibility="hidden";
                    flippedRecs=[];
                   },1500);  
                }
            }
        }
              
     });         
  };
}