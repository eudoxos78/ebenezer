const getDateFormatOptions = (days) => {
    if (days === '1') {
        return { hour: 'numeric', minute: 'numeric', hour12: false };
    }

    if (days === '14' || days === '30' || days === '90' || days === '365') {
        return { day: 'numeric', month: 'numeric' };
    }

    return { day: 'numeric', month: 'numeric', year: '2-digit' };
};

export default getDateFormatOptions;