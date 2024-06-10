import { Box, Paper, Typography } from "@mui/material";
import CategoriesTable from "../../components/Categories/CategoriesTable";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { categoryApi } from "../../api/categoryApi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Categories = (props) => {

    const [categories, setCategories] = useState([]);
    const role = useContext(UserContext);

    useEffect(() => {
        async function fetchData() {
            const data = await categoryApi.getAll();
            setCategories(data);
        }
        fetchData();
    });

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/categoryForm');
    }

    return (
        <Box
            display="grid"
            justifyContent={'center'}
            gap={4}
            p={2}
            component={Paper}>
            <Typography variant="h5" textAlign={'center'}>Категории</Typography>
            { role === 1 && <Button onClick={handleClick} type="button" variant="outlined" size="small" startIcon={<AddIcon />} style={{ width: '30%' }}>Добавить категорию</Button> }
            {categories.length > 0 && <CategoriesTable categories={categories}/>}
        </Box>
    )
}

export default Categories;