export const CommonStyle = {
    select2: {
        control: (provided, state) => {
            return {
                ...provided,
                borderColor: '#E0E0E0',
                '&:hover': {
                    borderColor: '#25B986',
                    boxShadow: 'none',
                },
                borderRadius: '0.5rem',
            };
        },
        placeholder: (provided, state) => ({
            ...provided,
            color: '#506690'
        }),
        singleValue: provided => ({
            ...provided,
            position: 'relative',
            whiteSpace: 'pre-wrap',
            transform: 'none',
            color: '#212529',
        }),
        indicatorsContainer: provided => ({
            ...provided,
            alignItems: 'flex-start',
        }),
        indicatorSeparator: () => ({}),
        dropdownIndicator: provided => ({
            ...provided,
            color: '#66799e',
        }),
    },
};
