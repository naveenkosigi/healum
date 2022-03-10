
export class articleNoteModel{
    private id:String;
    constructor(public title:String,public description:String){
        this.id=Date.now()+"";
    }
}