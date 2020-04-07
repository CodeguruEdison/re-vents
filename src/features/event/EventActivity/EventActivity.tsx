
import React, { FC,Fragment } from 'react'
import { IEventAcitivityProps } from './Entity/EventActivity'
import { Header, Segment } from 'semantic-ui-react'

export const EventActivity:FC<IEventAcitivityProps> = (props) => {
    return (
        <Fragment>
            <Header attached='top' content='Recent Activity'></Header>
            <Segment attached>
                <p>Recennt Activities</p>
            </Segment>
        </Fragment>
    )
}

export default EventActivity;