import { createStyles, Stack } from '@mantine/core';

const useStyles = createStyles((theme, { spacing, indent }) => ({
    stack: {
        marginTop: `${spacing}px`,
        marginLeft: `${indent}px`,
    },
}));

const DataWrapper = ({ spacing = 4, indent = 8, children }) => {
    const { classes } = useStyles({ spacing, indent });

    return (
        <Stack 
            spacing={spacing}
            className={classes.stack}
        >
            {children}
        </Stack>
    );
};

export default DataWrapper;