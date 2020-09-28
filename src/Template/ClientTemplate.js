import React from "react";
import { Route } from "react-router-dom";
import Header from "../Components/Header/header";

const ClientLayout = (props) => {
  return (
    <div className="mainContent">
      <Header />
      {props.children}
    </div>
  );
};

export default function ClientTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <ClientLayout>
          <Component {...propsComponent} />
        </ClientLayout>
      )}
    />
  );
}
