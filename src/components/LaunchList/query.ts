import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches {
        flight_number
        launch_success
        launch_year
        mission_name
    }
  }
`;