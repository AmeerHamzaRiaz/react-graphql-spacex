import { Heading } from '@chakra-ui/core';
import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import Error from '../Misc/Error';
import Loader from '../Misc/Loader';
import LaunchList from './LaunchList';

interface IProps {
}

const LaunchListContainer: React.FC<IProps> = (props: IProps) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <Loader />
  }

  if (error || !data) {
    return <Error />
  }

  return (
    <div>
      <Heading textAlign="center" mt="10px">Launches</Heading>
      <LaunchList data={data} />
    </div>
  );
};

export default LaunchListContainer;