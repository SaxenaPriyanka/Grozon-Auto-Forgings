import {AppBar, Toolbar, Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <AppBar>
            <Toolbar>
                {/*Company name and logo*/}
                <img src="/logo.jpg" alt="Logo" className="h-20 w-auto" />
                <Typography variant="h5" sx={{ flexGrow: 1}}>
                    Grozon Auto Forgings
                </Typography>

                {/*Navigation buttons*/}
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    About Us
                </Button>
                <Button color="inherit" component={Link} to="/services">
                    Products
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;