import { useCallback, useState } from 'react';
import {
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from 'recharts';
import { createStyles, SegmentedControl, Title } from '@mantine/core';
import { STATUS, useJson } from '../../hooks/json';
import { useSiteContext } from '../../providers/SiteContext';
import endpoints from '../../utils/endpoints';
import getDateFormatOptions from '../../utils/getDateFormatOptions';
import LoadingDots from '../../common/LoadingDots';

const useStyles = createStyles((theme) => ({
    wrapper: {
        marginTop: theme.spacing.md,
        minHeight: 450,
    },

    title: {
        marginBottom: theme.spacing.xs,
    },

    segmentedControlWrapper: {
        display: 'flex',
        justifyContent: 'end',
    }
}));

const Chart = ({ coinId }) => {
    const { locale, currency, currencyFormatter } = useSiteContext();
    const [days, setDays] = useState('14');
    const transformData = useCallback((data) => {
        const options = getDateFormatOptions(days);
        
        return data?.prices?.map((price) => ({
            date: new Date(price[0]).toLocaleString(locale, options),
            price: price[1],
        }));
    }, [days, locale]);
    const { status, data } = useJson(endpoints.chart(coinId, currency, days), transformData);
    const { classes } = useStyles();
    
    return (
        <div className={classes.wrapper}>
            <Title order={4} className={classes.title}>
                Line Chart
            </Title>

            {status === STATUS.PENDING && <LoadingDots />}
            {status === STATUS.RESOLVED && data && (
                <>
                    <div className={classes.segmentedControlWrapper}>
                        <SegmentedControl
                            value={days}
                            onChange={setDays}
                            data={[
                                {label: '1d', value: '1'},
                                {label: '14d', value: '14'},
                                {label: '1m', value: '30'},
                                {label: '3m', value: '90'},
                                {label: '1y', value: '365'},
                                {label: 'max', value: 'max'},
                            ]}
                        />
                    </div>

                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={data} margin={{ top: 24, right: 24, left: 0, bottom: 16 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip formatter={(value) => currencyFormatter.format(value)} />
                            <Legend />
                            <Line dataKey="price" type="monotone" stroke="#8884d8" dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>
    );
};

export default Chart;