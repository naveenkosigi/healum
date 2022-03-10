import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleMainPageComponent } from "components/article-main-page/article-main-page.component";
import { ArticleNotesEditFormComponent } from "components/article-notes-edit-form/article-notes-edit-form.component";
import { sharedModule } from "./shared.module";

const paths:Routes=[
    {path:'' , component:ArticleMainPageComponent}
]

@NgModule({
    imports:[
        sharedModule,
        RouterModule.forChild(paths)
    ],
    declarations:[
        ArticleMainPageComponent,
        ArticleNotesEditFormComponent
    ]
})

export class articleNotesModule{}