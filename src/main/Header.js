import { createStyles, Container, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    header: {
        borderBottom: `solid 1px ${theme.colors.gray[5]}`,
        marginBottom: theme.spacing.lg,
        padding: `${theme.spacing.md}px 0`,
    },
}));

const Header = () => {
    const { classes, theme } = useStyles();

    return (
        <header className={classes.header}>
            <Container>
                <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                    size="xl"
                    weight={theme.headings.fontWeight}
                >
                    Ebenezer
                </Text>
            </Container>
        </header>
    );
};

export default Header;