import React from 'react'
import { Box, Icon, Flex, Badge, Text, Divider } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

interface IProps {
    missionName: string | null | undefined,
    success: boolean | null | undefined,
    year: number | null | undefined,
    flightNumber: number | null | undefined,
}

const LaunchListItem: React.FC<IProps> = (props: IProps) => {
    return (
        <Link to={`/launches/${props.flightNumber}`}>
            <Box maxW="sm" shadow="md" borderWidth="1px" rounded="lg" overflow="hidden">
                <Flex align="baseline" m={2}>
                    {props.success && <Badge variantColor="green">Success</Badge>}
                    {props.success === false && <Badge variantColor="red">Failure</Badge>}
                    {props.success === null && <Badge variantColor="yellow">In Progress</Badge>}
                </Flex>

                <Flex minHeight="150px" align="center" justify="center">
                    <Text m={2} fontSize="2xl" fontWeight="semibold" lineHeight="long" textAlign="center" pt="10px" pb="10px">
                        {props.missionName}
                    </Text>
                </Flex>
                <Divider orientation="horizontal" />

                <Flex m={2} align="center">
                    <Icon name="calendar" color="black.400" />
                    <Text m={1} fontSize="sm"><b>Launch Year: </b> {props.year}</Text>
                </Flex>
            </Box>
        </Link>
    )
}

export default LaunchListItem
