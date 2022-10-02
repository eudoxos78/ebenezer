import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { SiteContextProvider } from './providers/SiteContext';
import App from './main/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SiteContextProvider locale="el" currency="usd">
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <App />
        </MantineProvider>
    </SiteContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
