import { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoContextProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProduto, setQuantidadeProduto] = useState(0);

  return (
    <CarrinhoContext.Provider 
      value={{ 
        carrinho, 
        setCarrinho, 
        quantidadeProduto, 
        setQuantidadeProduto 
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

