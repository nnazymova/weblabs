import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Vacancy} from "./models";

@Injectable({
    providedIn: 'root'
})
export class VacancyService {
    BASE_URL = 'http://127.0.0.1:8000';
    constructor(private http: HttpClient) { }

    getVacancyList(id): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`);
    }

}