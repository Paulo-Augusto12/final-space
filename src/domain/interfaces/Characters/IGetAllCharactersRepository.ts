import { CharacterDTO } from "../../dto/CharacterDTO";
import { HttpResponse } from "../../models/httpResponse";

export interface IGetAllCharactersRepository {
    getAllCharacters(): Promise<HttpResponse<CharacterDTO[]>>
}