import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
// import { AppRoutingModule } from './app-routing
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,MatIconModule,
    FormsModule,
    MatMenuModule,
    MatExpansionModule,
    AppRoutingModule,RouterModule.forRoot([
      {path:'',component:AppComponent},
      {path:'comp1',component:Comp1Component },
      {path: 'comp2',component:Comp2Component},
      {path:'comp3',component:Comp3Component}
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
