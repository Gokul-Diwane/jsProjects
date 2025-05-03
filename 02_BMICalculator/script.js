const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let height=parseFloat(document.querySelector('#height').value);
    let weight=parseFloat(document.querySelector('#weight').value);
    let result=document.querySelector('#result');

    // console.log(height,weight);
    

    if(height=="" || height<0 || isNaN(height)){
        result.innerHTML="Enter valid height!!!";
    }
    else if(weight=="" || weight<0 || isNaN(weight)){
        result.innerHTML="Enter valid weight!!!";
    }
    else{
        let bmi=(weight/(height*height)).toFixed(2);
        result.innerHTML="BMI is "+bmi;
        if(bmi<18.6){
            document.querySelector('#guide').style.visibility="visible";
            document.querySelector('#p1').style.visibility="visible";
        }else if (bmi >= 18.6 && bmi <= 24.9) {
            document.querySelector('#guide').style.visibility="visible";
            document.querySelector('#p2').style.visibility = 'visible'; 
        } else if (bmi > 24.9) {
            document.querySelector('#guide').style.visibility="visible";
            document.querySelector('#p3').style.visibility = 'visible';
        }
    }
});