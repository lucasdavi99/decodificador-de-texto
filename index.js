// FUNÇÃO PARA CODIFICAR A MENSAGEM
function cripto() 
    {
        var texto = document.getElementById('text-area').value;  
        var textoCripto = "";   

        if(texto != '')
        {
            textoCripto = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat').replaceAll('y', 'two');
            
            document.getElementById("msg-criptografada").innerHTML = textoCripto;
            document.querySelector('img.msg-aviso').style.display = 'none';
            document.getElementById('msg-aviso').innerHTML = "";
            document.getElementById('msg-aviso2').innerHTML = "";
        }   
        
    }  

//FUNÇÃO PARA DESCODIFICAR A MENSAGEM
function descripto() 
    {
        var texto = document.getElementById('text-area').value;    
        var textoDescripto = "";
        if(texto != '')
        {   
            textoDescripto = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u').replaceAll('two', 'y');

            document.getElementById("msg-criptografada").innerHTML = textoDescripto;
            document.getElementById('text-criptografada').innerHTML = "";
            document.querySelector('img.msg-aviso').style.display = 'none';
            document.getElementById('msg-aviso').innerHTML = "";
            document.getElementById('msg-aviso2').innerHTML = "";
        }
        
        
    }

//FUNÇÃO PARA COPIAR A MENSAGEM CODIFICADA
function copiar() 
    {
        var textoCopiado = document.getElementById("msg-criptografada").innerHTML;
        var mensagem = document.getElementById('text-criptografada').innerHTML;

        if(mensagem != 'Mensagem copiada')
        {
            navigator.clipboard.writeText(textoCopiado);
            document.getElementById('text-criptografada').innerHTML = 'Mensagem copiada';
        } 
    }