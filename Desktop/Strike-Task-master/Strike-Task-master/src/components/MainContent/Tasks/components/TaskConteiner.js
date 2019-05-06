import React from "react";
import PropTypes from "prop-types";
import UISelect from "../../../UiComponents/UISelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCaretDown,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { status_options, options_data_format } from "../../../../data/app_data";

class TaskConteiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMinBlock: false,
      saveStatus: false,
      ticket: { ...props.item }
    };
  }
  toggleMainBlock = () => {
    this.setState({
      isOpenMinBlock: !this.state.isOpenMinBlock
    });
  };
  onChangeTicketStaus = event => {
    let value = event.target.value;
    this.setState(
      PrevState => ({
        ticket: {
          ...PrevState.ticket,
          status: value
        }
      }),
      () => {
        this.toggleStatus(true);
      }
    );
  };
  toggleStatus = bool => {
    this.setState({
      saveStatus: bool || !this.state.saveStatus
    });
  };

  saveStatus = () => {
    this.props.replaceTicket(this.state.ticket.id, this.state.ticket);
    this.toggleStatus();
  };
  resetStatus = () => {
    this.toggleStatus(false);
  };

  render() {
    const { priority, title, desc, file, status, date, id } = this.state.ticket;
    let day = new Date(Number(date)).toLocaleDateString(
      "en-US",
      options_data_format
    );
    return (
      <div className="task-container">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="task-container_icon-remove"
          onClick={() => this.props.removeTicket(id)}
          title="удалить"
        />
        <div className="task-container_header__date">{day}</div>
        <div className="task-container_header">
          <FontAwesomeIcon
            icon={faBookmark}
            className={`priority-${priority}`}
          />

          <h4 className="task-container_header__title">{title}</h4>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={
              this.state.isOpenMinBlock
                ? "task-container_header__caret open"
                : "task-container_header__caret"
            }
            onClick={this.toggleMainBlock}
          />
        </div>
        {this.state.isOpenMinBlock && (
          <div className="task-container_main-content">
            <p className="task-container_main-content__desc">{desc}</p>
            {file && (
              <img
                src={file}
                className="task-container_main-content__img"
                alt="task"
              />
            )}
            <div className="ticketStatus">
              <UISelect
                wraper="ticketStatus-group"
                id="ticketStatus"
                labelText="статус"
                onChange={this.onChangeTicketStaus}
                options={status_options}
                defaultValue={status}
              />
              {this.state.saveStatus && (
                <div className="saveStatus">
                  <p className="saveStatus_title">Cохранить изменнения?</p>
                  <button
                    className="saveStatus_btn btn--dark "
                    onClick={this.saveStatus}
                  >
                    Да
                  </button>
                  <button
                    className="saveStatus_btn btn--dark "
                    onClick={this.resetStatus}
                  >
                    Нет
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default TaskConteiner;
TaskConteiner.propTypes = {
  item: PropTypes.object.isRequired,
  replaceTicket: PropTypes.func.isRequired
};
