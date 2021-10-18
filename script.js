let submit=document.getElementById("submit");
function animaterToScore(score){
    step = 0;
    setInterval(() => {
        if(step >= score){ return false;}
        step++;
        document.querySelector("span").innerText = " "+step+"% ";
    }, 50);
}
submit.addEventListener("click",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let div=document.createElement('div');
    let group=document.getElementById("form-group1");
    let input=document.createElement("input");
    let p=document.querySelector("p");
    input.setAttribute("type","text");
    div.style.border="3px solid yellow";
    div.style.backgroundColor="white";
    div.style.paddingLeft="20px";
    div.style.paddingTop="20px";
    div.style.width="50%";
    div.style.height="50px";
    if((name!="")&&((/^[a-z A-Z]{6,20}$/).test(name)))
    {
        p.innerText="";
        input.value=name;
        div.appendChild(input);
        group.appendChild(div);
        submit.setAttribute("disabled","true");
    }
    else
    {
        txt=document.createTextNode('Vous ne respectez les régles');
        p.appendChild(txt);
        group.appendChild(p);    
    }
});
let send=document.querySelector("input[value='send']");
send.addEventListener("click",function(e)
{
    e.preventDefault();
    let span=document.querySelector("span");
    let score=0;
    let correctAnswer=['no','modal','array','occurence'];
    let Answer=document.querySelectorAll("[type='radio']:checked");
    for(i=0;i<correctAnswer.length;i++)
    {
        if(correctAnswer[i]==Answer[i].value)
        {
            score+=25;
        }
    }
    window.scrollTo({top:0,behavior:'smooth'})
    span.innerText=`${score}`;
    // Animation de score
    animaterToScore(score);
});