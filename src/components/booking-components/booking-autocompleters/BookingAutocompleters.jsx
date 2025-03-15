import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from '../../../services/countries-service/CountriesService';

function CountrySelect({ label, value, onChange }) {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            value={value}  // Asignamos el valor recibido como propiedad
            onChange={(event, newValue) => {
                onChange(newValue);  // Llamamos a la función onChange para actualizar el estado
            }}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                        key={key}
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                    >
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label} ({option.code})
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    slotProps={{
                        htmlInput: {
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        },
                    }}
                />
            )}
        />
    );
}

export default CountrySelect;