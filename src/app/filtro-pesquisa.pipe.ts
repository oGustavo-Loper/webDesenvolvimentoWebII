import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './Funcionario';
//Adicionado o pure (false) para renderizar a tabela
//quando remover um produto
@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valor?: string): Produto[] {
    const name = valor ?valor :"";
    console.log(name);
    return listaProdutos.filter(
      (produto) => 
        produto.name.toLocaleLowerCase().includes(name.toLowerCase())
    );
  }

}
