import { useState } from 'react';
import { createStyles, Button, Drawer, Group, ScrollArea, Table, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { STATUS, useJson } from '../../hooks/json';
import LoadingDots from '../../common/LoadingDots';
import Coin from '../coin/Coin';

const useStyles = createStyles((theme) => ({
    tableHeader: {
        backgroundColor: theme.white,
        position: 'sticky',
        top: 0,
        transition: 'box-shadow 150ms ease',
    },

    tableHeaderScrolled: {
        boxShadow: theme.shadows.sm,
    },

    scrollAreaWrapper: {
        border: `solid 1px ${theme.colors.gray[4]}`,
        borderRadius: theme.radius.md,
        height: `calc(100vh - 200px)`,
        marginTop: theme.spacing.xs,
        paddingTop: theme.radius.md / 2,
    },

    scrollArea: {
        height: '100%',
    },

    drawerTitle: {
        fontSize: theme.fontSizes.xl,
        fontWeight: theme.headings.fontWeight,
    },

    detailsButton: {
        position: 'initial',
    },

    paginationWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing.xs,
    }
}));

const Coins = () => {
    const [page, setPage] = useState(1);
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=${page}`;
    const [isTableScrolled, setIsTableScrolled] = useState(false);
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const [selectedCoinInfo, setSelectedCoinInfo] = useState(null);
    const { status, data } = useJson(url);
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 20,
    });
    const percentFormatter = new Intl.NumberFormat('en-US', {
        style: 'percent',
        maximumFractionDigits: 20,
    });
    const { classes, cx, theme } = useStyles();
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

    return (
        <section>
            <Title order={3}>Coins</Title>

            {status === STATUS.PENDING && <LoadingDots />}
            {status === STATUS.RESOLVED && data?.length > 0 && (
                <>
                    <div className={classes.scrollAreaWrapper}>
                        <ScrollArea className={classes.scrollArea} onScrollPositionChange={({ y }) => { setIsTableScrolled(y !== 0) }}>
                            <Table>
                                <thead className={cx(classes.tableHeader, { [classes.tableHeaderScrolled]: isTableScrolled })}>
                                    <tr>
                                        <th>Name</th>
                                        <th>Symbol</th>
                                        <th>Price</th>
                                        <th>MaxPrice</th>
                                        <th>MinPrice</th>
                                        <th>Price Diff Pct</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((coin) => (
                                            <tr key={coin.id}>
                                                <td>{coin.symbol}</td>
                                                <td>{coin.name}</td>
                                                <td>{currencyFormatter.format(coin.current_price)}</td>
                                                <td>{currencyFormatter.format(coin.high_24h)}</td>
                                                <td>{currencyFormatter.format(coin.low_24h)}</td>
                                                <td>{percentFormatter.format(coin.price_change_percentage_24h)}</td>
                                                <td>
                                                    <Button
                                                        variant="subtle"
                                                        className={classes.detailsButton}
                                                        onClick={() => {
                                                            setSelectedCoinInfo({
                                                                id: coin.id,
                                                                name: coin.name,
                                                            });
                                                            setIsDrawerOpened(true);
                                                        }}
                                                    >
                                                        Details
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </ScrollArea>
                    </div>

                    <div className={classes.paginationWrapper}>
                        <Group>
                            <Button
                                variant="subtle"
                                disabled={page === 1}
                                onClick={() => { setPage(page - 1) }}
                            >
                                Previous page
                            </Button>

                            <Button
                                variant="subtle"
                                onClick={() => { setPage(page + 1) }}
                            >
                                Next page
                            </Button>
                        </Group>
                    </div>

                    <Drawer
                        title={selectedCoinInfo?.name}
                        opened={isDrawerOpened}
                        onClose={() => {
                            setSelectedCoinInfo(null);
                            setIsDrawerOpened(false);
                        }}
                        position={matches ? 'right' : 'bottom'}
                        padding="xl"
                        size="xl"
                        classNames={{
                            title: classes.drawerTitle,
                        }}
                    >
                        {selectedCoinInfo && <Coin coinId={selectedCoinInfo.id} />}
                    </Drawer>
                </>
            )}
        </section>
    );
};

export default Coins;
