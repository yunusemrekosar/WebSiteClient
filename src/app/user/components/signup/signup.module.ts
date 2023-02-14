import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { FileuploadModule } from "../../../services/common/fileupload/fileupload.module";



@NgModule({
    declarations: [
        SignupComponent
    ],
    exports: [
        SignupComponent
    ],
    imports: [
        CommonModule,
        FileuploadModule,
        RouterModule.forChild([
            { path: "", component: SignupComponent },
        ])
    ]
})
export class SignupModule { }
