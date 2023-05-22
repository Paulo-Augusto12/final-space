import { IGetAllCharactersRepository } from "../interfaces/Characters/IGetAllCharactersRepository";
import { IGetAllCharactersUseCase } from "./abstractions/IGetAllCharactersUseCase";
import { SimpleCharacter } from "./models/SimpleCharacter";

export class GetAllCharactersUseCase implements IGetAllCharactersUseCase {
  constructor(private repository: IGetAllCharactersRepository) {}

  async execute(): Promise<SimpleCharacter[]> {
    const response = await this.repository.getAllCharacters();

    const data = response.data.map(
      ({ name, id, img_url }) => new SimpleCharacter(name, id, img_url)
    );

    return data;
  }
}
