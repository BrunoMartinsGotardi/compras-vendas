import { ItemVenda } from './item-venda'

export class Venda {
    cliente: string
    itens: Array<ItemVenda>
    data: Date
}