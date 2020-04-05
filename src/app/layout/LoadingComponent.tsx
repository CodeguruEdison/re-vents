import React, { FC } from 'react'
import { ILoadingProps } from './Entitty/LayoutEntity'
import { Dimmer, Loader } from 'semantic-ui-react';

export const LoadingComponent:FC<ILoadingProps> = (props) => {
    const {inverted}=props;
    return (
        <Dimmer inverted={inverted} active={true}>
            <Loader content='Loading...'></Loader>
        </Dimmer>
    )
}

export default LoadingComponent;