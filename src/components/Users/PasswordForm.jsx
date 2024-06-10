import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { userApi } from "../../api/userApi";

const PasswordForm = (props) => {

    const [changePassword, setChangePassword] = useState({
        userId: props.user.id,
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async () => {
        await userApi.change(changePassword)
    }

    const handleChangePassword = (event) => {
        setChangePassword({
            ...changePassword,
            password : event.target.value
        });
    }

    const handleChangeConfirmPassword = (event) => {
        setChangePassword({
            ...changePassword,
            confirmPassword : event.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 1, alignItems: 'center', width: '400px' }}>
                <TextField
                    required
                    label="Пароль"
                    value={changePassword.password}
                    variant="outlined"
                    type='password'
                    onChange={handleChangePassword}
                />
                <TextField
                    required
                    label="Подтверждение пароля"
                    value={changePassword.confirmPassword}
                    variant="outlined"
                    type='password'
                    onChange={handleChangeConfirmPassword}
                />
                <Button type="submit" variant="outlined" size="small" style={{ width: '100%' }}>Сохранить</Button>

            </Box>
        </form>
    )
}

export default PasswordForm;