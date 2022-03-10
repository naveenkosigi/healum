export class pictureNotesModel{
    private id:String;
    constructor(public title:String,public description:String,public imageUrl:String){
        this.id=Date.now()+"";
    }
}