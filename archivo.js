function cambiarColor(color) {
    /*var body = document.getElementById('body')
    body.style.background = color.value*/
    let coloresLista = document.getElementsByTagName("li");
    let pares = [];
    let impares = [];
    console.log(color.value);
    for (let i = 0; i < coloresLista.length; i++) {

        if (i % 2 !== 0) {
            pares.push(coloresLista[i])
        } else {
            impares.push(coloresLista[i])
        }

        switch (color.value) {
            case 'green':
                for (let index = 0; index < impares.length; index++) {
                    impares[index].style.background = 'pink';
                }
                for (let index = 0; index < pares.length; index++) {
                    pares[index].style.background = color.value;
                }
                break;

            case 'beige':
                for (let index = 0; index < impares.length; index++) {
                    impares[index].style.background = color.value;
                }
                for (let index = 0; index < pares.length; index++) {
                    pares[index].style.background = 'pink';
                }
                break;
            default:
                for (let index = 0; index < coloresLista.length; index++) {
                    coloresLista[index].style.background = 'pink';
                }
                break;
        }


    }
}

function cambiarColorLista() {

}