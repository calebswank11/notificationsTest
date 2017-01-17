import { Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CallService {
  constructor(public http: Http){}

  get($urlTest, $headers): Promise<any> {
    let headers = new Headers($headers);
    let options = new RequestOptions({headers: headers});
   return this.http
     .get($urlTest, options)
     .toPromise()
     .then((response: Response) => response.json())
     .catch(this.handleError);
  }

  post($urlTest, $data, $headers): Promise<any>{
    console.log($urlTest, $data, $headers);
    let headers = new Headers($headers);
    let options = new RequestOptions({ headers: headers, method: "post" });
    return this.http
      .post($urlTest, $data, options)
      .toPromise()
      .then((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    // console.log('ERROR');
    return Promise.reject(error.message || error);
  }
}
