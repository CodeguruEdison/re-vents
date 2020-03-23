import React, { FC } from 'react'
import { IBasicPageFromProp } from './Entity/SettingsEntity'

export const BasicPage:FC<IBasicPageFromProp> = (prop) => {
    return (
        <div>
            <h1>Basic Page</h1>
        </div>
    )
}
export default BasicPage;
