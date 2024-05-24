function Validar(){
    if(forms.nome.value.length == 0 || forms.email.value.length == 0 || forms.senha.value.length == 0){
        alert('Há campos vazios, favor preencher');
        return 0;
    }else if(forms.nome.value.length < 10){
        alert('Preencha com seu nome completo')
        return 0;
    }
    if(forms.senha.value != forms.rsenha.value){
        alert("As senhas são diferentes");
        return 0;
    }
    alert('enviado');
}