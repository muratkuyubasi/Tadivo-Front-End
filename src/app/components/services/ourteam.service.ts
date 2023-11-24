import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OurTeamService {
    path: string = environment.apiUrl;


    constructor(
        private httpClient: HttpClient) { }

     
        getList():any {
            return this.httpClient.get<any>(this.path+"/TeamCategoryAPI/GetList");
        }
        getTeams():any {
            return this.httpClient.get<any>(this.path+"/TeamCategoryAPI/GetTeamList");
        }
        getid(id: string): Observable<any> {
            return this.httpClient.get<any>(this.path + "/TeamCategoryAPI/GetById?id="+id)
        }
    }