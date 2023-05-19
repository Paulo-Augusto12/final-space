import axios from "axios";
import { IHttpService } from "../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../domain/models/httpResponse";

export class HttpService implements IHttpService {
  async getData(url: string) {
    if (url.trim().length) {
      const response = await axios.get(url);

      return new HttpResponse(response.data, response.status);
    }
  }
}
