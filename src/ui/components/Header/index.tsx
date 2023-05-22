import { FinnTheHuman, MapPin, Quotes } from "@phosphor-icons/react";
import { Layout, Space, Typography } from "../AppUi";
import { useStyle } from "../../style/useStyle";

export function Header() {
  const { colors } = useStyle();

  const headerItems = [
    {
      name: "Characters",
      icon: <FinnTheHuman size={32} />,
      route: "/",
    },
    {
      name: "Locations",
      icon: <MapPin size={32} />,
      route: "/locations",
    },
    {
      name: "Get a quote",
      icon: <Quotes size={32} />,
      route: "/quotes",
    },
  ];

  return (
    <Layout>
      <Layout.Header>
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
            {headerItems.map(({ icon, name, route }, index) => (
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
    </Layout>
  );
}
