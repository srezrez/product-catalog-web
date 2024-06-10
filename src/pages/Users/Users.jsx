import { Box, Paper, Typography } from "@mui/material";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UsersTable from "../../components/Users/UsersTable";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../api/userApi";
import { useEffect, useState } from "react";

const Users = (props) => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await userApi.getAll();
            setUsers(data);
        }
        fetchData();
    });

    const handleClick = () => {
        navigate('/userForm');
    }

    return (
        <Box
            display="grid"
            alignItems={'center'}
            gap={4}
            p={2}
            component={Paper}>
            <Typography variant="h5" textAlign={'center'}>Пользователи</Typography>
            <Button onClick={handleClick} variant="outlined" size="small" startIcon={<AddIcon />} style={{ width: '25%' }}>Добавить пользователя</Button>
            {users.length > 0 && <UsersTable users={users} />}
        </Box>
    )
}

export default Users;