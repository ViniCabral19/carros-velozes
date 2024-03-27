//tratamento de eventos
document.querySelector("#tempo").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
// document.querySelector("#prototipo_sim").addEventListener("change", calcular)
// document.querySelector("#prototipo_nao").addEventListener("change", calcular)

// document.querySelector("#prazo").addEventListener("input", function() {
//     const prazo = document.querySelector("prazo").value
//     document.querySelector("label[for=prazo]").innerText = "prazo: " + prazo
//     calcular()
// })


function calcular(){
    
    //DOM - Document Object Model
    const tempo_0_10 = document.querySelector("#tempo").value
    let valor = tempo_0_10 / 415
    
    const tipo = document.querySelector("#tipo").value
    if(tipo == 1) valor += 0.5

    // const prototipo = document.querySelector("#prototipo_sim").checked
    // if (prototipo) valor *= 1.1
    // const prototipo = document.querySelector("#prototipo_nao").checked
    // if (prototipo) valor *= 1.1
    
    
    document.querySelector("#valor").innerText = valor.toFixed(2) + "segundos"

}

