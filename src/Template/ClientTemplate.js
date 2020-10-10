import React from "react";
import { Route } from "react-router-dom";
import Header from "../Components/Header/header";
import SideFeatureMenu from "../Components/SideMenu/sideFeatureMenu";

const ClientLayout = (props) => {
  return (
    <div className="mainContent">
      <Header />
      {props.children}
      <SideFeatureMenu />
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
