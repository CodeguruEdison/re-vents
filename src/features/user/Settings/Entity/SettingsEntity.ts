export interface IAboutPageFromProp {

}
export interface IAccountPageFromProp {
    error?:string
    updatePassword :(password:string)=> Promise<void>;
    providerId:string 
}
export interface IBasicPageFromProp {

}
export interface IPhotosPageFromProp {

}
export interface ISettingDashBoardFromProp {
    //updatePassword :(password:string)=> Promise<void>;
    updatePassword :(password:string)=>Promise<void>;
    providerId:string 
   // RegisterUserAction:any
}
