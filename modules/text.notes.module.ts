import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotesMainPageComponent } from "src/app/notes-main-page-component/notes-main-page-component.component";


const routes:Routes=[
    {path:'' , component:NotesMainPageComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[

    ],
    declarations:[
        NotesMainPageComponent
    ]
})

export class textNotesModule{}