import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:app', component: ContactComponent },
  { path: 'support', component: ContactComponent },
  { path: 'support/:app', component: ContactComponent },
  { path: 'privacy_policy', component: PrivacyPolicyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
