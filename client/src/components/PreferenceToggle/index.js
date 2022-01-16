import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// THE FORM GROUP SHOULD BE IN THE CONTAINER, AND FORMCONTROLLABEL SHOULD BE THE PREFERENCETOGGLE COMPONENT ITSELF

export default function FormControlLabelPosition() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <FormGroup aria-label="position" >
                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Temperature"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Humidity"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Visibilty"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Wind Speed"
                    labelPlacement="start"
                />
            </FormGroup>
        </FormControl>
    );
}
