function verificar(){
    var div1 = document.getElementById('res')
    var resposta = ''
    var bolinha = document.getElementsByName('radresp')
    var img = document.getElementById('img')
    

    if (bolinha[0].checked){img.src = 'franca.png';
    resposta='ERROU';
    res.style.color = '#940606'}

    else if(bolinha[1].checked){img.src = 'italia.png';
    resposta='ACERTOU';
    res.style.color = '#11ba14'}
    
    else {resposta = img.src = 'brasil.png';
    resposta='ERROU';
    res.style.color = '#940606'}
    

    
    div1.innerHTML=`${resposta}`
}
