import { Box, Paper, Typography } from "@mui/material"
import LoginForm from "../../components/Login/LoginForm"

const Login = (props) => {
    return (
        <Box
        display="grid"
        alignItems={'center'}
        gap={4}
        p={2}
        component={Paper}>
            <Typography variant="h5" textAlign={'center'}>Войти в личный кабинет</Typography>
            <LoginForm setRole={props.setRole}/>
        </Box>
    )
}

export default Login;