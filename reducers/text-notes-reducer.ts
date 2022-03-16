import { createReducer, on } from "@ngrx/store";
import { textNoteModel } from "models/text.note.model";
import * as notesTextActions from "../actions/text-notes-action";
import { articleNotesState } from "./article-notes-reducer";
import { pictureNotesState } from "./picture-notes-reducer";

export interface appState{
    textNotesState:textNotesState,
    articleNotesState:articleNotesState,
    pictureNotesState:pictureNotesState
}


export interface textNotesState{
    textNotes:textNoteModel[]
}

export const initialTextNotesState:textNotesState={
    textNotes:[]
}

export const notesTextReducer=createReducer(
    initialTextNotesState,
    on(notesTextActions.addTextNote,function(state,note){

        return {
            ...state,
            textNotes:[...state.textNotes,note.note]
        }
    })
);

