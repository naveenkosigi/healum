import { createReducer, on } from "@ngrx/store";
import { pictureNotesModel } from "models/picture.note.model";
import * as pictureNotesActions from "../actions/picture-notes-action"; 

export interface pictureNotesState{
    pictureNotes:pictureNotesModel[]
}

export const initialArticleNotesState:pictureNotesState={
    pictureNotes:[]
}

export const initialPictureNotesState:pictureNotesState={
    pictureNotes:[]
}

export const pictureNotesReducer=createReducer(
    initialPictureNotesState,
    on(pictureNotesActions.addPictureNote,(state,note) => 
        ({
            ...state,
            pictureNotes:[...state.pictureNotes,note.note]
        })
    ));    
