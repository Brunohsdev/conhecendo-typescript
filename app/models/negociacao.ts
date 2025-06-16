export class Negociacao{
   
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){} //diminui 9 linhas e tranformou em uma só
   
    get volume():number{
        return this.quantidade * this.valor;
    }
    get data(): Date{
        const data = new Date(this.data.getTime());
        return this.data;
    }
}