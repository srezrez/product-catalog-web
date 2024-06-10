import { useLocation } from "react-router-dom";
import CategoryForm from "../../components/Categories/CategoryForm";
import Box from '@mui/material/Box';
import { Paper, Typography } from "@mui/material";

const CategoryFormPage = () => {

    const location = useLocation();

    return (
        <Box
        display="grid"
        justifyContent={'center'}
        gap={4}
        p={2}
        component={Paper}>
            {location.state?.category ? <Typography variant="h5" textAlign={'center'}>Изменение категории</Typography>
            : <Typography variant="h5" textAlign={'center'}>Добавление категории</Typography>}
            <CategoryForm category={location.state?.category}/>
        </Box>
    )
}

export default CategoryFormPage;