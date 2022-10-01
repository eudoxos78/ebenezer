import { Title } from '@mantine/core';
import DataWrapper from '../../common/DataWrapper';
import Data from '../../common/Data';

const Reputation = ({
    up_votes_percentage,
    down_votes_percentage,
}) => {
    const percentFormatter = new Intl.NumberFormat('en-US', {
        style: 'percent',
        maximumFractionDigits: 20,
    });

    return (
        <div>
            <Title order={4}>Reputation</Title>

            <DataWrapper>
                <Data
                    caption="Up votes %"
                    value={up_votes_percentage}
                    formatter={percentFormatter} 
                />
                <Data
                    caption="Down votes %"
                    value={down_votes_percentage}
                    formatter={percentFormatter}
                />
            </DataWrapper>
        </div>
    );
};

export default Reputation;