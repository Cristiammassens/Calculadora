resultado = document.getElementById('resultado');

function insert(num)
    {
    
        resultado.value+= num;
    
    }
 function clean()
    {
    
        resultado.value = '';
    
    }
function back()
    {

        resultado.value = resultado.value.slice(0, -1)
    }
