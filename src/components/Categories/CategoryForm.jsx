import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { categoryApi } from "../../api/categoryApi";

const CategoryForm = (props) => {

    const [title, setTitle] = useState(props?.category?.title || '');
    const handleSubmit = async () => {
        props.category ? await categoryApi.change(props.category.id, title)
        : await categoryApi.create(title);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: 1, alignItems: 'center', width:'400px' }}>
                <TextField
                    required
                    label="Категория"
                    value= {title}
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                />
                {props.category ? <Button type="submit" variant="outlined" size="small" style={{ width: '100%' }}>Сохранить</Button>
                : <Button type="submit" variant="outlined" size="small" style={{ width: '100%' }}>Добавить категорию</Button>}
                
            </Box>
        </form>
    )
}

export default CategoryForm;