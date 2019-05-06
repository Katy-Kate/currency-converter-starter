import React from "react";
import PropTypes from "prop-types";

class Pagination extends React.Component {
  render() {
    const countOfPages = Math.ceil(
      this.props.totalCount / this.props.TAKE_TICKETS
    );
    return (
      <div className="pagination">
        <div className="pagination_btn--wrap">
          <button
            disabled={!this.props.offset}
            className="pagination_btn"
            value="prev"
            onClick={this.props.changePagination}
          >
            пред.
          </button>
          <button
            disabled={this.props.offset + 1 === countOfPages}
            className="pagination_btn"
            value="next"
            onClick={this.props.changePagination}
          >
            след.
          </button>
          <div className="pagination_counts">
            {this.props.offset + 1} из {countOfPages}
          </div>
        </div>
      </div>
    );
  }
}
export default Pagination;
Pagination.propTypes = {
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changePagination: PropTypes.func.isRequired
};
