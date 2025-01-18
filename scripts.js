const quantia = document.getElementById("valor")
const moedaEscolhida = document.getElementById("moeda")
const formulario = document.querySelector("form")

//cotação de moedas
const USD = 6.04
const EUR = 6.33
const GBP = 7.37

const footer = document.querySelector("main footer")

const descricaoTexto = document.getElementById("descricao")
const resultadoCotacao = document.getElementById("resultado")

quantia.addEventListener("input", () => {
   
const temLetra = /\D+/g
quantia.value = quantia.value.replace(temLetra, "")

})

//pegando o evento de submit do formulário
formulario.onsubmit = (evento) => {
evento.preventDefault()



switch(moedaEscolhida.value){
case "USD":
    converterMoeda(quantia.value, USD, "US$")
    break
case "EUR":
    converterMoeda(quantia.value, EUR, "€")
    break
case "GBP":
    converterMoeda(quantia.value, GBP, "£")
    break
}
}

//Função para converter o valor da moeda
function converterMoeda(valorMoeda, preco, simbolo){
    try{
        descricaoTexto.textContent = `${simbolo} 1 = ${converterEmReais(preco)}` 
        
        //let valorConvertido = String(valorMoeda * preco).replace(".", ",")
        let valorConvertido = valorMoeda * preco
        valorConvertido = converterEmReais(valorConvertido).replace("R$", "")

        resultadoCotacao.textContent = `${valorConvertido} Reais`

        footer.classList.add("mostra-resultado")
        console.log("entrou no try")
    } catch (error){
        console.log(error)
        footer.classList.remove("mostra-resultado")
        alert("Não foi possível converter.")
    }
}

function converterEmReais (valorFormatar){
    return Number(valorFormatar).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}