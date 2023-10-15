import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  private apiUrl = 'http://localhost:8081/api'; 
  constructor(private http: HttpClient) { }

  getAllAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiUrl}/annonces`);
  }

  getById(id:any){
    return this.http.get<Annonce>(`${this.apiUrl}/annonces/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/annonces/${id}`);
  }

  save(annonce: Annonce) {
    return this.http.post<Annonce>(`${this.apiUrl}/annonces`,annonce);

  }

  edit(id: any, updatedAnnonce: Annonce) {
    
    return this.http.put<Annonce>(`${this.apiUrl}/annonces/${id}`, updatedAnnonce);
  }
  

}
