let resposta = document.getElementById ("resposta")

function calcular(){
    let temperatura = Number (document.getElementById ("temperatura").value)
    
let fire = (temperatura * 9/5) + 32

   
resposta.innerHTML = " convertendo os graus celsius em fahrenheit o resultado é " + fire
}
