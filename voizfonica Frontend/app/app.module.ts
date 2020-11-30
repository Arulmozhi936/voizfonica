import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
//import { FourComponent } from './four/four.component';
import { LogComponent } from './log/log.component';
import { HomeComponent } from './home/home.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { Service1Component } from './services/service1/service1.component';
import { Service2Component } from './services/service2/service2.component';
import { Footer1Component } from './loginsuccess/footer1/footer1.component';
import { Footer2Component } from './loginsuccess/footer2/footer2.component';
//import { QueryComponent } from './query/query.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { OneComponent } from './home/one/one.component';
import { ThreeComponent } from './home/three/three.component';
import { FourComponent } from './home/four/four.component';
import { BgComponent } from './home/bg/bg.component';
import { TabComponent } from './home/tab/tab.component';
import { FiveComponent } from './home/five/five.component';
//import { FooterComponent } from './contact/footer/footer.component';
import { BottomComponent } from './contact/bottom/bottom.component';
import { HomeaboutComponent } from './homeabout/homeabout.component';
import { CustomerqueryComponent } from './customerquery/customerquery.component';
import { ImagefloatComponent } from './loginsuccess/imagefloat/imagefloat.component';
import { Foot1Component } from './admindashboard/foot1/foot1.component';
import { Foot2Component } from './admindashboard/foot2/foot2.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FooternewComponent } from './footernew/footernew.component';
import { MyplanComponent } from './myplan/myplan.component';
import { RechargeComponent } from './recharge/recharge.component';
import { BillingComponent } from './billing/billing.component';
import { PaypalComponent } from './paypal/paypal.component';
import { ChatComponent } from './chat/chat.component';
import { AdminqueryComponent } from './adminquery/adminquery.component';
import { AddprepaidComponent } from './addprepaid/addprepaid.component';
import { EditprepaidComponent } from './editprepaid/editprepaid.component';
import { ViewprepaidComponent } from './viewprepaid/viewprepaid.component';
import { PrepaidlistComponent } from './prepaidlist/prepaidlist.component';
import { AddpostpaidComponent } from './addpostpaid/addpostpaid.component';
import { AdddongleComponent } from './adddongle/adddongle.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditdongleComponent } from './editdongle/editdongle.component';
import { EditpostpaidComponent } from './editpostpaid/editpostpaid.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AddsubscriberComponent } from './addsubscriber/addsubscriber.component';
import { EditsubscriberComponent } from './editsubscriber/editsubscriber.component';
//import { ProductlistComponent } from './productlist/productlist.component';

import { SubscriberlistComponent } from './subscriberlist/subscriberlist.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewpostpaidComponent } from './viewpostpaid/viewpostpaid.component';
import { ViewdongleComponent } from './viewdongle/viewdongle.component';
import { ViewsubscriberComponent } from './viewsubscriber/viewsubscriber.component';
import { ProductlistComponent } from './productlist/ProductlistComponent';
import { UserplansComponent } from './userplans/userplans.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentService } from './regi.service';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { PretopostComponent } from './pretopost/pretopost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    UserregistrationComponent,
    UserlistComponent,
    AdduserComponent,
    EdituserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FourComponent,
    LogComponent,
    SecondComponent,
    ServicesComponent,
    ThirdComponent,
    AddadminComponent,
    EditadminComponent,
    AdminlistComponent,
    Service1Component,
    Service2Component,
    Footer1Component,
    Footer2Component,
   // QueryComponent,
    ChangepasswordComponent,
    OneComponent,
    ThreeComponent,
    FourComponent,
    BgComponent,
    TabComponent,
    FiveComponent,
  //  FooterComponent,
    BottomComponent,
  HomeaboutComponent,
  CustomerqueryComponent,
  ImagefloatComponent,
  Foot1Component,
  Foot2Component,
  UserprofileComponent,
  AdminprofileComponent,
  ForgotpasswordComponent,
  FooternewComponent,
  MyplanComponent,
  RechargeComponent,
  BillingComponent,
    PaypalComponent,
  ChatComponent,
  AdminqueryComponent,
  AddprepaidComponent,
  EditprepaidComponent,
  ViewprepaidComponent,
  PrepaidlistComponent,
  AddpostpaidComponent,
  AdddongleComponent,
  AddproductComponent,
  EditdongleComponent,
  EditpostpaidComponent,
  EditproductComponent,
  AddsubscriberComponent,
  EditsubscriberComponent,
  ProductlistComponent,
  SubscriberlistComponent,
  ViewproductComponent,
  ViewpostpaidComponent,
  ViewdongleComponent,
  ViewsubscriberComponent,
  UserplansComponent,
  PaymentsuccessComponent,
  PaymentsComponent,
  UpdateprofileComponent,
  TransactionComponent,
  PaysuccessComponent,
  PretopostComponent

  ],
  imports: [

  BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
