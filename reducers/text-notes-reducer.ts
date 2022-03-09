import { createReducer, on } from "@ngrx/store";
import { textNoteModel } from "models/text.note.model";
import * as notesTextActions from "../actions/text-notes-action";

export interface appState{
    appState:textNotesState
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

