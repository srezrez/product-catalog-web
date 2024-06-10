import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Button, Modal, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { productApi } from "../../api/productApi";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { exchangeApi } from "../../api/exchangeApi";
import { useContext, useState } from "react";
import { UserContext } from "../../App";

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };

const ProductsTable = (props) => {

    const [priceInDollars, setPriceInDollars] = useState();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const role = useContext(UserContext);

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        await productApi.delete(id);
    }

    const handleEdit = (product) => {
        navigate('/productForm', { state: { product } });
    }

    const handleExchangeClick = async (price) => {
        var data = await exchangeApi.convertToUSD(price);
        setPriceInDollars(data);
        setOpen(true);
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} arial-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Наименование</TableCell>
                            <TableCell align="right">Категория</TableCell>
                            <TableCell align="right">Описание</TableCell>
                            <TableCell align="right">Стоимость в рублях</TableCell>
                            <TableCell align="right">Примечание общее</TableCell>
                            {role !== '0' && <TableCell align="right">Примечание специальное</TableCell>}
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    {product.title}
                                </TableCell>
                                <TableCell align="right">{product.category.title}</TableCell>
                                <TableCell align="right">{product.description}</TableCell>
                                <TableCell align="right">{product.price}<CurrencyExchangeIcon fontSize="small" style={{ margin: '4', cursor: 'pointer'}} onClick={() => handleExchangeClick(product.price)} /></TableCell>
                                <TableCell align="right">{product.generalNote}</TableCell>
                                {role !== '0' && <TableCell align="right">{product.specialNote}</TableCell>}
                                <TableCell align="right">
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 1,
                                            justifyContent: 'center'
                                        }}>
                                        {role !== 2 && <Button variant="outlined" size="small" startIcon={<EditIcon />} onClick={() => handleEdit(product)}>Редактировать</Button>}
                                        {role == 1 && <Button variant="outlined" size="small" startIcon={<DeleteIcon />} onClick={() => handleDelete(product.id)}>Удалить</Button>}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Стоимость в долларах США
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2}}>
                        {priceInDollars}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default ProductsTable;