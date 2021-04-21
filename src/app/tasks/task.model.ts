export class Task {
    taskId: number;
    taskName: string = '';
    taskDate: string = ''
    taskreminder: Boolean = false;
    constructor(tskId:number,taskName:string,taskDate:string,taskRemind:Boolean){
        this.taskId = tskId;
        this.taskName = taskName;
        this.taskDate = taskDate;
        this.taskreminder = taskRemind;
    }

}