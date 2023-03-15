import { CarrinhoContext } from "context/CarrinhoContext";
import { useContext } from "react";

export const useCarrinhoContext = () => {
  
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  
  function AdicionarProduto(novoProduto) {
    const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);
    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
    }
    setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarinho => {
      if (itemDoCarinho.id === novoProduto.id) {
        itemDoCarinho.quantidade += 1;
      }
      return itemDoCarinho;
    }))
  }

  return {
    carrinho, 
    setCarrinho,
    AdicionarProduto
  }
}