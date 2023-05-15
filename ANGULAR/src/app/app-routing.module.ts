import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { CabinetComponent } from './component/cabinet/cabinet.component';
import { PathologieComponent } from './component/pathologie/pathologie.component';
import { ContactComponent } from './component/contact/contact.component';
import { CalendarComponent } from './component/calendar/calendar.component';


const routes: Routes = [  {
  path: '',
  component: IndexComponent
},
{
  path: 'cabinet',
  component: CabinetComponent
},
{
  path: 'pathologie',
  component: PathologieComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'calendar',
  component: CalendarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
