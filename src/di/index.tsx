import { HttpService } from "../services/httpService";

import { AppRepository } from "../data/appRepository";

import { GetAllCharactersUseCase } from "../domain/useCases/getAllCharactersUseCase";

const http = new HttpService();

const repo = new AppRepository(http);

const getcharsuc = new GetAllCharactersUseCase(repo);

export { getcharsuc };
