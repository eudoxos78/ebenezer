import { Title } from '@mantine/core';
import { useSiteContext } from '../../providers/SiteContext';
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
}) => {
    const { numberFormatter } = useSiteContext();

    return (
        <div>
            <Title order={4}>Developer Data</Title>

            <DataWrapper>
                <Data 
                    caption="Forks" 
                    value={forks} 
                    formatter={numberFormatter}
                />
                <Data
                     caption="Stars" 
                     value={stars} 
                     formatter={numberFormatter}
                />
                <Data
                     caption="Subscribers" 
                     value={subscribers} 
                     formatter={numberFormatter}
                />
                <Data
                     caption="Total issues" 
                     value={total_issues} 
                     formatter={numberFormatter}
                />
                <Data
                     caption="Closed issues" 
                     value={closed_issues} 
                     formatter={numberFormatter}
                />
                <Data
                     caption="Pull requests merged" 
                     value={pull_requests_merged} 
                     formatter={numberFormatter}
                />
                <Data
                     caption="Pull request contributors" 
                     value={pull_request_contributors} 
                     formatter={numberFormatter} 
                />
            </DataWrapper>
        </div>
    );
};

export default DeveloperData;