import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChapterRubabComponent } from './chapter-rubab/chapter-rubab.component';
import { ChapterKhurramComponent } from './chapter-khurram/chapter-khurram.component';
import { ChapterAdnanComponent } from './chapter-adnan/chapter-adnan.component';
import { WeclomePageComponent } from './weclome-page/weclome-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'rubab-work', component: ChapterRubabComponent},
      {path: 'khurram-work', component: ChapterKhurramComponent},
      {path: 'adnan-work', component: ChapterAdnanComponent},
      {path: '', component: WeclomePageComponent}
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
