import React from 'react'
import { SimpleGrid } from '@chakra-ui/core';
import { LaunchListQuery } from '../../generated/graphql';
import LaunchListItem from './LaunchListItem';

interface IProps {
  data: LaunchListQuery;
}

const LaunchList: React.FC<IProps> = (props: IProps) => {
  return (
    <SimpleGrid m="40px" minChildWidth="250px" columns={3} spacing={10} justifyContent="center" alignItems="center">
      {
        props.data.launches?.map(i =>
          <LaunchListItem
            key={i?.flight_number}
            year={i?.launch_year}
            success={i?.launch_success}
            missionName={i?.mission_name}
            flightNumber={i?.flight_number}
          />
        )
      }
    </SimpleGrid>
  )
}

export default LaunchList
