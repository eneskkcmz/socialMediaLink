import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SocialMediaLink, SocialMediaLinkDetailResponse, SocialMediaLinkResponse } from '../models/socialMediaLink';
import { SocialMediaLinkAdd } from '../models/addSocailMediaLink';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaLinkService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAll(): Observable<SocialMediaLinkResponse> {
    return this.http.get<SocialMediaLinkResponse>(`${this.baseUrl}/api/GetAllSocialLinks`);
  } //burada response tipi SocialMediaLinkResponse olarak verilmiştir. Döneceği değer rxjs kütüphanesinin observable nesnesidir. Datayı sunacak olan nesne olarak istenilen değer verilmiştir.

  getSocialMediaLinkById(id: number): Observable<SocialMediaLinkDetailResponse> {
    return this.http.get<SocialMediaLinkDetailResponse>(`${this.baseUrl}/api/GetSocialMediaLinkById/${id}`);
  }

  updateSocialMediaLink(id: number, linkData: SocialMediaLink): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/api/UpdateSocialLink/${id}`, linkData);
  }

  crateSocialMediaLink(socialMediaLink: SocialMediaLinkAdd) {
    return this.http.post<Response>(`${this.baseUrl}/api/InsertSocialAddLink`, socialMediaLink, { observe: 'response' })
      .pipe(map(
        (response) => response.status === 201))
  }

  deleteSocialMediaLink(id: number): Observable<boolean> {
    return this.http.delete<Response>(`${this.baseUrl}/api/DeleteSocialLink/${id}`, { observe: 'response' })
      .pipe(map(
        (response) => response.status === 204))
  }


}
