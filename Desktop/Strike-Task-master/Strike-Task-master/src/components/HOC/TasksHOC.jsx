import React from "react";
import PropTypes from "prop-types";
import Filters from "../MainContent/Tasks/components/Filters";
import { EmptyFolderIcon } from "../../images/iconsSVG";
import ZeroResultOfSearch from "../Search/ZeroResultOfSearch";
import {
  getTicketsByFilter,
  getTicketsFromLocalStorage,
  setTicketsToLocalStorage,
  removeTicketFromLocalStorage
} from "../../data/TicketsRepository";
const TasksHOC = Container => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        userTickets: [],
        totalCount: 0,
        offset: 0,
        filtersBystatus: "all",
        filtersBypriority: "all"
      };
    }

    componentDidMount() {
      this.updateTicketWIthLocalStorage();
    }

    componentDidUpdate(prevProps) {
      if (
        this.props.filterName !== prevProps.filterName ||
        this.props.filterValue !== prevProps.filterValue
      )
        this.updateTicketWIthLocalStorage();
      if (
        this.props.willUpdateTickets === true &&
        prevProps.willUpdateTickets === false
      ) {
        this.updateTicketWIthLocalStorage();
        this.props.toogleWillUpdateTickets(false);
      }
      if (this.props.search.query !== prevProps.search.query)
        this.updateTicketWIthLocalStorage();
    }

    updateTicketWIthLocalStorage = (filterName, filterValue) => {
      filterName || (filterName = this.props.filterName);
      filterValue || (filterValue = this.props.filterValue);

      let resultUserTickets = getTicketsByFilter(
        filterName,
        filterValue,
        this.props.user["_id"],
        this.state.offset,
        this.props.search.query
      );
      this.updateTicketsData(resultUserTickets);
    };

    updateTicketsData = data => {
      const { userTickets, totalCount } = data;
      this.updateTotalCount(totalCount);
      this.updateUserTickets(userTickets);
    };

    updateTotalCount = totalCount => {
      this.setState({
        totalCount
      });
    };

    updateUserTickets = tickets => {
      this.setState({
        userTickets: tickets
      });
    };

    changePagination = event => {
      let count = event.target.value === "next" ? 1 : -1;
      let res = this.state.offset + count;
      this.updateOffset(res);
    };

    updateOffset = offset => {
      this.setState(
        {
          offset
        },
        () => {
          this.updateTicketWIthLocalStorage();
        }
      );
    };

    replaceTicket = (ticketId, newData) => {
      let allTickets = getTicketsFromLocalStorage();
      let tickets = [];
      allTickets.forEach(item => {
        Number(item.id) === Number(ticketId)
          ? tickets.push(newData)
          : tickets.push(item);
      });
      setTicketsToLocalStorage(tickets);
      this.updateTicketWIthLocalStorage();
    };

    filterByDate = (param, direction) => {
      console.log(param, direction);
      let tickets = getTicketsByFilter(
        this.props.filterName,
        this.props.filterValue,
        this.props.user["_id"],
        this.state.offset,
        this.props.search.query,
        param,
        direction
      );
      this.updateTicketsData(tickets);
    };

    handleInputChange = event => {
      if (this.state.offset > 0) {
        this.setState({
          offset: 0
        });
      }
      let filterType = event.target.id;
      let res = filterType.split("-"); //return ["status":"1"]
      let filterName = `filtersBy${res[0]}`;
      let anotherFilter =
        filterName === "filtersBystatus"
          ? "filtersBypriority"
          : "filtersBystatus";
      this.setState(
        {
          [filterName]: res[1],
          [anotherFilter]: "all"
        },
        () => {
          res[1] === "all"
            ? this.updateTicketWIthLocalStorage()
            : this.updateTicketWIthLocalStorage(res[0], res[1]);
        }
      );
    };

    removeTicket = id => {
      removeTicketFromLocalStorage(id);
      this.updateTicketWIthLocalStorage();
    };

    render() {
      const { search } = this.props;

      if (this.state.userTickets.length) {
        return (
          <React.Fragment>
            <Filters
              filterByDate={this.filterByDate}
              filtersBystatus={this.state.filtersBystatus}
              handleInputChange={this.handleInputChange}
              filtersBypriority={this.state.filtersBypriority}
              showFilterByStatus={this.props.showFilterByStatus}
              showFilterByPriority={this.props.showFilterByPriority}
            />
            <Container
              {...this.props}
              renderTickets={this.state.userTickets}
              offset={this.state.offset}
              totalCount={this.state.totalCount}
              changePagination={this.changePagination}
              replaceTicket={this.replaceTicket}
              removeTicket={this.removeTicket}
            />
          </React.Fragment>
        );
      } else if (!this.state.userTickets.length && search.query) {
        return <ZeroResultOfSearch />;
      } else {
        return <EmptyFolderIcon />;
      }
    }
  };
};

export default TasksHOC;
TasksHOC.propTypes = {
  user_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
