import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactModule } from './contact/contact.module';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
