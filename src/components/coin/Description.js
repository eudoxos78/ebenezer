import { useState } from 'react';
import { createStyles, Text, Title } from '@mantine/core';
import DataWrapper from '../../common/DataWrapper';

const useStyles = createStyles((theme) => ({
    text: {
        cursor: 'pointer',
    }
}));

const Description = ({ content }) => {
    const [lineClamp, setLineClamp] = useState(10);
    const { classes } = useStyles();

    return (
        <div>
            <Title order={4}>Description</Title>

            <DataWrapper>
                <Text
                    lineClamp={lineClamp} 
                    dangerouslySetInnerHTML={{ __html: content }}
                    className={classes.text}
                    onClick={() => { 
                        const lc = lineClamp ? null : 10;

                        setLineClamp(lc);
                    }}
                />
            </DataWrapper>
        </div>
    );
};

export default Description;