import { Title } from '@mantine/core';
import DataWrapper from '../../common/DataWrapper';
import Data from '../../common/Data';

const DeveloperData = ({
    forks,
    stars,
    subscribers,
    total_issues,
    closed_issues,
    pull_requests_merged,
    pull_request_contributors,
}) => (
    <div>
        <Title order={4}>Developer Data</Title>

        <DataWrapper>
            <Data caption="Forks" value={forks} />
            <Data caption="Stars" value={stars} />
            <Data caption="Subscribers" value={subscribers} />
            <Data caption="Total issues" value={total_issues} />
            <Data caption="Closed issues" value={closed_issues} />
            <Data caption="Pull requests merged" value={pull_requests_merged} />
            <Data caption="Pull request contributors" value={pull_request_contributors} />
        </DataWrapper>
    </div>
);

export default DeveloperData;