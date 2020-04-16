import { Component, OnInit } from '@angular/core';
import {Vacancy} from '../models'
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancylist',
  templateUrl: './vacancylist.component.html',
  styleUrls: ['./vacancylist.component.css']
})
export class VacancylistComponent implements OnInit {
  vacancies: Vacancy[]
  constructor(private vacancyService: VacancyService,
    public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getVacanciesList();
  }

  getVacanciesList() {
    let id = this.route.snapshot.paramMap.get('id');
    id = id.substr(1);
    this.vacancyService.getVacancyList(id)
      .subscribe(vacancies => {
        this.vacancies = vacancies;
      });
  }
}
