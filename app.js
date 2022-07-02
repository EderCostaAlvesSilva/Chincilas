const qtd = document.getElementById('qtd');
const anos = document.getElementById('anos');
const btn = document.getElementById('btn');
const saida = document.getElementById('saida');
const quebra = document.getElementById('quebra')

function previsao(){
    let quant = qtd.value;
    let ano = anos.value;
    let Chinchilas = ''; 

    for(index = 1; index <= ano; index++){
        Chinchilas += `${index}° Ano: ${quant} Chinchilas `
        quant *= 3;
        
        Chinchilas += '\n'
    
        
    }
    saida.textContent = Chinchilas;
}

btn.addEventListener('click', previsao)