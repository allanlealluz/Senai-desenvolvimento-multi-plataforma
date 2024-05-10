function valida_envia(){
///validação de nome 
   if(document.fvalida.nome.value.length == 0){
    alert("Por favor, digite seu nome!");
    document.fvalida.nome.focus();
    return 0;
   }
}