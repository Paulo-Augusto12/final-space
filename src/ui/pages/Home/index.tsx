import React from "react";

import { CharacterCard, Typography, Layout } from "@/AppUi";
import { useStyle } from "../../style/useStyle";
import { Space } from "antd";

export function Home() {
  const { colors, fonts, sizes, weights } = useStyle();
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Layout.Header
          style={{
            backgroundColor: colors.purple,
            height: "227px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://finalspaceapi.com/img/logo.png"
            width={"216px"}
            height={"132px"}
          />
        </Layout.Header>
        <Layout.Content
          style={{
            backgroundColor: colors.background,
            display: "grid",
            gridTemplateColumns: "repeat(3, 2fr)",
            alignItems: "center",
            justifyItems: "center",
            padding: "3rem",
            gap: "5.625rem",
          }}
        >
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </Layout.Content>
        <Layout.Footer
          style={{ backgroundColor: colors.purple, height: "227px" }}
        ></Layout.Footer>
      </Layout>
    </Space>
  );
}
