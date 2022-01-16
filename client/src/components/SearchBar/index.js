// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// export default function BasicTextFields() {
//     return (
//         <Box
//             component="form"
//             sx={{
//                 "& > :not(style)": { m: 1, width: "25ch" },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             {/* <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 variant="outlined"
//             />
//             <TextField id="filled-basic" label="Filled" variant="filled" /> */}
//             <TextField
//                 id="standard-basic"
//                 label="Search here"
//                 variant="standard"
//             />
//         </Box>
//     );
// }

import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSolo() {
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            {/* <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={Cities.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField {...params} label="Search City" />
                )}
            /> */}
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
