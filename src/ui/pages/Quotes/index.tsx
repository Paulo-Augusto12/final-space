import { AppLayout, InDevelopment } from "@/AppUi";
import { useStyle } from "../../style/useStyle";
export function Quotes() {
  const { colors } = useStyle();
  return (
    <AppLayout
      contentStyle={{
        backgroundColor: colors.background,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        padding: "3rem",
      }}
    >
      <InDevelopment inDevelopmentText="Quotes page in development" />
    </AppLayout>
  );
}
