import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {
    
    const bgJob = (observer:Observer<number>) => {

        if(lb>ub){
          observer.error("Invalid boundaries! Series can not be generated!");
          return;
        }

        let n = lb;
        let handler = setInterval(() => {
          observer.next(n);
          n++;
          if(n>ub){
            clearInterval(handler);
            observer.complete();
          }
        },500);

    };
    
    return new Observable<number>(bgJob);
  }
}
