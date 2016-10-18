import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    declarations: [LoginComponent, LogoutComponent],
    imports: [FormsModule]
})

export class MainModule {

}
