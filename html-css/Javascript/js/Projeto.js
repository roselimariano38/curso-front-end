

function calcularMedia( notas ){

    var soma  = 0;
    for( c = 0; c < notas.length; c++){
      soma  += notas[c];
    
    
    }
    
    media = soma / notas.length;
    
    return media;
    
    }
    
    let media; // escopo global
    
    function aprovacao(media){

 let media = calcularMedia( notas ); // escopo da função

 let condicao = media >= 7 ? "aprovado" : "reprovado";

 return 'media:' + media + ' - resultado: ' + condicao;


}

// console.log()



// console.log("Média:" + calcularMedia([8, 8]))
// console.log(aprovacao(calcularMedia([8, 8])))

//console.log(aprovacao({8, 8, 7}));

// console.log("Média:" + calcularMedia([8, 8, 10]))
// console.log(aprovacao(calcularMedia([8, 8, 10])))

//console.log(aprovacao({8, 8, 10, 6}));

// console.log("Média:" + calcularMedia([8, 8, 10]))
// console.log(aprovacao(calcularMedia([8, 8, 6])))

//console.log(aprovacao({9, 6}));

// console.log("Média:" + calcularMedia([9, 6 ]))
// console.log(aprovacao(calcularMedia([9, 6])))

   