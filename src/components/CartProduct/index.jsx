import { CartProductStyled } from "./style";

const CartProduct = ({ produtoCart, handleRemove }) => {
  console.log(produtoCart);
  return (
    <CartProductStyled>
      <img src={produtoCart.img} alt="" />
      <div>
        <p id="cartProductP1">{produtoCart.name}</p>
        <p id="cartProductP2">{produtoCart.category}</p>
      </div>
      <button onClick={() => handleRemove(produtoCart.id)}>Remover</button>
    </CartProductStyled>
  );
};

export default CartProduct;
