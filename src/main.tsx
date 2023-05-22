import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Header } from "./ui/components/Header/index.tsx";
import { Layout } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout.Header
      style={{ height: "227px", display: "flex", alignItems: "center" }}
    >
      <Header />
    </Layout.Header>
    <App />
  </React.StrictMode>
);
