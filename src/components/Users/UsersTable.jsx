import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import Box from '@mui/material/Box';
import { userApi } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const UsersTable = (props) => {

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        await userApi.delete(id);
    }

    const handleBlock = async (id) => {
        await userApi.changeStatus(id);
    }

    const handleChangePassword = (user) => {
        navigate('/passwordForm', {state: {user}});
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} arial-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Имя</TableCell>
                        <TableCell align="right">Фамилия</TableCell>
                        <TableCell align="right">Роль</TableCell>
                        <TableCell align="right">Статус</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell component="th" scope="row">
                                {user.email}
                            </TableCell>
                            <TableCell align="right">{user.firstName}</TableCell>
                            <TableCell align="right">{user.lastName}</TableCell>
                            <TableCell align="right">{user.role}</TableCell>
                            <TableCell align="right">{user.status}</TableCell>
                            <TableCell align="right">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        justifyContent: 'center'
                                    }}>
                                    <Button variant="outlined" size="small" startIcon={<EditIcon />} onClick={() => handleChangePassword(user)}>Изменить пароль</Button>
                                    <Button variant="outlined" size="small" startIcon={<BlockIcon />} onClick={() => handleBlock(user.id)}>{user.status === 'Active' ? 'Заблокировать' : 'Разблокировать'}</Button>
                                    <Button variant="outlined" size="small" startIcon={<DeleteIcon />} onClick={() => handleDelete(user.id)}>Удалить</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UsersTable;