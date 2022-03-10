export class textNoteModel{

    private id:String
    constructor(public description:String){
        this.id=Date.now()+"";
    }

}