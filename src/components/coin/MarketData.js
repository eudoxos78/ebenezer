import { Title } from '@mantine/core';
import DataWrapper from '../../common/DataWrapper';
import Data from '../../common/Data';

const MarketData = ({
    current_price,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_14d_in_currency,
    price_change_percentage_30d_in_currency,
    price_change_percentage_60d_in_currency,
    price_change_percentage_200d_in_currency,
    price_change_percentage_1y_in_currency,
    high_24h,
    low_24h,
    ath,
    ath_date,
    atl,
    atl_date,
}) => {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 20,
    });
    const percentFormatter = new Intl.NumberFormat('en-US', {
        style: 'percent',
        maximumFractionDigits: 20,
    });

    return (
        <div>
            <Title order={4}>Market Data</Title>

            <DataWrapper>
                <Data
                    caption="Price" 
                    value={current_price?.['usd']} 
                    formatter={currencyFormatter} 
                />
                <Data
                    caption="Price change % (24h)"
                    value={price_change_percentage_24h_in_currency?.['usd']} 
                    formatter={percentFormatter}
                />
                <Data
                    caption="Price change % (7d)"
                    value={price_change_percentage_7d_in_currency?.['usd']} 
                    formatter={percentFormatter}
                />
                <Data
                    caption="Price change % (14d)"
                    value={price_change_percentage_14d_in_currency?.['usd']} 
                    formatter={percentFormatter}
                />
                <Data
                    caption="Price change % (30d)"
                    value={price_change_percentage_30d_in_currency?.['usd']} 
                    formatter={percentFormatter}
                />
                <Data
                    caption="Price change % (60d)"
                    value={price_change_percentage_60d_in_currency?.['usd']} 
                    formatter={percentFormatter}
                />
                <Data
                    caption="Price change % (200d)"
                    value={price_change_percentage_200d_in_currency?.['usd']} 
                    formatter={percentFormatter}
                />
                <Data
                    caption="Price change % (1y)"
                    value={price_change_percentage_1y_in_currency?.['usd']} 
                    formatter={percentFormatter}
                />
                <Data
                    caption="Highest price (24h)"
                    value={high_24h?.['usd']} 
                    formatter={currencyFormatter}
                />
                <Data
                    caption="Lowest price (24h)"
                    value={low_24h?.['usd']} 
                    formatter={currencyFormatter}
                />
                <Data
                    caption="All time high"
                    value={ath?.['usd']} 
                    formatter={currencyFormatter}
                />
                {ath_date?.['usd'] && (
                    <Data
                        caption="All time high (date)"
                        value={new Date(ath_date['usd']).toLocaleDateString('el')}
                    />
                )}
                <Data
                    caption="All time low"
                    value={atl?.['usd']} 
                    formatter={currencyFormatter}
                />
                {atl_date?.['usd'] && (
                    <Data
                        caption="All time low (date)"
                        value={new Date(atl_date['usd']).toLocaleDateString('el')}
                    />
                )}
            </DataWrapper>
        </div>
    );
};

export default MarketData;