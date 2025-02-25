function seguir(){
    alert('Voce agora está seguindo Rayssa')
}

//exercicio 1
function exe1(){
    //vamos usar o DOM para recuperaros dados do HTML
    //DOM - Ducument object Model
    // converte texto para número - Number()
    let nro1 = Number (document.getElementById("nro1").value)
    let nro2 = Number (document.getElementById("nro2").value)
    // vamos fazer a subtração
    let sub = nro1 - nro2
    // vamos mostrar o resultado ao usuario
    //alert("A subtração é" + sub)
    document.getElementById("sub").innerText ="O resultado é" + sub
}