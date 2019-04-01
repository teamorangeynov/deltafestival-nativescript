/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserConcert } from '../models/user-concert';
@Injectable({
  providedIn: 'root',
})
class UserConcertService extends __BaseService {
  static readonly GetUserConcertsItemsPath = '/api/UserConcert';
  static readonly PostUserConcertItemPath = '/api/UserConcert';
  static readonly GetUserConcertItemPath = '/api/UserConcert/{id}';
  static readonly PutUserConcertItemPath = '/api/UserConcert/{id}';
  static readonly DeleteUserConcertItemPath = '/api/UserConcert/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetUserConcertsItemsResponse(): __Observable<__StrictHttpResponse<Array<UserConcert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/UserConcert`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserConcert>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetUserConcertsItems(): __Observable<Array<UserConcert>> {
    return this.GetUserConcertsItemsResponse().pipe(
      __map(_r => _r.body as Array<UserConcert>)
    );
  }

  /**
   * @param item undefined
   * @return Success
   */
  PostUserConcertItemResponse(item?: UserConcert): __Observable<__StrictHttpResponse<UserConcert>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/UserConcert`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserConcert>;
      })
    );
  }
  /**
   * @param item undefined
   * @return Success
   */
  PostUserConcertItem(item?: UserConcert): __Observable<UserConcert> {
    return this.PostUserConcertItemResponse(item).pipe(
      __map(_r => _r.body as UserConcert)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetUserConcertItemResponse(id: number): __Observable<__StrictHttpResponse<UserConcert>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/UserConcert/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserConcert>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetUserConcertItem(id: number): __Observable<UserConcert> {
    return this.GetUserConcertItemResponse(id).pipe(
      __map(_r => _r.body as UserConcert)
    );
  }

  /**
   * @param params The `UserConcertService.PutUserConcertItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutUserConcertItemResponse(params: UserConcertService.PutUserConcertItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.item;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/UserConcert/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `UserConcertService.PutUserConcertItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutUserConcertItem(params: UserConcertService.PutUserConcertItemParams): __Observable<null> {
    return this.PutUserConcertItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  DeleteUserConcertItemResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/UserConcert/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteUserConcertItem(id: number): __Observable<null> {
    return this.DeleteUserConcertItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserConcertService {

  /**
   * Parameters for PutUserConcertItem
   */
  export interface PutUserConcertItemParams {
    id: number;
    item?: UserConcert;
  }
}

export { UserConcertService }
