import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { map,catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TrackOrderService {

  private hostServer = environment.hostServer
  private host = this.hostServer + '/rest/track-order'

  constructor (private http: HttpClient) { }

  save (params) {
    params = encodeURIComponent(params)
    return this.http.get(this.host + '/' + params).pipe(map((response: any) => response),catchError((error) => { throw error }))
  }

}
