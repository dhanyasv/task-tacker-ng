import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of ,throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable()
export class CommonService {
    constructor( private Http : HttpClient){

    }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    }  

    getAllUsers():Observable<any>{
        const data = this.Http.get('https://reqres.in/api/users?page=2',
        this.httpOptions).pipe(
            map((res: any) => {
              if (!res) {
                console.log('Error occurred.');
                throw new Error('Value expected!');
              }
              return res;
            }),
            retry(3), // Retry up to 3 times before failing
            catchError(err => of([]))
          );
        return data;
    }

    async getUsers(){
            const data = await fetch('https://reqres.in/api/users?page=2',
            {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            return data.json();
    }
}