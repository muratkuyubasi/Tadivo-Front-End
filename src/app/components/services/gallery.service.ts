import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class GalleryService {
    path: string = environment.apiUrl;


    constructor(
        private httpClient: HttpClient) { }

     
        getList():any {
            return this.httpClient.get<any>(this.path+"/GalleryAPI/GetList");
        }
    }