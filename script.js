// let name=document.getElementById("name").value;
let submit=document.getElementById("submit");
submit.addEventListener("click",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let div=document.createElement('div');
    let group=document.getElementById("form-group1");
    let input=document.createElement("input");
    let p=document.createElement("p");
    input.setAttribute("type","text");
    div.style.border="3px solid yellow";
    div.style.backgroundColor="white";
    div.style.width="80%";
    div.style.height="50px";
    if(name!="")
    {
        input.value=name;
        div.appendChild(input);
        group.appendChild(div);
    }
    else
    {
        txt=document.createTextNode('le champ est vide');
        p.appendChild(txt);
        group.appendChild(p);    
    }
});