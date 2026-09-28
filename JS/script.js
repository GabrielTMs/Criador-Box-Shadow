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
        colorInput,
        colorTextInput,
        insetInput,
        opacityRangeInput,
        opacityTextInput,
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
        this.opacityRangeInput = opacityRangeInput;
        this.opacityTextInput = opacityTextInput;
        this.box = box;
        this.codigoBox = codigoBox;
        this.codigoWebkit = codigoWebkit;
        this.codigoMoz = codigoMoz;
        this.colorInput = colorInput;
        this.colorTextInput = colorTextInput;
        this.insetInput = insetInput; 
        this.insetValue = insetInput.checked; 
    }

    linkInputs() {
       this.horizontalTextInput.value = this.horizontalRangeInput.value; 
       this.verticalTextInput.value = this.verticalRangeInput.value; 
       this.blurTextInput.value = this.blurRangeInput.value; 
       this.spreadTextInput.value = this.spreadRangeInput.value;
       this.opacityTextInput.value = this.opacityRangeInput.value;
       this.colorTextInput.value = this.colorInput.value;
       
       this.aplicandoSombraECode();
       this.colocandoNoCode();
    }

    aplicandoSombraECode() {
        const corToRgb = this.hexCorToRgb(this.colorTextInput.value);

        console.log(this.insetValue);

        const boxShadowNumbers = `${this.insetValue ? "inset" : ""} ${this.horizontalTextInput.value}px ${this.verticalTextInput.value}px ${this.blurTextInput.value}px ${this.spreadTextInput.value}px rgba(${corToRgb}, ${this.opacityTextInput.value})`

        this.box.style.boxShadow = boxShadowNumbers;

        this.currentRule = boxShadowNumbers;
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

            case colorInput:
                this.colorTextInput.value = target
            break;

            case opacityRangeInput:
                this.opacityTextInput.value = target
            break;
            
            case insetInput:
                this.insetValue = target //Essa propriedade insetValue foi criado nesse case mesmo
            break;
        }

        this.aplicandoSombraECode();
        this.colocandoNoCode();
    }

    hexCorToRgb(hex) {
        return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4] | 0)}, ${("0x" + hex[5] + hex[6]) | 0}`;
    }

    //hexCorToRgb faz com que modifique as cores que vem do input color em hexadecimal para rgb

}

const horizontalRangeInput = document.querySelector("#ideslocX");
const horizontalTextInput = document.querySelector("#idesloTextX");
const verticalRangeInput = document.querySelector("#ideslocY");
const verticalTextInput = document.querySelector("#idesloTextY");
const blurRangeInput = document.querySelector("#iblurs");
const blurTextInput = document.querySelector("#iblursText");
const spreadRangeInput = document.querySelector("#ispread");
const spreadTextInput = document.querySelector("#ispreadText");

const opacityRangeInput = document.querySelector("#iopacity");
const opacityTextInput = document.querySelector("#iopacityText");

const colorInput = document.querySelector("#icores");
const colorTextInput = document.querySelector("#icorText");

const insetInput = document.querySelector("#iInset");

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
        colorInput,
        colorTextInput,
        insetInput,
        opacityRangeInput,
        opacityTextInput,
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

colorInput.addEventListener("input", (e) => {
    const target = e.target.value;

    boxShadowConstructor.updateSombra(colorInput, target);
})

opacityRangeInput.addEventListener("input", (e) => {
    const target = e.target.value;

    boxShadowConstructor.updateSombra(opacityRangeInput, target);
})

insetInput.addEventListener("input", (e) => {
    const target = e.target.checked;

    boxShadowConstructor.updateSombra(insetInput, target);
})

const areaCodes = document.querySelector("#campCopiaCode");
const campoCodes = document.querySelector("#codigoCopy");

const textoInstrucao = document.querySelector("#instrucaoCopy");

campoCodes.addEventListener("click", () => {
    
    const copiar = campoCodes.innerText.replace(/^\s*\n/gm, "");

    console.log(copiar)

    areaCodes.classList.add("copiado");

    navigator.clipboard.writeText(copiar).then(() => {
        
        textoInstrucao.innerText = "Texto copiado com sucesso!";

        setTimeout(() => {
            textoInstrucao.innerText = "Copie e cole o código no seu arquivo de CSS:";

            areaCodes.classList.remove("copiado");

        }, 600);
    });

})

console.log(boxShadowConstructor);

boxShadowConstructor.linkInputs(); //Esse linkInputs é colocada aqui para funcionar essa função que iguala o value do input range com o input text, assim o range e o text tem o mesmo valor. Nesse caso no HTML eu coloquei o value do input range de 5, então por causa dessa função que iguala os dois, o value de ambos vai ser 5

