import { CharacterDTO } from "../domain/dto/CharacterDTO";
import { IGetAllCharactersRepository } from "../domain/interfaces/Characters/IGetAllCharactersRepository";
import { IHttpService } from "../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../domain/models/httpResponse";

export class AppRepository implements IGetAllCharactersRepository {
  constructor(private httpService: IHttpService) {}

  async getAllCharacters(): Promise<HttpResponse<CharacterDTO[]>> {
    return await this.httpService.getData(
      "https://finalspaceapi.com/api/v0/character/"
    );
  }
}
