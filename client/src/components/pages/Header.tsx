import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from "@mui/material"
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Link to="/">
						<Typography variant="h6" component="div">
							Gametronics
						</Typography>
					</Link>
					<Container>
						<Link to="/cart">
							<Button color="inherit">
								<FontAwesomeIcon icon={faShoppingCart} />
								Cart
							</Button>
						</Link>
						<Link to="/login">
							<Button color="inherit">
								{" "}
								<FontAwesomeIcon icon={faUser} /> Login
							</Button>
						</Link>
					</Container>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Header
