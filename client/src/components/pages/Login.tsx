import { Button, Grid, TextField, Typography } from "@mui/material"

const Login = () => {
    return <Grid container>
        <form action="" autoComplete="off" style={{display: "flex",
                                                   flexDirection: "column",
                                                   alignItems: "center",
                                                   justifyContent:"center",
                                                   margin: "0 auto"}}>
            <Typography variant="h1" sx={{backgroundColor: "red", color: "white"}}>Login</Typography>
            <TextField label="email" type="email" sx={{margin: "20px 0", border: "2px solid red", color: "red"}}/>
            <TextField label="password" type="password" sx={{marginBottom: "20px", border: "2px solid red"}}/>
            <Button sx={{backgroundColor: "red", color: "white", width: "100%"}}>Login</Button>
        </form>
    </Grid>
}

export default Login
