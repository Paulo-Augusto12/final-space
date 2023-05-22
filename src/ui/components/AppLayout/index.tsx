import { Layout, Header, Footer } from "@/AppUi";
import { useStyle } from "../../style/useStyle";
import React from "react";

interface IAppLayoutProps {
  children: React.ReactNode;
  contentStyle: React.CSSProperties;
}
export function AppLayout({ children, contentStyle }: IAppLayoutProps) {
  const { colors } = useStyle();
  return (
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: colors.purple,
          height: "227px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content style={contentStyle}>{children}</Layout.Content>
      <Layout.Footer
        style={{
          backgroundColor: colors.purple,
          height: "227px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}
