import { Event } from "../../../features/event/EventList/Entity/EventList";
export const createNewEvent = (user: any, photoURL: string, event: Event) => {
  return {
    ...event,
    hostPhotoURL:photoURL || '/assets/user.png',
    hostUid:user.uid,
    hostedBy:user.displayName,
    created: new Date(),
    attendees:{
        [user.uid]:{
            going:true,
            joinDate:new Date(),
            photoURL:photoURL || '/assets/user.png',
            displayName:user.displayName,
            host:true
        }
    }
  };
};

//need to check 
export const ObjectToArray = (sourceObject:any) =>{
 if(sourceObject){
    return Object.entries(sourceObject).map(e=>Object.assign({},e[1],{id:e[0]}));
 }
}
