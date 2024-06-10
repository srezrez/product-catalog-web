import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { categoryApi } from "../../api/categoryApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

const CategoriesTable = (props) => {

    const role = useContext(UserContext);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        await categoryApi.delete(id);
    }

    const handleEdit = (category) => {
        navigate('/categoryForm', { state: { category } });
    }

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
            <Table sx={{ minWidth: 750 }} arial-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.categories.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell component="th" scope="row">
                                {category.title}
                            </TableCell>
                            <TableCell align="right" width={'40'}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        justifyContent: 'center'
                                    }}>
                                    {role === 1 &&
                                        <><Button variant="outlined" size="small" startIcon={<EditIcon />} onClick={() => handleEdit(category)}>Редактировать</Button>
                                            <Button variant="outlined" size="small" startIcon={<DeleteIcon />} onClick={() => handleDelete(category.id)}>Удалить</Button></>}
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CategoriesTable;