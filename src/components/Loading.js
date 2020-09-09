import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


const Loading = () => {
    return (
        <div className="absolute left-0 top-0 mx-auto my-auto">
            <CircularProgress />
        </div>
    )
}

export default Loading;