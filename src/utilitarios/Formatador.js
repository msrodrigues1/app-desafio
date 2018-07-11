export default class Formatador {
    static formataPreco(txt){
        return txt.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}
