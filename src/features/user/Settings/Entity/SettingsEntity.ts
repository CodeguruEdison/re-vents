export interface IAboutPageFromProp {
    updateProfile:(user:any)=>Promise<void>;
}
export interface IAccountPageFromProp {
    error?:string
    updatePassword :(password:string)=> Promise<void>;
    providerId:string 
}
export interface IBasicPageFromProp {
   // user:any
   updateProfile:(user:any)=>Promise<void>;
}
export interface IPhotosPageFromProp {

}
export interface ISettingDashBoardFromProp {
    //updatePassword :(password:string)=> Promise<void>;
    updatePassword :(password:string)=>Promise<void>;
    providerId:string 
   user:any,
   updateProfile:(user:any)=>Promise<void>;
   // RegisterUserAction:any
}
