import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const FilterPanel = (props) => {
    const [search, setSearch] = useState({
        title: '',
        categoryId: 0
    });

    const navigate = useNavigate();

    const role = useContext(UserContext);

    const handleSubmit = () => {
        sessionStorage.setItem('title', search.title);
        sessionStorage.setItem('categoryId', search.categoryId);
    }

    const handleChangeSelect = (event) => {
        setSearch({
            ...search,
            categoryId: Number(event.target.value)
        });
        handleSubmit();
    }

    const handleTextInputChange = (event) => {
        setSearch({
            ...search,
            title: event.target.value
        });
    }

    const handleAddProduct = () => {
        navigate('/productForm');
    }

    return (
        <Box
            sx={{
                width: 1000,
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: 1
            }}
        >
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 1
                    }}
                >
                    <TextField size="small" fullWidth label="Название продукта" id="fullWidth" onChange={handleTextInputChange} value={search.title} style={{ width: '300px' }} />

                    <FormControl sx={{ minWidth: 120 }} size="small">
                        <InputLabel id="select-category-label">Категория</InputLabel>
                        <Select
                            value={search.categoryId}
                            onChange={handleChangeSelect}
                            labelId="select-category-label"
                            label="Категория"
                        >
                            <MenuItem value={0}>
                                <em>Все</em>
                            </MenuItem>
                            {props.categories.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="outlined" size="small" startIcon={<SearchIcon />} style={{ width: '25%' }}>Поиск</Button>
                </Box>
            </form>
            {role !== 2 && <Button onClick={handleAddProduct} variant="outlined" size="small" startIcon={<AddIcon />} style={{ width: '20%' }}>Добавить продукт</Button>}
        </Box>
    )
}

export default FilterPanel;