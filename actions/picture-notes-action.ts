import { createAction, props } from "@ngrx/store";
import { pictureNotesModel } from "models/picture.note.model";

export const addPictureNote=createAction('addPictureNote',props<{note:pictureNotesModel}>())

