import CartProduct from "../CartProduct";
import { CartStyle } from "./style";

const Cart = ({ listCartProduct, handleRemove }) => {
  return (
    <CartStyle>
      <div id="topBarCart">Carrinho de compras</div>
      {listCartProduct.length === 0 ? (
        <div id="bottomBarCart">
          <p id="pcart1">Sua sacola está vazia</p>

          <p id="pcart2">Adicione itens</p>
        </div>
      ) : (
        listCartProduct.map((produtoCart) => (
          <CartProduct
            key={produtoCart.id}
            produtoCart={produtoCart}
            handleRemove={handleRemove}
          />
        ))
      )}
    </CartStyle>
  );
};

export default Cart;
