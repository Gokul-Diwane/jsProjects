let ip=document.querySelector('.ip');
let ul=document.querySelector('.ul');
let btn=document.querySelector('.btn');
let para=document.querySelector('#para');

btn.addEventListener('click',()=>{
    if(ip.value){
        para.style.visibility="hidden";
        console.log(ip.value);
        let li=document.createElement('li');
        // let delBtn=document.createElement('button');
        // delBtn.classList.add('delete');
        // delBtn.innerHTML="Delete Task";
        li.innerHTML=`${ip.value} <button class="delete">Delete Task </button>`;
        ul.appendChild(li);
        ip.value=""
        // li.appendChild(delBtn);

    }else{
        alert("Enter task first!!!");
    }
    
    
})

// let delBtns=document.querySelectorAll('.delete')
// for(delbt of delBtns){
//     delbt.addEventListener('click',()=>{
//         console.log(this.delbt.parentElement);
        
//     })
// }

ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})