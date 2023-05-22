import { AppLayout } from "@/AppLayout";
import { useStyle } from "../../style/useStyle";

export function Location() {
  const { colors } = useStyle();
  return (
    <AppLayout
      contentStyle={{
        backgroundColor: colors.background,
        display: "flex",
        gridTemplateColumns: "repeat(3, 2fr)",
        alignItems: "center",
        justifyItems: "center",
        padding: "3rem",
        gap: "5.625rem",
      }}
    >
      <div>
        <h1>Hello world</h1>
        <h3>Quotes</h3>
      </div>
    </AppLayout>
  );
}
