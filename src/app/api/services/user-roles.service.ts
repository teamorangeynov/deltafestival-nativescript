/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserRole } from '../models/user-role';
@Injectable({
  providedIn: 'root',
})
class UserRolesService extends __BaseService {
  static readonly GetUserRolePath = '/api/UserRoles';
  static readonly PostUserRolePath = '/api/UserRoles';
  static readonly GetUserRole_1Path = '/api/UserRoles/{id}';
  static readonly PutUserRolePath = '/api/UserRoles/{id}';
  static readonly DeleteUserRolePath = '/api/UserRoles/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetUserRoleResponse(): __Observable<__StrictHttpResponse<Array<UserRole>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/UserRoles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserRole>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetUserRole(): __Observable<Array<UserRole>> {
    return this.GetUserRoleResponse().pipe(
      __map(_r => _r.body as Array<UserRole>)
    );
  }

  /**
   * @param userRole undefined
   * @return Success
   */
  PostUserRoleResponse(userRole?: UserRole): __Observable<__StrictHttpResponse<UserRole>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userRole;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/UserRoles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserRole>;
      })
    );
  }
  /**
   * @param userRole undefined
   * @return Success
   */
  PostUserRole(userRole?: UserRole): __Observable<UserRole> {
    return this.PostUserRoleResponse(userRole).pipe(
      __map(_r => _r.body as UserRole)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetUserRole_1Response(id: number): __Observable<__StrictHttpResponse<UserRole>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/UserRoles/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserRole>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetUserRole_1(id: number): __Observable<UserRole> {
    return this.GetUserRole_1Response(id).pipe(
      __map(_r => _r.body as UserRole)
    );
  }

  /**
   * @param params The `UserRolesService.PutUserRoleParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `userRole`:
   */
  PutUserRoleResponse(params: UserRolesService.PutUserRoleParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.userRole;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/UserRoles/${params.id}`,
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
   * @param params The `UserRolesService.PutUserRoleParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `userRole`:
   */
  PutUserRole(params: UserRolesService.PutUserRoleParams): __Observable<null> {
    return this.PutUserRoleResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteUserRoleResponse(id: number): __Observable<__StrictHttpResponse<UserRole>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/UserRoles/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserRole>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  DeleteUserRole(id: number): __Observable<UserRole> {
    return this.DeleteUserRoleResponse(id).pipe(
      __map(_r => _r.body as UserRole)
    );
  }
}

module UserRolesService {

  /**
   * Parameters for PutUserRole
   */
  export interface PutUserRoleParams {
    id: number;
    userRole?: UserRole;
  }
}

export { UserRolesService }
