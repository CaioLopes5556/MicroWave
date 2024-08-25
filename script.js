// pega a div do botão iniciar pelo ID
var Btn = document.querySelector('#bt');
//pega a div do gif
var food = document.querySelector('.micro-food');



// faz o gif sumir ou aparecer quando o botão inicar é clicado 
// (apenas se o timer tiver preenchido)
Btn.addEventListener('click', function(){
    let tempo = document.querySelector('.display').value

    if(food.style.display === 'none' && tempo != 0){
        food.style.display = 'flex';

    }else{
        food.style.display = 'none'
    }
//insere 000 no tempo caso o usuario digite menos de 4 numeros
    if(tempo.length < 3){
        tempo = '000' + tempo
    }else{
        tempo = tempo
    }


//separa o tempo em minutos e segundos
    let segundos = tempo.slice(2)
    let aux = tempo[0] + tempo[1]
    let minutos = aux

    console.log(minutos)
    console.log(segundos)
//calcula e converte ambos em segundos
    let duracao = (parseInt(minutos * 60)) + parseInt(segundos);

    console.log(duracao)
//chama a função para iniciar o timer
    timer(duracao,tempo);
  
});

const timer = (duracao,temp) =>{
    let timer = duracao;
    let minutos, segundos;
    
    let intervalo = setInterval(() => {

//converte de volta para minutos e segundos para mostrar o tempo passando na tela         
        minutos = Math.floor(timer / 60) ;
        segundos = Math.floor(timer % 60);
        timer -= 1;

//configura para colocar um '0' na frente de valores menores que 10
        minutos = minutos < 10? '0' + minutos:minutos;
        segundos = segundos < 10? '0' + segundos:segundos;

        document.querySelector('.display').value = `${minutos}:${segundos}`;

//para o intervalo quando for menor que 0 e mostra o Gif
        if (timer < 0){
            clearInterval(intervalo);
            food.style.display = 'flex';
        }

    }, 1000)
}


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








