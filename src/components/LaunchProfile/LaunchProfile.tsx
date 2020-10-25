import React from 'react'
import { LaunchProfileQuery } from '../../generated/graphql'
import { Button, SimpleGrid } from '@chakra-ui/core';
import BoxDetails from './BoxDetails';
import PhotoGallery from './PhotoGallery';
import { Link } from 'react-router-dom';

interface IProps {
    data: LaunchProfileQuery
}

const LaunchProfile: React.FC<IProps> = (props: IProps) => {
    const { data } = props;

    let photos: string[] = (props.data.launch?.links?.flickr_images ?? []) as Array<string>;
    let newPhotots: any = photos.map(i => ({
        width: 1,
        height: 1,
        src: i
    }));

    const getStatus = (launch_success: boolean | null | undefined) => {
        let status = "";
        switch (launch_success) {
            case true:
                status = "Success";
                break;
            case false:
                status = "Failure";
                break;
            default:
                status = "In Progress";
                break;
        }
        return status;
    }

    return (
        <div style={{ width: '80%' }}>
            <div style={{ marginBottom: '40px' }}>
                <BoxDetails heading="Details" details={data.launch?.details} />
            </div>

            <SimpleGrid columns={2} spacing={10} minChildWidth="400px">
                <BoxDetails heading="Mission Name" details={data.launch?.mission_name} />
                <BoxDetails heading="Launch Site" details={data.launch?.launch_site?.site_name} />
                <BoxDetails heading="Launch Year" details={data.launch?.launch_year} />
                <BoxDetails heading="Rocket Name" details={data.launch?.rocket?.rocket_name} />
            </SimpleGrid>

            <PhotoGallery photos={newPhotots} />
            <Link to="/launches">
                <Button variantColor="white" variant="outline" leftIcon="arrow-back">Go back</Button>
            </Link>
        </div>
    )
}

export default LaunchProfile
