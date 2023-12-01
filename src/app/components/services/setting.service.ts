import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SettingService {
    path: string = environment.apiUrl;
    lang: string = "tr"


    constructor(
        private httpClient: HttpClient) { }

     
        getsocialMedia(key: string,languageId: number): Observable<any> {
            return this.httpClient.get<any>(this.path + "/SocialMediaAPI/GetByKeyAndLanguageId?key="+key+"&languageId="+languageId)
        }
       
        getcontact(key: string,languageId: number): Observable<any> {
            return this.httpClient.get<any>(this.path + "/SiteSettingAPI/GetByKeyAndLanguageId?key="+key+"&languageId="+languageId)
        }
    }