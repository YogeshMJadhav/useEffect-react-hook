import React, {useContext} from 'react';
import ComponentE from './componentE';

import { UserContext, ChannelContext } from '../App';

export default function ComponentC() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return(
        <div>
            {user} - {channel}
        </div>
    ) 
}
/** useContext in react hook */