import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Cart from "../../components/Cart";
import { DashboardStyle } from "./style";
import TotalPrice from "../../components/TotalPrice";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Produto {
  id: number,
  name: string;
}

const Dashboard: React.FC = () => {
  const [listHamburgers, setListHamburgers] = useState<Produto[]>([]);

  useEffect(() => {
    const response = api
      .get("/products")
      .then((response) => setListHamburgers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [listCartProduct, setListCartProduct] = useState<Produto[]>([]);

  const handleAddProduct = (product: Produto) => {
    const findItem = listCartProduct.find(
      (element) => element.id === product.id
    );
    findItem
      ? toast.success("Esse item já foi adicionado ao carrinho")
      : setListCartProduct([...listCartProduct, product]);
  };

  function handleRemove(deleteListCartProduct: number) {
    setListCartProduct(
      listCartProduct.filter(
        (listCartProduct) => listCartProduct.id !== deleteListCartProduct
      )
    );
  }

  function handleRemoveAll() {
    setListCartProduct([]);
  }

  const [busca, setBusca] = useState<string>("");

  const [buscaFiltrada, setBuscaFiltrada] = useState<Produto[]>([]);

  function handleFilter() {
    const itensFiltrados = listHamburgers.filter((item) =>
      item.name.toLowerCase().includes(busca.toLowerCase())
    );
    setBuscaFiltrada(itensFiltrados);
  }

  return (
    <DashboardStyle>
      <Header busca={busca} setBusca={setBusca} handleFilter={handleFilter} />
      <div id="cartInCollumn">
        <Product
          listHamburgers={listHamburgers}
          handleAddProduct={handleAddProduct}
          buscaFiltrada={buscaFiltrada}
          busca={busca}
        />
        <div>
          <Cart listCartProduct={listCartProduct} handleRemove={handleRemove} />

          {listCartProduct.length !== 0 ? (
            <TotalPrice
              handleRemoveAll={handleRemoveAll}
              listCartProduct={listCartProduct}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "white", color: "black" }}
        limit={1}
      />
    </DashboardStyle>
  );
};

export default Dashboard;
