import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lop } from '../models/lop';
import { lops } from '../models/lops';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LopService {
  // private urlBase: String = "http://localhost:8080/api";
  // private urlBase: String = "https://springangularapi.azurewebsites.net/api";
  // private urlBase = environment.baseUrl;

  lops: Lop[] = lops;

  constructor(private http: HttpClient) { }

  layTatCaLop(): Observable<Lop[]> {
    // return this.http.get<Lop[]>(`${this.urlBase}/lops`);
    
    return of(lops);
  }

  layLopBangMaLop(maLop: String): Observable<Lop> {
    // return this.http.get<Lop>(`${this.urlBase}/lop/${maLop}`);

    const index = lops.findIndex(lop => lop.maLop === maLop);
    return of(lops[index]);
  }

  themLop(lop: Lop) {
    // return this.http.post<Object>(`${this.urlBase}/lop`, lop);

    lops.push(lop);
    return of(null);
  }

  capNhatTenLopBangMaLop(maLop: String, lopUpdate: Lop): Observable<Lop> {
    // return this.http.put<Lop>(`${this.urlBase}/lop/${maLop}`, lop);

    const index = lops.findIndex(lop => lop.maLop === lopUpdate.maLop);
    lops[index].tenLop = lopUpdate.tenLop;
    if (lopUpdate.danhSachSinhVien.length > 0) {
      lops[index].danhSachSinhVien = lopUpdate.danhSachSinhVien;
    }
    return of(lopUpdate);
  }

  xoaLopBangMaLop(maLop: String) {
    // return this.http.delete<Object>(`${this.urlBase}/lop/${maLop}`);

    const index = lops.findIndex(lop => lop.maLop === maLop);
    this.lops.splice(index, 1);
    return of(null);
  }
}