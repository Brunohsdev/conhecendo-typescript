export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    } //diminui 9 linhas e tranformou em uma só
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this.data.getTime());
        return this.data;
    }
}
