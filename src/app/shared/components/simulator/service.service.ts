import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = `https://api.covid19api.com/`;
const COVID_URL = {
  COUNTRIES: `${BASE_URL}countries`,
  BY_COUNTRY: (country: string) => `${BASE_URL}dayone/country/${country}`,
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  //getCountries$ = this.http.get<Country[]>(COVID_URL.COUNTRIES)
}
