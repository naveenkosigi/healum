import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes=[
    {path:'text-module',loadChildren: () => import('../modules/text.notes.module').then(m => m.textNotesModule)},
    {path:'article-module',loadChildren: () => import('../modules/article.notes.module').then(m => m.articleNotesModule)},
    {path:'picture-module',loadChildren: () => import('../modules/picture.notes.module').then(m => m.pictureNotesModule)},
    {path:'',redirectTo:'text-module',pathMatch: 'full'}
];

@NgModule({

    declarations : [

    ],
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class appRoutingModule{}