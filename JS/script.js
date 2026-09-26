class BoxShadowGenerator {
    
    constructor(
        horizontalRangeInput,
        horizontalTextInput,
        verticalRangeInput,
        verticalTextInput,
        blurRangeInput,
        blurTextInput,
        spreadRangeInput,
        spreadTextInput,
        box,
        codigoBox,
        codigoWebkit,
        codigoMoz,
    )
    {
        this.horizontalRangeInput = horizontalRangeInput;
        this.horizontalTextInput = horizontalTextInput;
        this.verticalRangeInput = verticalRangeInput
        this.verticalTextInput = verticalTextInput; 
        this.blurRangeInput = blurRangeInput; 
        this.blurTextInput = blurTextInput; 
        this.spreadRangeInput = spreadRangeInput; 
        this.spreadTextInput = spreadTextInput;
        this.box = box;
        this.codigoBox = codigoBox;
        this.codigoWebkit = codigoWebkit;
        this.codigoMoz = codigoMoz; 
    }

    linkInputs() {
       this.horizontalTextInput.value = this.horizontalRangeInput.value; 
       this.verticalTextInput.value = this.verticalRangeInput.value; 
       this.blurTextInput.value = this.blurRangeInput.value; 
       this.spreadTextInput.value = this.spreadRangeInput.value;
       
       this.aplicandoSombraECode();
       this.colocandoNoCode();
    }

    aplicandoSombraECode() {
        this.box.style.boxShadow = `${this.horizontalTextInput.value}px ${this.verticalTextInput.value}px ${this.blurTextInput.value}px ${this.spreadTextInput.value}px #000000`
        this.currentRule = this.box.style.boxShadow;
        // o currentRule se trata, nesse caso, do valor do input range. E como eu coloquei no HTML o value = "5" o valor será 5
    }

    colocandoNoCode() {
        this.codigoBox.innerText = this.currentRule;
        this.codigoWebkit.innerText = this.currentRule;
        this.codigoMoz.innerText = this.currentRule;
    }

    updateSombra(tipoInput, target) {
        switch (tipoInput) {
            case horizontalRangeInput:
                this.horizontalTextInput.value = target
            break;

            case verticalRangeInput:
                this.verticalTextInput.value = target
            break;

            case blurRangeInput:
                this.blurTextInput.value = target
            break;

            case spreadRangeInput:
                this.spreadTextInput.value = target
            break;
        }

        this.aplicandoSombraECode();
        this.colocandoNoCode();
    }

}

const horizontalRangeInput = document.querySelector("#ideslocX");
const horizontalTextInput = document.querySelector("#idesloTextX");
const verticalRangeInput = document.querySelector("#ideslocY");
const verticalTextInput = document.querySelector("#idesloTextY");
const blurRangeInput = document.querySelector("#iblurs");
const blurTextInput = document.querySelector("#iblursText");
const spreadRangeInput = document.querySelector("#ispread");
const spreadTextInput = document.querySelector("#ispreadText");

const box = document.querySelector("#blocoBoxShadow");

const codigoBox = document.querySelector("#codeBox span");
const codigoWebkit = document.querySelector("#codeWebkit span");
const codigoMoz = document.querySelector("#codeMoz span");


const boxShadowConstructor = new BoxShadowGenerator(
        horizontalRangeInput,
        horizontalTextInput,
        verticalRangeInput,
        verticalTextInput,
        blurRangeInput,
        blurTextInput,
        spreadRangeInput,
        spreadTextInput,
        box,
        codigoBox,
        codigoWebkit,
        codigoMoz)

horizontalRangeInput.addEventListener("input", (e) => {
    const target = e.target.value;

    boxShadowConstructor.updateSombra(horizontalRangeInput, target);
})

verticalRangeInput.addEventListener("input", (e) => {
    const target = e.target.value;

    boxShadowConstructor.updateSombra(verticalRangeInput, target);
})

blurRangeInput.addEventListener("input", (e) => {
    const target = e.target.value;

    boxShadowConstructor.updateSombra(blurRangeInput, target);
})

spreadRangeInput.addEventListener("input", (e) => {
    const target = e.target.value;

    boxShadowConstructor.updateSombra(spreadRangeInput, target);
})

console.log(boxShadowConstructor);

boxShadowConstructor.linkInputs(); //Esse linkInputs é colocada aqui para funcionar essa função que iguala o value do input range com o input text, assim o range e o text tem o mesmo valor. Nesse caso no HTML eu coloquei o value do input range de 5, então por causa dessa função que iguala os dois, o value de ambos vai ser 5

