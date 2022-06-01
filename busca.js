


var buscaCarro = document.querySelector(".pesquisaveiculo");

buscaCarro.addEventListener("input",function(){
    
    var carros = document.querySelectorAll(".veiculos");
    
    if(this.value.length >0){
        
    for(var i = 0; i <carros.length ; i++){
        var automovel = carros[i];
        var tdAuto = automovel.querySelector(".descricaoauto") ;
        var nomeAutomovel = tdAuto.textContent;
        var regLetter = new RegExp(this.value, "i");
        if(!regLetter.test(nomeAutomovel)){
            automovel.classList.add("invisivel");
        }else{
            automovel.classList.remove("invisivel"); 
        }
   
    }
 }else{
    for(var i = 0; i <carros.length ; i++){
        var automovel = carros[i];
        automovel.classList.remove("invisivel");
     }
 }

});





