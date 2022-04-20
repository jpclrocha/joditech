function enviar(){
    let nome = document.querySelector("input#nome")
    let email = document.querySelector("input#email")
    let msg = document.querySelector("textarea#mensagem")

    if(nome.length != null && email.length != null && msg.length != null){
        alert(`Obrigado pela mensagem, ${nome.value}`)
    }else{
        alert("Dados inválidos, por favor preencha corretamente!")
    }
}