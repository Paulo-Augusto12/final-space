import React from "react";
import { Typography } from "@/AppUi";

// Icons

import {
  TreeStructure,
  GithubLogo,
  TelevisionSimple,
} from "@phosphor-icons/react";

//

import { useStyle } from "../../style/useStyle";

export function Footer() {
  const { colors } = useStyle();
  const footerItems = [
    {
      name: "Api Used",
      icon: <TreeStructure size={32} />,
      link: "https://finalspaceapi.com/docs/",
    },
    {
      name: "Visit my github",
      icon: <GithubLogo size={32} />,
      link: "https://github.com/Paulo-Augusto12",
    },
    {
      name: "About the show",
      icon: <TelevisionSimple size={32} />,
      link: "https://en.wikipedia.org/wiki/Final_Space",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "75px",
        }}
      >
        {footerItems.map(({ icon, name, link }, index) => (
          <a href={link} key={index}>
            <Typography.Title
              style={{
                color: colors.fontColor,
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
              level={2}
            >
              {name} {icon}
            </Typography.Title>
          </a>
        ))}
      </div>
      <img
        src="https://finalspaceapi.com/img/logo.png"
        width={"216px"}
        height={"132px"}
        style={{ opacity: "50%" }}
      />
    </div>
  );
}
