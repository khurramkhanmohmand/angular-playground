import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChapterRubabComponent } from './chapter-rubab/chapter-rubab.component';
import { ChapterKhurramComponent } from './chapter-khurram/chapter-khurram.component';
import { ChapterAdnanComponent } from './chapter-adnan/chapter-adnan.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations:[
    ChapterRubabComponent,
    ChapterKhurramComponent,
    ChapterAdnanComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'rubab-work', component: ChapterRubabComponent},
      {path: 'khurram-work', component: ChapterKhurramComponent},
      {path: 'adnan-work', component: ChapterAdnanComponent}
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
