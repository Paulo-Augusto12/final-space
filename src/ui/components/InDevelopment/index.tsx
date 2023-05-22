import { Spin, Typography } from "@/AppUi";
import { useStyle } from "../../style/useStyle";

interface IInDevelopmentProps {
  inDevelopmentText: string;
}
export function InDevelopment({ inDevelopmentText }: IInDevelopmentProps) {
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
        {inDevelopmentText}
      </Typography.Title>
      <Spin size={"large"} />
    </div>
  );
}
