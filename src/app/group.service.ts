import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Group } from './group';

import {Observable} from 'rxjs';

// dependency injection
@Injectable()
export class GroupService {

  private baseUrl = 'http://localhost:8080/Controller?command=';
  private groupsUrl = this.baseUrl + 'GetGroups';
  private addUrl = this.baseUrl + 'AddGroup';
  private deleteUrl = this.baseUrl + 'DeleteGroup';

  // dependency injection
  constructor(private http: HttpClient) {
  }

  // Observables provide support for passing messages between
  // publishers and subscribers in your application
  getGroups(): Observable<Group[]> {
      return this.http.get<Group[]>(this.groupsUrl);
  }


  addGroup(groupName: string, user: string, id1: string, id2: string, id3: string, id4: string) {
    const body = new HttpParams()
      .set('groupName', groupName)
      .set('user', user)
      .set('id1', id1)
      .set('id2', id2)
      .set('id3', id3)
      .set('id4', id4);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.addUrl, body.toString(), { headers, observe: 'response' });
  }
  removeGroup(name: string) {
    const body = new HttpParams()
      .set('name', name);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.deleteUrl, body.toString(), { headers, observe: 'response' });
  }


}

