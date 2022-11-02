import { Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer style={{ backgroundColor: "red", color: "white" }}>
			<Grid2 container>
				<Container className="foot-container">
					<Link to="/about">
						<Typography>About Us</Typography>
					</Link>
					<Link to="/contact">
						<Typography>Contact Us</Typography>
					</Link>
					Copyright &copy; Gametronics Inc.
				</Container>
			</Grid2>
		</footer>
	)
}

export default Footer
