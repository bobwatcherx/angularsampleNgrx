import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {tambah,kurang,reset} from './store/banana.actions';
import {bananaReducer} from './store/banana.reducer';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countx$:Observable<number>;

 constructor(
private store: Store<{ countx: number }>,
    ) {
    this.countx$ = store.select('countx');
  }

  btntambah(){
    this.store.dispatch(tambah())
  }
  btnkurang(){
    this.store.dispatch(kurang())
  }
    btnreset(){
    this.store.dispatch(reset())
  }


}
