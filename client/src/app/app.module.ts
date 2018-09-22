import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule,MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,MatGridListModule,MatTabsModule,MatSelectModule,MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';

import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './routing/add-item/add-item.component';
import { ItemListComponent } from './routing/item-list/item-list.component';
import { TakeItemComponent } from './routing/take-item/take-item.component';
import { HistoryComponent } from './routing/history/history.component';


const appRoutes: Routes = [
  { path: "" , component: AddItemComponent },
  { path: "add-item" , component: AddItemComponent },
  { path: "item-list" , component: ItemListComponent },
  { path: "take-item" , component: TakeItemComponent },
  { path: "history" , component: HistoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddItemComponent,
    ItemListComponent,
    TakeItemComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    LayoutModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
