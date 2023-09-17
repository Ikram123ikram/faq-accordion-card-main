let sub_btn=document.querySelectorAll('.sub-btn');
let sub_menu=document.querySelectorAll('.sub-menu');
let arrow=document.querySelectorAll('.icon-arrow');
let question=document.querySelectorAll('.DQ');



for(let i=0;i<sub_btn.length;i++){
    sub_btn[i].addEventListener('click',()=>{
       // sub_menu[i].style.display='block';
       if(!sub_menu[i].classList.contains('show')){
           for(let j=0;j<sub_menu.length;j++){
            
               sub_menu[j].classList.add('hide');
               sub_menu[j].classList.remove('show');
               arrow[j].classList.add('close');
               question[j].classList.remove('bolde');
               

           }
           
           sub_menu[i].classList.add('show');
           sub_menu[i].classList.remove('hide');
           arrow[i].classList.add('open');
           arrow[i].classList.remove('close');
           question[i].classList.add('bolde');
           
       }
       else{
        question[i].classList.remove('bolde');
        sub_menu[i].classList.remove('show');
        sub_menu[i].classList.add('hide');
        arrow[i].classList.remove('open');
        arrow[i].classList.add('close');
       

       }
        
        
    });
}

