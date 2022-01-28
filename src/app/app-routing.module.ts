import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/common/layout/layout.component';
import { PromotionLayoutComponent } from './pages/promotion/layout/promotion-layout.component';

const routes: Routes = [
  {
    path: '', component: PromotionLayoutComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
