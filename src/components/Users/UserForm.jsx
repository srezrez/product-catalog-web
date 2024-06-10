import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { userApi } from "../../api/userApi";

const roles = ['User', 'AdvancedUser', 'Admin']

const UserForm = (props) => {

    const [user, setUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        role: roles[0],
        password: '',
        confirmPassword: ''
    });

    const handleChangeEmail = (event) => {
        setUser({
            ...user,
            email : event.target.value
        });
    }

    const handleChangeFirstName = (event) => {
        setUser({
            ...user,
            firstName : event.target.value
        });
    }

    const handleChangeLastName = (event) => {
        setUser({
            ...user,
            lastName : event.target.value
        });
    }

    const handleChangeRole = (event) => {
        setUser({
            ...user,
            role : event.target.value
        });
    }

    const handleChangePassword = (event) => {
        setUser({
            ...user,
            password : event.target.value
        });
    }

    const handleChangeConfirmPassword = (event) => {
        setUser({
            ...user,
            confirmPassword : event.target.value
        });
    }

    const handleSubmit = async () => {
        await userApi.create(user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(7, 1fr)', gap: 2, alignItems: 'center', width: '400px' }}>
                <TextField
                    required
                    label="Email"
                    variant="outlined"
                    value={user.email}
                    onChange={handleChangeEmail}
                />
                <TextField
                    required
                    label="Имя"
                    variant="outlined"
                    value={user.firstName}
                    onChange={handleChangeFirstName}
                />
                <TextField
                    required
                    label="Фамилия"
                    variant="outlined"
                    value={user.lastName}
                    onChange={handleChangeLastName}
                />
                <Select
                    id="outlined-select-currency"
                    label="Роль"
                    value={user.role}
                    onChange={handleChangeRole}>
                    {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                            {role}
                        </MenuItem>
                    ))}
                </Select>
                <TextField
                    required
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    value={user.password}
                    onChange={handleChangePassword}
                />
                <TextField
                    required
                    label="Подтверждение пароля"
                    variant="outlined"
                    type="password"
                    value={user.confirmPassword}
                    onChange={handleChangeConfirmPassword}
                />
                <Button type="submit" variant="outlined" size="small" style={{ width: '100%' }}>Добавить пользователя</Button>
            </Box>
        </form>
    )
}

export default UserForm;