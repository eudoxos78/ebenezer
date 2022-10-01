import { Title } from '@mantine/core';
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
}) => (
    <div>
        <Title order={4}>Community Data</Title>

        <DataWrapper>
            <Data caption="Facebook likes" value={facebook_likes} />
            <Data caption="Twitter followers" value={twitter_followers} />
            <Data caption="Reddit subscribers" value={reddit_subscribers} />
            <Data caption="Reddit average posts (48h)" value={reddit_average_posts_48h} />
            <Data caption="Reddit average comments (48h)" value={reddit_average_comments_48h} />
            <Data caption="Reddit accounts active (48h)" value={reddit_accounts_active_48h} />
            <Data caption="Telegram channel users" value={telegram_channel_user_count} />
        </DataWrapper>
    </div>
);

export default CommunityData;