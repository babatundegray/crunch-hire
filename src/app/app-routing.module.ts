import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { FAQsComponent } from './faqs/faqs.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'faq', component: FAQsComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
