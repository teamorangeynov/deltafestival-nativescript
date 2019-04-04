/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Crush } from '../models/crush';
@Injectable({
  providedIn: 'root',
})
class CrushService extends __BaseService {
  static readonly GetCrushesByUserPath = '/api/Crush/{id}';
  static readonly PostPath = '/api/Crush';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `CrushService.GetCrushesByUserParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `idCurrentUser`:
   *
   * @return Success
   */
  GetCrushesByUserResponse(params: CrushService.GetCrushesByUserParams): __Observable<__StrictHttpResponse<Array<Crush>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.idCurrentUser != null) __params = __params.set('idCurrentUser', params.idCurrentUser.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Crush/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Crush>>;
      })
    );
  }
  /**
   * @param params The `CrushService.GetCrushesByUserParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `idCurrentUser`:
   *
   * @return Success
   */
  GetCrushesByUser(params: CrushService.GetCrushesByUserParams): __Observable<Array<Crush>> {
    return this.GetCrushesByUserResponse(params).pipe(
      __map(_r => _r.body as Array<Crush>)
    );
  }

  /**
   * @param params The `CrushService.PostParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   */
  PostResponse(params: CrushService.PostParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idCurrentUser != null) __params = __params.set('idCurrentUser', params.idCurrentUser.toString());
    if (params.idCrush != null) __params = __params.set('idCrush', params.idCrush.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Crush`,
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
   * @param params The `CrushService.PostParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   */
  Post(params: CrushService.PostParams): __Observable<null> {
    return this.PostResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CrushService {

  /**
   * Parameters for GetCrushesByUser
   */
  export interface GetCrushesByUserParams {
    id: string;
    idCurrentUser?: number;
  }

  /**
   * Parameters for Post
   */
  export interface PostParams {
    idCurrentUser?: number;
    idCrush?: number;
  }
}

export { CrushService }
