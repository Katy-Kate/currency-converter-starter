import React from "react";
import PropTypes from "prop-types";
import TaskConteiner from "./TaskConteiner";
import TasksHOC from "../../../HOC/TasksHOC";
import Pagination from "./Pagination";
import { TAKE_TICKETS } from "../../../../data/app_data";

class RenderTasks extends React.PureComponent {
  render() {
    return (
      <div className="new-tasks--wraper">
        <div className="new-tasks">
          {this.props.renderTickets.map(item => {
            return (
              <TaskConteiner
                key={item.id}
                item={item}
                replaceTicket={this.props.replaceTicket}
                removeTicket={this.props.removeTicket}
              />
            );
          })}
          {this.props.totalCount > TAKE_TICKETS && (
            <Pagination
              offset={this.props.offset}
              totalCount={this.props.totalCount}
              changePagination={this.props.changePagination}
              TAKE_TICKETS={TAKE_TICKETS}
            />
          )}
        </div>
      </div>
    );
  }
}

RenderTasks.defaultProps = {
  renderTickets: []
};
RenderTasks.propTypes = {
  renderTickets: PropTypes.array.isRequired,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changePagination: PropTypes.func.isRequired
};

export default TasksHOC(RenderTasks);
