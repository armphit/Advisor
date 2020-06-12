import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public rootPath: string =
  "http://cpe.rmuti.ac.th/project/advisor/api/index.php/";
  constructor(public router:Router,private http: HttpClient) {}

  checkusernameandpassword(uname: string, pass: string) {
    if (uname == 'admin' && pass == 'admin123') {
      localStorage.setItem('username', 'admin');
       this.router.navigate(['/admin']);
      return true;

    } else {
      return false;
    }
  }

  public post = (path: string, formdata: any = null) => {
    return new Promise((resolve) => {
      this.http
        .post(this.rootPath + path, formdata)
        .toPromise()
        .then((value) => {
          resolve({ connect: true, response: value });
        })
        .catch((reason) => {
          resolve({ connect: false, response: reason });
        });
    });
  };

  public get = (path: string) => {
    return new Promise((resolve) => {
      this.http
        .get(this.rootPath + path)
        .toPromise()
        .then((value) => {
          resolve({ connect: true, response: value });
        })
        .catch((reason) => {
          resolve({ connect: false, response: reason });
        });
    });
  };
  public navRouter = (path: string, params: any = {}) => {
    this.router.navigate([`${path}`], { queryParams: params });
  };
}
