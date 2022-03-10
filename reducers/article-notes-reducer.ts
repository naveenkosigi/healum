import { createReducer, on } from "@ngrx/store";
import { articleNoteModel } from "models/article.note.model";
import * as notesArticleActions from "../actions/article-notes-action";

export interface articleNotesState{
    articleNotes:articleNoteModel[]
}

export const initialArticleNotesState:articleNotesState={
    articleNotes:[]
}

export const articleNotesReducer=createReducer(
    initialArticleNotesState,
    on(notesArticleActions.addArticleNote,function(state,note){

        return {
            ...state,
            textNotes:[...state.articleNotes,note.note]
        }
    })
);