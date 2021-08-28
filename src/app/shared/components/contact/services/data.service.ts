import {Injectable} from '@angular/core';

export interface Contact{
  name: string;
  lastName?: string;
  email: string;
  id: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

}
