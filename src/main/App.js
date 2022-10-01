import { Container } from '@mantine/core';
import Header from './Header';
import Coins from '../components/coins/Coins';

const App = () => (
    <main>
        <Header />
        <Container>
            <Coins />
        </Container>
    </main>
);

export default App;
