import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class ApiMqtt {

private options: any ={Headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'})}

  constructor(
    private http: HttpClient,
    private httpClient: HttpClientModule) { }

    dadosSensores(server: string, port: string){
      return this.http.get(server+':'+port+'/');
    }
    
  
}

