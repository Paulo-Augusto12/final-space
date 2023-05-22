import React from "react";

import { CharacterCard, Typography, Layout } from "@/AppUi";
import { useStyle } from "../../style/useStyle";
import { Space, Spin } from "antd";
import { useHome } from "./useHome";

export function Home() {
  const { colors, fonts, sizes, weights } = useStyle();

  const { states, elements } = useHome();
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Layout.Header
          style={{
            backgroundColor: colors.purple,
            height: "227px",
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <img
            src="https://finalspaceapi.com/img/logo.png"
            width={"216px"}
            height={"132px"}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "48px",
            }}
          >
            <Space size={"large"}>
              {elements.headerItems.map(({ icon, name, route }, index) => (
                <Typography.Title
                  key={index}
                  style={{
                    color: colors.fontColor,
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                  level={2}
                >
                  {name} {icon}
                </Typography.Title>
              ))}
            </Space>
          </div>
        </Layout.Header>
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
