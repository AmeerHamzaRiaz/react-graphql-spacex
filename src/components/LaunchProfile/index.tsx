import React, { useEffect } from 'react'
import { useLaunchProfileQuery } from '../../generated/graphql'
import LaunchProfile from './LaunchProfile'
import Error from '../Misc/Error';
import Loader from '../Misc/Loader';
import { Flex, Heading } from '@chakra-ui/core';
import { useParams } from 'react-router-dom';

interface IProps {
    id: Number
}

const LaunchProfileContainer: React.FC<IProps> = (props: IProps) => {
    let { id } = useParams();

    const { data, error, loading, refetch } = useLaunchProfileQuery({
        variables: { id: String(id) },
    });
    useEffect(() => {
        refetch();
    }, [id]);

    if (loading) {
        return <Loader />
    }

    if (error || !data) {
        return <Error />
    }

    return (
        <>
            <Heading textAlign="center" mt="10px" mb="20px">Launch Details</Heading>
            <Flex justifyContent="center" alignItems="center">
                <LaunchProfile data={data} />
            </Flex>
        </>
    )
}

export default LaunchProfileContainer
