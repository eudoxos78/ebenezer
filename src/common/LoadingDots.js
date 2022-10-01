import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        fontSize: theme.fontSizes.xl,
        letterSpacing: 6,
        margin: `${theme.spacing.xl}px 0`,
        textAlign: 'center',

        span: {
            animationDuration: '1.2s',
            animationFillMode: 'both',
            animationIterationCount: 'infinite',
            animationName: 'blink',
        },
        
        'span:nth-of-type(2)': {
            animationDelay: '0.2s',
        },
        
        'span:nth-of-type(3)': {
            animationDelay: '0.4s'
        },
        
        '@keyframes blink': {
            '0%': {
                opacity: '0.2',
            },

            '20%': {
                opacity: '1',
            },

            '100%': {
                opacity: '0.2',
            },
        },
    },
}));

const LoadingDots = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <span>&#9679;</span>
            <span>&#9679;</span>
            <span>&#9679;</span>
        </div>
    );
};

export default LoadingDots;