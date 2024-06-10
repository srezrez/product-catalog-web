import { Box, Paper, Typography } from "@mui/material";
import ProductsTable from "../../components/Products/ProductsTable";
import FilterPanel from "../../components/Products/FilterPanel";
import { productApi } from "../../api/productApi";
import { useEffect, useRef, useState } from "react";
import { categoryApi } from "../../api/categoryApi";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        const data = await productApi.getAll(sessionStorage.getItem('title'), sessionStorage.getItem('categoryId'));
        setProducts(data);
        const categoriesData = await categoryApi.getAll();
        setCategories(categoriesData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box
            display="grid"
            alignItems="center"
            gap={4}
            p={2}
            component={Paper}>
            <Typography variant="h5" textAlign={'center'}>Продукты</Typography>
            {categories.length > 0 && 
            <FilterPanel categories={categories} />}
            {products.length > 0 && <ProductsTable products={products} />}
        </Box>
    )
}

export default Products;