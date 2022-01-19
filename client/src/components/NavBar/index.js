import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="span"
                        sx={{ display: { xs: "flex", sm: "block" } }}
                    >
                        <Link href="/" underline="none" color="white"> 🌬 GALE </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                        <Button color="inherit" href="signin">
                            Login
                        </Button>
                        <Button color="inherit" href="dashboard">
                            Dashboard
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
