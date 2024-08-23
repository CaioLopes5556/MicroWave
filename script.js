// pega a div do botão iniciar pelo ID
var Btn = document.querySelector('#bt');
//pega a div do gif
var food = document.querySelector('.micro-food');

// faz o gif sumir ou aparecer quando o botão inicar é clicado 
// (apenas se o timer tiver preenchido)
Btn.addEventListener('click', function(){
    if(food.style.display === 'none' && document.querySelector('.display').value != 0){
        food.style.display = 'flex';

    }else{
        food.style.display = 'none'
    }
});


// insere numeros no timer do microondas

function insert(num){
    if( document.querySelector('.display').value.length < 4){
        let timer = document.querySelector('.display').value
        document.querySelector('.display').value = timer + num
    }else{
        document.querySelector('.display').value = ''
    }
}


// limpa os numeros no timer do microondas e faz o gif sumir caso esteja aparecendo
function clean(){
    document.querySelector('.display').value = '';

    if(food.style.display ==='flex'){
        food.style.display = 'none';
    }
}








