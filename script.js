//Cadrasto de Usuário:
const nome= prompt("digite seu nome")
let idade= parseInt(prompt("digite sua idade"))
let senha=parseInt(prompt("digite sua senha"))
//Login:
if (idade>=13){
    alert("acesso permitido")
    let nomeDeLogin= prompt("digite seu nome novamente")
    let senha2= prompt("digite sua senha novamante")
    if (nome == nomeDeLogin && senha == senha2){
        alert(`Login realizado com sucesso! Bem-vindo ${nome}`)

    }else{
        alert("Nome ou senha incorretas. Tente novamente")
    }
}else{
     alert("não foi possivel realizar o seu cadrasto")
}


