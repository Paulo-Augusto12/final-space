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

  const headerItems = [
    {
      name: "Characters",
      icon: <FinnTheHuman size={32} />,
      route: "/",
    },
    {
      name: "Locations",
      icon: <MapPin size={32} />,
      route: "/locations",
    },
    {
      name: "Get a quote",
      icon: <Quotes size={32} />,
      route: "/quotes",
    },
  ];

  useEffect(() => {
    handleGetChars();
  }, []);

  return {
    states: {
      charl,
    },
    elements: {
      headerItems,
    },
  };
}
