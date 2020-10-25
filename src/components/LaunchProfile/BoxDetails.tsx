import React from 'react'
import { Box, Flex, Text, Divider } from '@chakra-ui/core'

interface IProps {
    heading: String,
    details: any
}

const BoxDetails: React.FC<IProps> = (props: IProps) => {
    return (
        <Box  shadow="md" borderWidth="1px" rounded="lg" overflow="hidden">
            <Flex align="baseline" m={2} justify="center">
                <Text>{props.heading}</Text>
            </Flex>
            <Divider orientation="horizontal" />

            <Flex minHeight="100px" align="center" justify="center">
                <Text m={2} fontSize="2xl" fontWeight="semibold" lineHeight="long" textAlign="center" pt="10px" pb="10px">
                    {props.details}
                </Text>
            </Flex>
        </Box>
    )
}

export default BoxDetails
