import { Spin, Typography } from "@/AppUi";
import { useStyle } from "../../style/useStyle";

export function InDevelopment() {
  const { colors } = useStyle();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography.Title level={3} style={{ color: colors.fontColor }}>
        Page in Development
      </Typography.Title>
      <Spin size={"large"} />
    </div>
  );
}
