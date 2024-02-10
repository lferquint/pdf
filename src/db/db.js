class descriptions{
    constructor(){
        this.mods = {
            gerflorModA: ['Piso conductivo Gerflor, presentacion en rollo y con 2mm de espesor', 'm2'],
            gerflorModB: ['Protector de camilla NH mod. Vr-615. Presentacion; tramos de 4ml.', 'm2'],
        }
    }
    
}

const getDescriptions = ['gerflorModA', 'gerflorModB']
const obj = new descriptions();

getDescriptions.forEach((model)=>{
    // console.log(obj.mods[model])
});

export default obj;
