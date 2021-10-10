import { environment } from "./../../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(protected http: HttpService) {}

  public sendFile(file: FormData) {
    return this.http.doPut(
      `${environment.endpoint}/disruption/update-causes`,
      file
    );
  }
}
