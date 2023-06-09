import { FinnTheHuman, MapPin, Quotes } from "@phosphor-icons/react";
import { Space, Typography } from "@/AppUi";
import { useStyle } from "../../style/useStyle";
import { Link } from "react-router-dom";

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
    <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
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
            <Link to={route} key={index}>
              <Typography.Title
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
            </Link>
          ))}
        </Space>
      </div>
    </div>
  );
}
