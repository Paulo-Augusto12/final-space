import { useState, useEffect } from "react";
import { SimpleCharacter } from "../../../domain/useCases/models/SimpleCharacter";

import { getcharsuc } from "../../../di/index";
export function useHome() {
  const [charl, setCharl] = useState<SimpleCharacter[]>([]);

  async function handleGetChars() {
    const data = await getcharsuc.execute();

    setCharl(data);
  }
  
  
  useEffect(() => {
      handleGetChars()
  },[])

  return {
    states: {
      charl,
    },
  };
}
