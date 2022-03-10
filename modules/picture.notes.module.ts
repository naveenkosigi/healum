import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PictureMainPageComponent } from "components/picture-main-page/picture-main-page.component";
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
        PictureMainPageComponent
    ]
})

export class pictureNotesModule{}