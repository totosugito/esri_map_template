import React from "react";
import ReactDOM from 'react-dom/client';
import "./styles.css"
import FrontPage from "./pages/front_page";
import FrontPageClass from "./pages/front_page_class";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<FrontPage />*/}
      <FrontPageClass />
  </React.StrictMode>,
);
