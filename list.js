function myfunc()
{
    if(document.getElementById('text').value==" "){
        alert("Value required");
    }else{
        console.log("asdfd");
        const list = document.querySelector('.container ul');
        const myLi = document.createElement('li');
        myLi.innerHTML = document.getElementById('text').value;
        list.appendChild(myLi);
        document.getElementById('text').value=" ";

        const mySpan = document.createElement('button');
        mySpan.innerHTML='X';
        myLi.appendChild(mySpan);
    }

    const close = document.querySelectorAll('button');
    for(let i=0;i<close.length;i++)
    {
        close[i].addEventListener('click',()=>
        {
            close[i].parentElement.style.display='none';
        })
    }
}
