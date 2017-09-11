import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription : Subscription;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name : this.activeRoute.snapshot.params['name']
    };

    //here we are using observable to listen async changes.
    this.paramsSubscription = this.activeRoute.params.subscribe(
      (params:Params) =>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(){
    //we are manually unsubscribing this so that when angular destroys our component we dont want observable to sit in memory 
    //and subscibe the component param changes (in our case) which is already destroyed.
    this.paramsSubscription.unsubscribe();
  }

}
