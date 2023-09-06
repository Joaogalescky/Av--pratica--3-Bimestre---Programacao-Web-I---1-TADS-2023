const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = frm.inNumero.value;

    const h5 = document.createElement("h5");
    const texto = document.createTextNode(numero);
    h5.appendChild(texto);
    dvQuadro.appendChild(h5);

    frm.inNumero.value = "";
    frm.inNumero.focus();

    // forEach(numero){
    //     if(numero > inNumero.value){
    //         numero.push(numero);
    //     }else{
    //         numero.unshift(numero);
    //     }
    // }

    // sortfunction(a, b){
    //     return (a - b)
    //  numero = [frm.inNumero.value];
    // }

    
});