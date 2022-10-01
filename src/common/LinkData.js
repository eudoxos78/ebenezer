import { createStyles, Anchor, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
}));

const LinkData = ({ caption, links }) => {
    const { classes } = useStyles();
    const filteredLinks = links?.filter((link) => link);

    if (!filteredLinks?.length) {
        return null;
    }
    
    return (
        <div>
            <Title order={5}>{caption}:</Title>

            <ul className={classes.list}>
                {filteredLinks.map((link) => (
                    <li key={link}>
                        <Anchor href={link} target="_blank">
                            {link}
                        </Anchor>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LinkData;