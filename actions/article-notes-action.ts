import { createAction, props } from "@ngrx/store"
import { articleNoteModel } from "models/article.note.model"

export const addArticleNote=createAction('addArticleNote',props<{note:articleNoteModel}>())