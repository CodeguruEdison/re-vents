import React,{FC} from 'react'
import { IEventDetailedFromProp } from './Entity/EventDetailedEntity'

export const EventDetailedPage:FC<IEventDetailedFromProp> = (prop) => {
    return (
        <div>
            <h1> Event Details Page</h1>
        </div>
    )
}
export default EventDetailedPage;