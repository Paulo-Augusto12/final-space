import { SimpleCharacter } from "../models/SimpleCharacter";

export interface ICharacter {
  name: string;
  id: number;
  image: string;
}

export interface IGetAllCharactersUseCase {
  execute(): Promise<SimpleCharacter[]>;
}
