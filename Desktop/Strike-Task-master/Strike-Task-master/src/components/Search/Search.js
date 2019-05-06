import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input
          value={this.props.search.query}
          onChange={this.props.onChangeSearch}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="search_icon"
          onClick={this.props.onSearch}
        />
        {this.props.search.error && (
          <div className="search_invalid-feedback">
            {this.props.search.error}
          </div>
        )}
      </div>
    );
  }
}
export default Search;
