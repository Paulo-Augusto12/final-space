import { useState, useEffect } from "react";
import { SimpleCharacter } from "../../../domain/useCases/models/SimpleCharacter";

// Icons

import { FinnTheHuman, MapPin, Quotes } from "@phosphor-icons/react";
//

// Dependencies

import { getcharsuc } from "../../../di/index";

//

export function useHome() {
  const [charl, setCharl] = useState<SimpleCharacter[]>([]);

  async function handleGetChars() {
    const data = await getcharsuc.execute();

    setCharl(data);
  }

  useEffect(() => {
    handleGetChars();
  }, []);

  return {
    states: {
      charl,
    },
  };
}
