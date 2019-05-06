import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Team from "../components/MainContent/Team";
import Contacts from "../components/MainContent/Contacts";
import RenderTasks from "../components/MainContent/Tasks/components/RenderTasks";
import Dashboard from "../components/MainContent/Tasks/Dashboard";
import ResultOfSearch from "../components/Search/ZeroResultOfSearch";

import "../styles/tasks.css";
import "../styles/userAppPage@media.css";

class MainContent extends Component {
  componentDidMount() {
    let rootElement = document.getElementById("root");
    rootElement.classList.add("root-user-app");
  }
  componentDidUnMount() {
    let rootElement = document.getElementById("root");
    rootElement.classList.remove("root-user-app");
  }
  render() {
    return (
      <div className="main-content">
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <RenderTasks
                filters={true}
                {...this.props}
                showFilterByPriority={true}
                showFilterByStatus={true}
              />
            )}
          />
          <Route
            path="/dashboard"
            exact
            render={props => <Dashboard filters={true} {...this.props} />}
          />

          <Route
            path="/dashboard/tasks-new"
            exact
            render={props => (
              <RenderTasks
                filterName="status"
                filterValue="1"
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/tasks-done"
            exact
            render={props => (
              <RenderTasks
                filterName="status"
                filterValue="3"
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/tasks-inworking"
            exact
            render={props => (
              <RenderTasks
                filterName="status"
                filterValue="4"
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/tasks-panding"
            exact
            render={props => (
              <RenderTasks
                filterName="status"
                filterValue="2"
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/urgent"
            exact
            render={props => (
              <RenderTasks
                filterName="priority"
                filterValue="4"
                {...this.props}
              />
            )}
          />

          <Route path="/contacts" component={Contacts} />
          <Route path="/team" component={Team} />
          <Route path="/search" component={ResultOfSearch} />
        </Switch>
      </div>
    );
  }
}
export default MainContent;
