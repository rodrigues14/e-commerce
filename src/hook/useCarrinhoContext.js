import { CarrinhoContext } from "context/CarrinhoContext";
import { useContext, useEffect } from "react";

export const useCarrinhoContext = () => {
  
  const { 
    carrinho, 
    setCarrinho, 
    quantidadeProduto, 
    setQuantidadeProduto, 
    valorTotalCarrinho, 
    setValorTotalCarrinho 
  } = useContext(CarrinhoContext);
  
  function mudarQuantidade(id, quantidade) {
    return carrinho.map(itemDoCarinho => {
      if (itemDoCarinho.id === id) itemDoCarinho.quantidade += quantidade;
      return itemDoCarinho;
    })
  }

  function AdicionarProduto(novoProduto) {
    const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);
    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
    }
    setCarrinho(mudarQuantidade(novoProduto.id, 1));
  }

  function removerProduto(id) {
    const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1;
    if (ehOUltimo) {
      return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id));
    }
    setCarrinho(mudarQuantidade(id, -1))
  }

  useEffect(() => {
    const novaQuantidade = carrinho.reduce((contador, produto) => contador + produto.quantidade, 0);
    setQuantidadeProduto(novaQuantidade)

    const novoValorCarrinho = carrinho.reduce((contador, produto) => contador + Number(produto.preco * produto.quantidade), 0);
    setValorTotalCarrinho(novoValorCarrinho);
  }, [carrinho, setQuantidadeProduto, setValorTotalCarrinho]);
  
  return {
    carrinho, 
    setCarrinho,
    AdicionarProduto,
    removerProduto,
    quantidadeProduto, 
    setQuantidadeProduto,
    valorTotalCarrinho, 
    setValorTotalCarrinho
  }
}