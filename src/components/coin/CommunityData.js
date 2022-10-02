import { Title } from '@mantine/core';
import { useSiteContext } from '../../providers/SiteContext';
import DataWrapper from '../../common/DataWrapper';
import Data from '../../common/Data';

const CommunityData = ({
    facebook_likes,
    twitter_followers,
    reddit_subscribers,
    reddit_average_posts_48h,
    reddit_average_comments_48h,
    reddit_accounts_active_48h,
    telegram_channel_user_count,
}) => {
    const { numberFormatter } = useSiteContext();

    return (
        <div>
            <Title order={4}>Community Data</Title>

            <DataWrapper>
                <Data 
                    caption="Facebook likes" 
                    value={facebook_likes} 
                    formatter={numberFormatter} 
                />
                <Data 
                    caption="Twitter followers" 
                    value={twitter_followers} 
                    formatter={numberFormatter} 
                />
                <Data 
                    caption="Reddit subscribers" 
                    value={reddit_subscribers} 
                    formatter={numberFormatter} 
                />
                <Data 
                    caption="Reddit average posts (48h)" 
                    value={reddit_average_posts_48h} 
                    formatter={numberFormatter} 
                />
                <Data 
                    caption="Reddit average comments (48h)" 
                    value={reddit_average_comments_48h} 
                    formatter={numberFormatter} 
                />
                <Data 
                    caption="Reddit accounts active (48h)" 
                    value={reddit_accounts_active_48h} 
                    formatter={numberFormatter} 
                />
                <Data 
                    caption="Telegram channel users" 
                    value={telegram_channel_user_count} 
                    formatter={numberFormatter} 
                />
            </DataWrapper>
        </div>
    );
};

export default CommunityData;