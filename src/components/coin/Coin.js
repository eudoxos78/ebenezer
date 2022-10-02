import { createStyles, ScrollArea, Stack } from '@mantine/core';
import { STATUS, useJson } from '../../hooks/json';
import endpoints from '../../utils/endpoints';
import LoadingDots from '../../common/LoadingDots';
import Description from './Description';
import MarketData from './MarketData';
import Reputation from './Reputation';
import DeveloperData from './DeveloperData';
import CommunityData from './CommunityData';
import Links from './Links';
import Chart from './Chart';

const useStyles = createStyles((theme) => ({
    scrollAreaWrapper: {
        height: `calc(100% - 50px)`,
    },

    scrollArea: {
        height: '100%',
    }
}));

const Coin = ({ coinId }) => {
    const { status, data } = useJson(endpoints.coin(coinId));
    const { classes } = useStyles();

    return (
        <div className={classes.scrollAreaWrapper}>
            <ScrollArea className={classes.scrollArea}>
                {status === STATUS.PENDING && <LoadingDots />}
                {status === STATUS.RESOLVED && data && (
                    <Stack>
                        <Description content={data.description?.['en']} />
                        {data.market_data && <MarketData {...data.market_data} />}
                        {(data.sentiment_votes_up_percentage || data.sentiment_votes_down_percentage) && (
                            <Reputation
                                up_votes_percentage={data.sentiment_votes_up_percentage}
                                down_votes_percentage={data.sentiment_votes_down_percentage}
                            />
                        )}
                        {data.developer_data && <DeveloperData {...data.developer_data} />}
                        {data.community_data && <CommunityData {...data.community_data} />}
                        {data.links && <Links {...data.links} />}
                    </Stack>
                )}

                <Chart coinId={coinId} />
            </ScrollArea>
        </div>
    );
};

export default Coin;