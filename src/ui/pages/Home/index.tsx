import React from "react";

import { CharacterCard, Typography, Layout } from "@/AppUi";
import { useStyle } from "../../style/useStyle";
import { Space, Spin } from "antd";
import { useHome } from "./useHome";

export function Home() {
  const { colors } = useStyle();

  const { states, elements } = useHome();
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Layout.Content
          style={{
            backgroundColor: colors.background,
            display: states.charl.length ? "grid" : "flex",
            gridTemplateColumns: "repeat(3, 2fr)",
            alignItems: "center",
            justifyItems: "center",
            padding: "3rem",
            gap: "5.625rem",
          }}
        >
          {states.charl.length ? (
            <>
              {states.charl.map(({ id, name, photo }) => (
                <CharacterCard key={id} name={name} photo={photo} />
              ))}
            </>
          ) : (
            <div
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Spin size={"large"} />
            </div>
          )}
        </Layout.Content>
        <Layout.Footer
          style={{ backgroundColor: colors.purple, height: "227px" }}
        ></Layout.Footer>
      </Layout>
    </Space>
  );
}
