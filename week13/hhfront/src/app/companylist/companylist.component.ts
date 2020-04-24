import { Component, OnInit } from '@angular/core';
import { CompanyService } from "../company.service";
import { Company } from "../models";


@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
  companies: Company[] = [];

  constructor(public companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    this.companyService.getCompanyList()
      .subscribe(companies => {
        this.companies = companies
      });
  }

  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe(res => {
      
    });
  }
}
