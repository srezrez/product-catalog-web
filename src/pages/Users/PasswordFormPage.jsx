import { useLocation } from "react-router-dom";
import PasswordForm from "../../components/Users/PasswordForm";
import { Box, Paper, Typography } from "@mui/material";

const PasswordFormPage = () => {

    const location = useLocation();

    return (
        <Box
        display="grid"
        justifyContent={'center'}
        gap={4}
        p={2}
        component={Paper}>
            <Typography variant="h5" textAlign={'center'}>Изменение пароля для: {location.state?.user.email}</Typography>
            <PasswordForm user={location.state?.user}/>
        </Box>
    )
}

export default PasswordFormPage;