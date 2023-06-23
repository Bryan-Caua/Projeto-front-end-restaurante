import { TotalPriceStyle } from "./style";

const TotalPrice = ({ handleRemoveAll, listCartProduct }) => {
  const valorTotalReduce = listCartProduct.reduce((a, b) => {
    return b.price + a;
  }, 0);

  console.log(valorTotalReduce);
  return (
    <TotalPriceStyle>
      <div>
        <p id="pPrice1">Total</p>
        <p id="pPrice2">R$ {valorTotalReduce.toFixed(2)}</p>
      </div>
      <div>
        <button onClick={() => handleRemoveAll()}>Remover Todos</button>
      </div>
    </TotalPriceStyle>
  );
};

export default TotalPrice;
