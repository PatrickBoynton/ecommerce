import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material"
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
    return  <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: "red"}}>
            <Container>
                <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Ecom
                    </Typography>
                    <Button color="inherit"><FontAwesomeIcon icon={faShoppingCart} style={{padding: '20px'}} />Cart</Button>
                    <Button color="inherit"> <FontAwesomeIcon icon={faUser} style={{padding: '20px'}}/> Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
}

export default Header
