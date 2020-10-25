import React from 'react'
import { CircularProgress } from '@chakra-ui/core';

const Loader = () => {
    return (
        <div className="parent">
            <CircularProgress isIndeterminate color="black" />
        </div>
    )
}

export default Loader
