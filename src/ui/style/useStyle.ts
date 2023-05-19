import React from "react";

export function useStyle() {
  const colors = {
    background: "#003566",
    purple: "#001D3D",
    purpleLight: "#0056A6",
    fontColor: "#FFFFFF",
  };
  const sizes = {
    rg: "1.5rem",
    md: "1.875rem",
    sm: "0.9375rem",
  };

  const weights = {
    rg: 400,
    bd: 700,
  };
  const fonts = {};

  return {
    colors,
    sizes,
    weights,
    fonts,
  };
}
