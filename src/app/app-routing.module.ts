import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { FAQsComponent } from './faqs/faqs.component'
import { OurRoleComponent } from './our-role/our-role.component'
import { HowWeVetComponent } from './how-we-vet/how-we-vet.component'
import { WhyChComponent } from './why-ch/why-ch.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'faq', component: FAQsComponent },
  { path: 'our-role', component: OurRoleComponent },
  { path: 'how-we-vet', component: HowWeVetComponent },
  { path: 'why-ch', component: WhyChComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
