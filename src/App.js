import React from "react";
import "./App.css";
import ClientTemplate from "./Template/ClientTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { client } from "./routes";
import NotFound from "./PageNotFound/notfound";

const showClientTemplate = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <ClientTemplate
          path={item.path}
          exact={item.exact}
          Component={item.component}
          key={index}
        />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showClientTemplate(client)}
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
