import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSolo() {
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={Cities.map((option) => option.city)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search City"
                        InputProps={{
                            ...params.InputProps,
                            type: "search",
                        }}
                    />
                )}
            />
        </Stack>
    );
}

const Cities = [
    { city: "houston"},
    { city: "austin" },
    { city: "london" },
    { city: "dallas" },
];
