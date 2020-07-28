import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl:any='http://localhost/rest-api/index.php/api/';
  status()
  {
      return this.http.get(this.apiUrl+'status');
  }
  baca()
  {
      return this.http.get(this.apiUrl+'data');
  }
  simpan(data)
  {
      return this.http.get(this.apiUrl+'data', data);
  }
  ubah(data)
  {
      return this.http.get(this.apiUrl+'data/' + data.id,data);
  }
  hapus(id)
  {
      return this.http.get(this.apiUrl+'data/' + id);
  }
}
