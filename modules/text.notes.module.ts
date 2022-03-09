import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotesEditFormComponent } from "components/notes-edit-form/notes-edit-form.component";
import { NotesMainPageComponent } from "components/notes-main-page-component/notes-main-page-component.component";
import { NotesListViewComponent } from "components/notes-list-view/notes-list-view.component";
import { sharedModule } from "./shared.module";
import { NotesComponent } from "components/notes/notes.component";


const routes:Routes=[
    {path:'' , component:NotesMainPageComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        sharedModule
    ],
    exports:[

    ],
    declarations:[
        NotesMainPageComponent,
        NotesEditFormComponent,
        NotesListViewComponent,
        NotesComponent
    ]
})

export class textNotesModule{}