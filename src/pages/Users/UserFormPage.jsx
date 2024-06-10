import Box from '@mui/material/Box';
import UserForm from '../../components/Users/UserForm';
import { Paper, Typography } from '@mui/material';

const UserFormPage = () => {
    return (
        <Box
        display="grid"
        justifyContent={'center'}
        gap={4}
        p={2}
        component={Paper}>
            <Typography variant="h5" textAlign={'center'}>Добавление пользователя</Typography>
            <UserForm />
        </Box>
    )
}

export default UserFormPage;