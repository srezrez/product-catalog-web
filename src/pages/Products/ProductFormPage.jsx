import Box from '@mui/material/Box';
import ProductForm from '../../components/Products/ProductForm';
import { useLocation } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';

const ProductFormPage = () => {

    const location = useLocation();

    return (
        <Box
        display="grid"
        justifyContent={'center'}
        gap={4}
        p={2}
        component={Paper}>
            {location.state?.product ? <Typography variant="h5" textAlign={'center'}>Изменение продукта</Typography>
            : <Typography variant="h5" textAlign={'center'}>Добавление продукта</Typography>}
            <ProductForm product={location.state?.product}/>
        </Box>
    )
}

export default ProductFormPage;