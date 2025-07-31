export interface User{
    id : number;
    name : string;
    email:string;
}
export interface Course{
    id:number;
    title:string;
    price:number;
}
export interface Booking{
    id:number;
    userId:number;
    courseId:number;
    date: Date;
}