import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  store = new BehaviorSubject<number>(0)

  constructor() {
  }
}
