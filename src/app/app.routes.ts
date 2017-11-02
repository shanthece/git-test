import { Routes } from '@angular/router';
import { BankingPageComponent } from './banking-page/banking-page.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { DocumentsComponent } from './documents/documents.component';
import { CheckComponent } from './check/check.component';
import { HomeComponent } from './home/home.component';
import { HireMeComponent } from './hire-me/hire-me.component';

export const Approute:Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full'},
    {
        path: 'Home',
        component : HomeComponent
    },
    {
        path: 'footer',
        component : FooterBarComponent
    },
    {
        path: 'banking',
        component : BankingPageComponent
    },
    {
        path: 'signup',
        component : SignUpComponent
    },
    {
        path: 'phone',
        component : PhoneLoginComponent
    },
    {
        path: 'documents',
        component : DocumentsComponent
    }
    ,
    {
        path: 'Check',
        component : CheckComponent
    },
    {
        path: 'hireme',
        component : HireMeComponent
    }
];