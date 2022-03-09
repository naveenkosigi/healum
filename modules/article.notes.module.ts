import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleMainPageComponent } from "components/article-main-page/article-main-page.component";
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
        ArticleMainPageComponent
    ]
})

export class articleNotesModule{}