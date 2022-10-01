import { Title } from '@mantine/core';

const Data = ({ caption, value, formatter }) => (Boolean(value) && (
    <div>
        <Title order={5}>{caption}:</Title>
        {formatter ? formatter.format(value) : value}
    </div>
));

export default Data;