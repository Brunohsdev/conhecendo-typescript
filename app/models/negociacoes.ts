import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    lista(): readonly Negociacao[] { //o read only cria uma lista nova identica a lista do negociação a diferença é que é só pra leitrua, ou seja ela não é identificada
        return this.negociacoes;
    }
}
