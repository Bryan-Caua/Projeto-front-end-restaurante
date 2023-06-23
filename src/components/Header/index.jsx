import { HeaderStyle } from "./style";
import logo from "../../assets/ifood.png";
import { useCallback } from "react";

const Header = ({ handleFilter, busca, setBusca }) => {
  const search = useCallback(
    (e) => {
      console.log("oi");
      setBusca(e);
      handleFilter();
    },
    [handleFilter, setBusca]
  );

  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            search(e);
          }}
        >
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(e) => search(e?.target?.value)}
            value={busca}
          />
          <button type="submit">Pesquise</button>
        </form>
      </div>
    </HeaderStyle>
  );
};

export default Header;
