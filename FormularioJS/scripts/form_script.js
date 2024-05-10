function Validar(){
    if(document.forms.nome.value.length == 0 || document.forms.email.value.length == 0 || document.forms.senha.value.length == 0){
        alert('Há campos vazios, favor preencher');
        return 0;
    }
    if(document.forms.senha.value != document.forms.rsenha.value){
        alert("As senhas são diferentes");
        return 0;
    }
    alert('enviado');
}