let resposta = document.getElementById ("resposta")

function calcular(){
    let temperatura = Number (document.getElementById ("temperatura").value)
    
let fire = (temperatura + 9/5)

   
resposta.innerHTML = " a " + temperatura + " convertida para firehings é " + fire
}
