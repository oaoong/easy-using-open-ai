import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';

import './style.scss';

const filter = createFilterOptions<string>();

interface ISelectorProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    postfix?: string;
    valueExample: readonly string[];
}

export default function Selector({
    value,
    setValue,
    postfix,
    valueExample,
}: ISelectorProps) {
    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                if (newValue) {
                    setValue(newValue);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                const isExisting = options.some(
                    (option) => inputValue === option,
                );
                if (inputValue !== '' && !isExisting) {
                    filtered.push(inputValue);
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id={postfix}
            options={valueExample}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option) {
                    return option;
                }
                // Regular option
                return option;
            }}
            renderOption={(props, option) => <li {...props}>{option}</li>}
            freeSolo
            renderInput={(params) => <TextField {...params} label={postfix} />}
        />
    );
}
