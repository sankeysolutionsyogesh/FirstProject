import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private http: HttpClient) { }

  getData(dataToSend: any) {
    let url = "http://127.0.0.1:8000/Hostel_Student/students";

    const params = new URLSearchParams({
      pageno: dataToSend.page_no.toString(),
      pagesize: dataToSend.page_size.toString()
    }).toString();

    const fullUrl = `${url}?${params}`;

    return new Promise((resolve, reject) => {
      this.http.get(fullUrl).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });

  }

  postData(data:any) {
   
    let url = "http://127.0.0.1:8000/Hostel_Student/students/";

    return new Promise((resolve, reject) => {
      this.http.post(url, JSON.stringify(data)).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });

  }

  deleteData(id:any) {
   
    let url = "http://127.0.0.1:8000/Hostel_Student/students/delete?id=50";

 
    return new Promise((resolve, reject) => {
      this.http.delete('http://127.0.0.1:8000/Hostel_Student/students/delete?id=50').subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });

    
  }
}
