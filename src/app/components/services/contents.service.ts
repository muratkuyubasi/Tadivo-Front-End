import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ContentsService {
    path: string = environment.apiUrl;
    lang: string = "tr"


    constructor(
        private httpClient: HttpClient) { }

     //HABER
        getnewsList():any {
            return this.httpClient.get<any>(this.path+"/AnnouncementAPI/GetList?typeId=3&languageId=1");
        }
        getid(id: string): Observable<any> {
            return this.httpClient.get<any>(this.path + "/AnnouncementAPI/GetById?id="+id)
        }
        //SLİDER
        getsldiderList():any {
            return this.httpClient.get<any>(this.path+"/AnnouncementAPI/GetList?typeId=2&languageId=1");
        }
        
       
    }