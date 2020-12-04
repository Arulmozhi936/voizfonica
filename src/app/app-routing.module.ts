import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { LogComponent } from './log/log.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
// import { AddadminComponent } from './addadmin/addadmin.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { AddadminComponent } from './addadmin/addadmin.component';
//import { QueryComponent } from './query/query.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CustomerqueryComponent } from './customerquery/customerquery.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MyplanComponent } from './myplan/myplan.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BillingComponent } from './billing/billing.component';
import { PaypalComponent } from './paypal/paypal.component';
import { DongelplansComponent } from './dongelplans/dongelplans.component';
import { PaymentComponent } from './payment/payment.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { ChatComponent } from './chat/chat.component';
import { AdminqueryComponent } from './adminquery/adminquery.component';

import { EditprepaidComponent } from './editprepaid/editprepaid.component';
import { AddprepaidComponent } from './addprepaid/addprepaid.component';
import { ViewprepaidComponent } from './viewprepaid/viewprepaid.component';
import { PrepaidlistComponent } from './prepaidlist/prepaidlist.component';
import { ViewdongleComponent } from './viewdongle/viewdongle.component';
import { EditdongleComponent } from './editdongle/editdongle.component';
import { AdddongleComponent } from './adddongle/adddongle.component';
import { AddpostpaidComponent } from './addpostpaid/addpostpaid.component';
import { AddsubscriberComponent } from './addsubscriber/addsubscriber.component';
import { EditpostpaidComponent } from './editpostpaid/editpostpaid.component';
import { EditsubscriberComponent } from './editsubscriber/editsubscriber.component';
import { SubscriberlistComponent } from './subscriberlist/subscriberlist.component';
import { ViewpostpaidComponent } from './viewpostpaid/viewpostpaid.component';
import { ViewsubscriberComponent } from './viewsubscriber/viewsubscriber.component';
import { UserplansComponent } from './userplans/userplans.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentsComponent } from './payments/payments.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { PretopostComponent } from './pretopost/pretopost.component';
const routes: Routes = [
  {
    path:'updateprofile/:id' , component:UpdateprofileComponent
  },
  {path:'pretopost',component:PretopostComponent},
  {
    path:'updateprofile' , component:UpdateprofileComponent
  },
  { path: 'myplan', component: MyplanComponent },{ path: 'recharge', component: RechargeComponent },
  { path: 'chat', component: ChatComponent },{path:'paysuccess',component:PaysuccessComponent},
  { path: 'paymentsuccess', component: PaymentsuccessComponent },
  { path: 'paymentsuccess/:emailId', component: PaymentsuccessComponent },
  {path:'payments',component:PaymentsComponent},
  {path:'payments/:emailId',component:PaymentsComponent},
  { path: 'paypal', component: PaypalComponent },
  { path: 'profile', component: UserprofileComponent },
  {path:'customerquery',component:CustomerqueryComponent},{path:'adminquery',component:AdminqueryComponent},
  { path: 'changepassword', component: ChangepasswordComponent },
  {path :'forgotpassword',component:ForgotpasswordComponent},
  { path: 'log', component: LogComponent },
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:UserregistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'adminregistration', component: RegistrationComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  {path:'edituser',component:EdituserComponent},
  {path:'edituser/:id',component:EdituserComponent},
  {path:'userlist',component:UserlistComponent},
  { path: 'adduser', component: AdduserComponent },
  { path: 'adminlist', component: AdminlistComponent },
  { path: 'addadmin', component: AddadminComponent },
  {path:'editadmin',component:EditadminComponent},
   {path:'transaction',component:TransactionComponent},
  {path:'transaction/:emailId',component:TransactionComponent},
  
  
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },

  {path:'prepaidplans',component:PrepaidplansComponent},
  {path:'postpaidplans',component:PostpaidplansComponent},
  {path:'dongelplans',component:DongelplansComponent},
  { path: 'payment', component: PaymentComponent },
  ///prepaid
  {path:'prepaidlist',component:PrepaidlistComponent},
  {path:'viewprepaid/:id',component:ViewprepaidComponent},
  {path:'editprepaid/:id',component:EditprepaidComponent},
  {path:'viewprepaid',component:ViewprepaidComponent},
  {path:'editprepaid',component:EditprepaidComponent},
  {path:'addprepaidplans',component:AddprepaidComponent},
  { path: 'addprepaid', component: AddprepaidComponent },
  //prepaid

  {path:'prepaidlist',component:PrepaidlistComponent},
  {path:'viewpostpaid/:id',component:ViewpostpaidComponent},
  {path:'editpostpaid/:id',component:EditpostpaidComponent},
  {path:'viewpostpaid',component:ViewpostpaidComponent},
  {path:'editpostpaid',component:EditpostpaidComponent},
  {path:'addpostpaid',component:AddpostpaidComponent},
  
  //dongle

  {path:'prepaidlist',component:PrepaidlistComponent},
  {path:'viewdongle/:id',component:ViewdongleComponent},
  {path:'editdongle/:id',component:EditdongleComponent},
  {path:'viewdongle',component:ViewdongleComponent},
  {path:'editdongle',component:EditdongleComponent},
  {path:'adddongle',component:AdddongleComponent},


  //subscriber list
  {path:'subscriberlist',component:SubscriberlistComponent},
  {path:'viewsubscriber/:id',component:ViewsubscriberComponent},
  {path:'editsubscriber/:id',component:EditsubscriberComponent},
  {path:'viewsubscriber',component:ViewsubscriberComponent},
  {path:'editsubscriber',component:EditsubscriberComponent},
  {path:'addsubscriber',component:AddsubscriberComponent},
  { path: 'billing', component: BillingComponent },
  {path:'userplan',component:UserplansComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
onSameUrlNavigation: 'reload'
  })],
exports: [RouterModule]
})
export class AppRoutingModule { }
