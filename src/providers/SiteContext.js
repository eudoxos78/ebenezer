import { createContext, useContext } from 'react';

const SiteContext = createContext(null);

const SiteContextProvider = ({ locale, currency, children }) => {
    const currencyFormatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        maximumFractionDigits: 20,
    });
    const percentFormatter = new Intl.NumberFormat(locale, {
        style: 'percent',
        maximumFractionDigits: 20,
    });
    const numberFormatter = new Intl.NumberFormat(locale, {
        style: 'decimal',
        maximumFractionDigits: 20,
    });

    return (
        <SiteContext.Provider
          value={{
            locale,
            currency,
            currencyFormatter,
            percentFormatter,
            numberFormatter,
          }}
        >
            {children}
        </SiteContext.Provider>
    );
};

const useSiteContext = () => {
    const context = useContext(SiteContext);
  
    if (!context) {
        throw new Error('Missing SiteContext provider!');
    }

    return context;
};

export { SiteContextProvider, useSiteContext };