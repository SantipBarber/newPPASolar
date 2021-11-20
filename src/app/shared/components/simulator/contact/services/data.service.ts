import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

export interface Contact{
  name: string;
  lastName?: string;
  email: string;
  phone: string;
  id: string;
  message: string;
  area?: number;
  state?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  contacts: Observable<Contact> | undefined
  private contactCollection: AngularFirestoreCollection<Contact>;
  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<Contact>('ppasolar_contact')
  }

  onSaveContact (contactForm: any, area:number, state: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = {
          id,
          ... contactForm,
          area,
          state
        }
        const result = this.contactCollection.doc(id).set(data, )
        resolve(result)

      } catch (error){
        reject(error.message || error);
      }
    })
  }
}
