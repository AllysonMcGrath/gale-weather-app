import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";


const label = { inputProps: { "aria-label": "Switch" } };

export default function ColorSwitches() {
    return (
        <div>
            <Switch {...label} defaultUnchecked />
        </div>
    );
}
