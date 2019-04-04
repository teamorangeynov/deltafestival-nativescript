/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
class UserService extends __BaseService {
  static readonly AuthenticatePath = '/api/User/authenticate';
  static readonly GetAllPath = '/api/User';
  static readonly PostPath = '/api/User';
  static readonly GetPath = '/api/User/{id}';
  static readonly PutPath = '/api/User/{id}';
  static readonly DeletePath = '/api/User/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param TicketCode undefined
   * @return Success
   */
  AuthenticateResponse(TicketCode?: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (TicketCode != null) __params = __params.set('TicketCode', TicketCode.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/User/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param TicketCode undefined
   * @return Success
   */
  Authenticate(TicketCode?: string): __Observable<string> {
    return this.AuthenticateResponse(TicketCode).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @return Success
   */
  GetAllResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetAll(): __Observable<Array<User>> {
    return this.GetAllResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * @param user undefined
   * @return Success
   */
  PostResponse(user?: User): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param user undefined
   * @return Success
   */
  Post(user?: User): __Observable<boolean> {
    return this.PostResponse(user).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetResponse(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  Get(id: number): __Observable<User> {
    return this.GetResponse(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param params The `UserService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `user`:
   *
   * @return Success
   */
  PutResponse(params: UserService.PutParams): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/User/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param params The `UserService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `user`:
   *
   * @return Success
   */
  Put(params: UserService.PutParams): __Observable<boolean> {
    return this.PutResponse(params).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/User/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  Delete(id: number): __Observable<boolean> {
    return this.DeleteResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }
}

module UserService {

  /**
   * Parameters for Put
   */
  export interface PutParams {
    id: string;
    user?: User;
  }
}

export { UserService }
