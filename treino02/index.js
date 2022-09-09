let button = document.getElementById('semana-btn');

button.addEventListener('click',() => {
    var dia = parseInt(document.getElementById('dia-input').value);
    var mes = parseInt(document.getElementById('mes-input').value);
    var ano = parseFloat(document.getElementById('ano-input').value);
    var result = document.getElementById('output');
    let contagem;
    let centenas, dezenas, bissextos;
    

    dezenas = ano%100;
    centenas = (ano - dezenas)/100;

    bissextos = dezenas / 4;
    bissextos = Math.floor(bissextos);

    if(centenas % 4 === 0){
        contagem = 3;
    }else if(centenas % 4 === 1){
        contagem = 1;
    }else if(centenas % 4 === 2){
        contagem = 6;
    }else {
        contagem = 4;
    }

    contagem += dezenas + bissextos;

    if(mes === 1){
        contagem = contagem + dia - 3;
    } else if(mes === 2){
        contagem = contagem + dia - 28;
    }else if(mes === 3){
        contagem = contagem + dia - 14;
    }else if(mes === 4){
        contagem = contagem + dia - 4;
    }else if(mes === 5){
        contagem = contagem + dia - 9;
    }else if(mes === 6){
        contagem = contagem + dia - 6;
    }else if(mes === 7){
        contagem = contagem + dia - 11;
    }else if(mes === 8){
        contagem = contagem + dia - 8;
    }else if(mes === 9){
        contagem = contagem + dia - 5;
    }else if(mes === 10){
        contagem = contagem + dia - 10;
    }else if(mes === 11){
        contagem = contagem + dia - 7;
    }else if(mes === 12){
        contagem = contagem + dia - 12;
    }
    
    while(contagem >= 7){
        contagem -=7;
    }
    while(contagem < 0){
        contagem +=7;
    }

    if(contagem === 0){
        result.innerHTML = ' Esse dia cai em um sábado.';
    } else if(contagem === 1){
        result.innerHTML = 'Esse dia cai em um domingo.';        
    } else if(contagem === 2){
        result.innerHTML = 'Esse dia cai em uma segunda.';        
    } else if(contagem === 3){
        result.innerHTML = 'Esse dia cai em uma terça.';        
    } else if(contagem === 4){
        result.innerHTML = 'Esse dia cai em uma quarta.';        
    } else if(contagem === 5){
        result.innerHTML = 'Esse dia cai em uma quinta.';        
    } else if(contagem === 6){
        result.innerHTML = 'Esse dia cai em uma sexta.';        
    }    
});



let btn2 = document.getElementById('comentar');

btn2.addEventListener('click',() => {
    var comentario = document.getElementById('feedback-input').value;
    var listadefeedback = document.getElementById('lista-feedback');

    var nome = document.getElementById('nome-input').value;

    listadefeedback.innerHTML += `<div class="carousel-item active container-fluid">
    <h3 class="testimonial-text">${comentario}</h3>
    <em >${nome}</em>
    </div>`

});
