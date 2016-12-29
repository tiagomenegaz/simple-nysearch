import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SearchService {
  private url: string = "https://api.nytimes.com/";
  private token: string = "f6ace37229634a9f82e595d77aa57209";

  constructor(private http: Http) { }

  getArticles(query){
    return this.http.get(this.url + '/svc/search/v2/articlesearch.json?q='+ query +'&api-key=' + this.token)
      .map(res => res.json());
  }
}
