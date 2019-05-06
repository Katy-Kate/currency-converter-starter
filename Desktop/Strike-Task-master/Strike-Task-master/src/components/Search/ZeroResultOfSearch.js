import React from "react";
import { ZeroSearchIcon } from "../../images/iconsSVG";

class ZeroResultOfSearch extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%"
        }}
      >
        <div className="search-zero">
          <ZeroSearchIcon />
          <div className="search-zero_title">Поиск не дал результатов</div>
          <p>
            Ни одна из задач не соответствует ключевым словам или условиям
            фильтра. Попробуйте изменить ключевые слова или фильтры.
          </p>
        </div>
      </div>
    );
  }
}
export default ZeroResultOfSearch;
