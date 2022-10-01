import { useState } from 'react';
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

const getToLocaleStringOptions = (days) => {
    if (days === '1') {
        return { hour: 'numeric', minute: 'numeric', hour12: false };
    }

    if (days === '14' || days === '30' || days === '90' || days === '365') {
        return { day: 'numeric', month: 'numeric' };
    }

    return { day: 'numeric', month: 'numeric', year: '2-digit' };
};

const Chart = ({ coinId }) => {
    const [days, setDays] = useState('14');
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
    const { status, data } = useJson(url);
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 20,
    });
    const { classes } = useStyles();
    let prices;

    if (status === STATUS.RESOLVED) {
        const options = getToLocaleStringOptions(days);
        
        prices = data.prices.map((price) => ({
            date: new Date(price[0]).toLocaleString('el', options),
            price: price[1],
        }));
    }

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
                        <LineChart data={prices} margin={{ top: 24, right: 24, left: 0, bottom: 16 }}>
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