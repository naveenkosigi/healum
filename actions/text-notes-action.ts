import { createAction, props } from "@ngrx/store";
import { textNoteModel } from "models/text.note.model";

export const addTextNote=createAction('AddTextNote',props<{note:textNoteModel}>())