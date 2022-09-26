import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Villain } from '../interfaces/villain.interface';

const httpOption = {
  header:new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class VillainService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:3000';
  }
  getVillain() :Observable<Villain[]>{
    const url = `${this.baseUrl}/villains`;

    return this.http.get<Villain[]>(url);

  }
}
