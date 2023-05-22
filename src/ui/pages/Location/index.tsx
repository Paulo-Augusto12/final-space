import { AppLayout } from "@/AppLayout";
import { InDevelopment } from "@/AppUi";
import { useStyle } from "../../style/useStyle";

export function Location() {
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
      <InDevelopment />
    </AppLayout>
  );
}
