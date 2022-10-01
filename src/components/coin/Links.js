import { Title } from '@mantine/core';
import DataWrapper from '../../common/DataWrapper';
import LinkData from '../../common/LinkData';

const Links = ({
    homepage,
    blockchain_site,
    announcement_url,
    official_forum_url,
    chat_url,
    facebook_username,
    twitter_screen_name,
    subreddit_url,
}) => (
    <div>
        <Title order={4}>Links</Title>

        <DataWrapper>
            <LinkData caption="Homepage" links={homepage} />
            <LinkData caption="Blockchain" links={blockchain_site} />
            <LinkData caption="Announcements" links={announcement_url} />
            <LinkData caption="Official forum" links={official_forum_url} />
            <LinkData caption="Chat" links={chat_url} />
            {facebook_username && (
                <LinkData caption="Facebook" links={[`https://www.facebook.com/${facebook_username}`]} />
            )}
            {twitter_screen_name && (
                <LinkData caption="Twitter" links={[`https://twitter.com/${twitter_screen_name}`]} />
            )}
            <LinkData caption="Reddit" links={[subreddit_url]} />
        </DataWrapper>
    </div>
);

export default Links;