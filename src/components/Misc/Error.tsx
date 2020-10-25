import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription, Flex } from '@chakra-ui/core';

const Error = () => {
    return (
        <Flex height="100vh" justifyContent="center" alignItems="center">
            <Alert
                status="error"
                variant="subtle"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                height="200px"
                width="60%"
            >
                <AlertIcon size="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                    Error
        </AlertTitle>
                <AlertDescription maxWidth="sm">
                    Something went wrong, please try again.
        </AlertDescription>
            </Alert>
        </Flex>
    )
}

export default Error
