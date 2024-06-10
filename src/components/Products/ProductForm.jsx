import { Box, Button, CircularProgress, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { productApi } from "../../api/productApi";
import { categoryApi } from "../../api/categoryApi";

const ProductForm = (props) => {

    const [product, setProduct] = useState(props?.product || {
        id: 0,
        title: '',
        description: '',
        price: 0,
        generalNote: '',
        specialNote: '',
        category : { id: 0, title: ''},
        categoryId : 0
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const categoriesData = await categoryApi.getAll();
            setCategories(categoriesData);
        }
        fetchData();
    });

    const handleChangeTitle = (event) => {
        setProduct({
            ...product,
            title: event.target.value
        })
    }

    const handleCategoryChange = (event) => {
        setProduct({
            ...product,
            categoryId: event.target.value
        })
    }

    const handleChangeDescription = (event) => {
        setProduct({
            ...product,
            description: event.target.value
        })
    }

    const handleChangePrice = (event) => {
        setProduct({
            ...product,
            price: event.target.value
        })
    }

    const handleChangeGeneralNote = (event) => {
        setProduct({
            ...product,
            generalNote: event.target.value
        })
    }

    const handleChangeSpecialNote = (event) => {
        setProduct({
            ...product,
            specialNote: event.target.value
        })
    }

    const handleSubmit = async () => {
        props.product ? await productApi.change(product)
            : await productApi.create(product);
    }

    if (categories.length == 0) {
        return <Box sx={{ display: 'grid', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(7, 1fr)', gap: 2, alignItems: 'center', width: '400px' }}>
                <TextField
                    required
                    label="Название"
                    variant="outlined"
                    value={product.title}
                    onChange={handleChangeTitle}
                />
                <Select
                    id="outlined-select-currency"
                    select
                    label="Категория"
                    value={product.categoryId}
                    onChange={handleCategoryChange}>
                    {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                            {category.title}
                        </MenuItem>
                    ))}
                </Select>
                <TextField
                    required
                    label="Описание"
                    variant="outlined"
                    value={product.description}
                    onChange={handleChangeDescription}
                />
                <TextField
                    required
                    label="Стоимость"
                    variant="outlined"
                    value={product.price}
                    onChange={handleChangePrice}
                />
                <TextField
                    required
                    label="Примечание общее"
                    variant="outlined"
                    value={product.generalNote}
                    onChange={handleChangeGeneralNote}
                />
                <TextField
                    required
                    label="Примечание специальное"
                    variant="outlined"
                    value={product.specialNote}
                    onChange={handleChangeSpecialNote}
                />
                {props.product ? <Button type="submit" variant="outlined" size="small" style={{ width: '100%' }}>Сохранить</Button>
                : <Button type="submit" variant="outlined" size="small" style={{ width: '100%' }}>Добавить продукт</Button>}
            </Box>
        </form>
    )
}

export default ProductForm;