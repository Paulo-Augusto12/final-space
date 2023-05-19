import { IHttpService } from "../domain/interfaces/http/IHttpService";

export class AppRepository  {
    constructor(private httpService: IHttpService) {}
}