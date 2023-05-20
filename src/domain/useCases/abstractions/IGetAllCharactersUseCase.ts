import { SimpleCharacter } from "../models/SimpleCharacter";

export interface IGetAllCharactersUseCase {
  execute(): Promise<SimpleCharacter[]>;
}
