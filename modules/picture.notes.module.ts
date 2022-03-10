import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PictureMainPageComponent } from "components/picture-main-page/picture-main-page.component";
import { PictureNotesEditFormComponent } from "components/picture-notes-edit-form/picture-notes-edit-form.component";
import { sharedModule } from "./shared.module";

const routes:Routes=[
    {path:'' , component:PictureMainPageComponent}
]


@NgModule({
    imports:[
        sharedModule,
        RouterModule.forChild(routes)
    ],
    declarations:[
        PictureMainPageComponent,
        PictureNotesEditFormComponent
    ]
})

export class pictureNotesModule{}