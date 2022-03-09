import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes=[
    {path:'text-module',loadChildren: () => import('../modules/text.notes.module').then(m => m.textNotesModule)}
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