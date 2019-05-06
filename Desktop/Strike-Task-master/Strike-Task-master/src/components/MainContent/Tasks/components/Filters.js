import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
  faFilter
} from "@fortawesome/free-solid-svg-icons";

class Filters extends React.Component {
  toggleFiltersMenu = e => {
    let parent = e.target.closest(".filters-wrap");
    let el = parent.querySelector(".filters");
    el.classList.toggle("filters-open");
  };

  render() {
    const {
      filtersBystatus,
      filtersBypriority,
      showFilterByStatus,
      showFilterByPriority
    } = this.props;
    return (
      <div className="filters-wrap">
        <FontAwesomeIcon
          icon={faFilter}
          className="filters-wrap_icon-mobil-menu"
          onClick={e => this.toggleFiltersMenu(e)}
        />
        <div className="filters">
          <div className="filters_item">
            <p className="filters_item__title filters_item__title--by-date">
              по дате
            </p>
            <FontAwesomeIcon
              icon={faLongArrowAltUp}
              className="filters_item__icon"
              onClick={() => this.props.filterByDate("date", -1)}
            />
            <FontAwesomeIcon
              icon={faLongArrowAltDown}
              param="date"
              className="filters_item__icon"
              onClick={() => this.props.filterByDate("date", +1)}
            />
          </div>
          {showFilterByStatus && (
            <div className="filters_item filters_item--by-status">
              <p className="filters_item__title">статус</p>
              <br />
              <span>
                новые:
                <input
                  type="radio"
                  id="status-1"
                  checked={filtersBystatus === "1"}
                  onChange={this.props.handleInputChange}
                />
              </span>
              <span>
                в ожидании:
                <input
                  type="radio"
                  id="status-2"
                  checked={filtersBystatus === "2"}
                  onChange={this.props.handleInputChange}
                />
              </span>
              <span>
                выполненные:
                <input
                  type="radio"
                  id="status-3"
                  checked={filtersBystatus === "3"}
                  onChange={this.props.handleInputChange}
                />
              </span>
              <span>
                в работе:
                <input
                  type="radio"
                  id="status-4"
                  checked={filtersBystatus === "4"}
                  onChange={this.props.handleInputChange}
                />
              </span>
              <span>
                все:
                <input
                  type="radio"
                  id="status-all"
                  checked={filtersBystatus === "all"}
                  onChange={this.props.handleInputChange}
                />
              </span>
            </div>
          )}
          {showFilterByPriority && (
            <div className="filters_item filters_item--by-priority">
              <p className="filters_item__title">приоритет</p>
              <br />
              <span>
                низкий
                <input
                  type="radio"
                  id="priority-1"
                  checked={filtersBypriority === "1"}
                  onChange={this.props.handleInputChange}
                />
              </span>
              <span>
                средний
                <input
                  type="radio"
                  id="priority-2"
                  checked={filtersBypriority === "2"}
                  onChange={this.props.handleInputChange}
                />
              </span>

              <span>
                высокий
                <input
                  type="radio"
                  id="priority-3"
                  checked={filtersBypriority === "3"}
                  onChange={this.props.handleInputChange}
                />
              </span>

              <span>
                срочный
                <input
                  type="radio"
                  id="priority-4"
                  checked={filtersBypriority === "4"}
                  onChange={this.props.handleInputChange}
                />
              </span>
              <span>
                все:
                <input
                  type="radio"
                  id="priority-all"
                  checked={filtersBypriority === "all"}
                  onChange={this.props.handleInputChange}
                />
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Filters;
Filters.propTypes = {
  filtersBystatus: PropTypes.string.isRequired,
  filtersBypriority: PropTypes.string.isRequired,
  filterByDate: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
