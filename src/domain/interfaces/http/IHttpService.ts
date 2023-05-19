import { HttpResponse } from "../../models/httpResponse";

export interface IHttpService {
  getData<T>(url: string): Promise<HttpResponse<T>>;
}
