import React from "react";
import { Button, CharacterCard } from "@/AppUi";
import { useStyle } from "./ui/style/useStyle";

function App() {
  const theme = useStyle()
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: theme.colors.background
        }}
      >
        <Button>teste</Button>
        <CharacterCard />
      </div>
    </>
  );
}

export default App;
