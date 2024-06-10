import { Box, Button, MenuItem, TextField } from "@mui/material";
import { authApi } from "../../api/authApi";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = await authApi.login(email, password);
        if('accessToken' in data) {
            localStorage.setItem('accessToken', data['accessToken']);
            localStorage.setItem('userRole', data['role']);
            props.setRole(data['role']);
            navigate('/products');
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: 2, alignItems: 'center', width:'400px' }}>
                <TextField
                    required
                    label="Email"
                    variant="outlined"
                    onChange={handleEmailChange}
                />
                <TextField
                    required
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    onChange={handlePasswordChange}
                />
                <Button type="submit" variant="outlined" size="small" style={{ width: '100%' }}>Войти</Button>
            </Box>
        </form>
    )
}

export default LoginForm;