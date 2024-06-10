import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = (props) => {

    const role = useContext(UserContext);

    const handleLogout = () => {
        localStorage.clear();
        props.setRole(undefined);
    }

    return (
        <Box sx={{ display: 'flex'}}>
            <AppBar position="static">
                <Toolbar sx={{gap: 4, justifyContent: 'end'}}>
                    {role!== null && role!== undefined  &&
                        <NavLink to={'/products'} style={{ textDecoration: 'none', color: 'white'}}>
                            <Typography variant="h6" component="div" >
                                Продукты
                            </Typography>
                        </NavLink>
                    }

                    {role!== null && role!== undefined &&
                        <NavLink to={'/categories'} style={{ textDecoration: 'none', color: 'white' }}>
                            <Typography variant="h6" component="div" >
                                Категории
                            </Typography>
                        </NavLink>
                    }

                    {role == 2 &&
                        <NavLink to={'/users'} style={{ textDecoration: 'none', color: 'white' }}>
                            <Typography variant="h6" component="div" >
                                Пользователи
                            </Typography>
                        </NavLink>
                    }

                    {role !== null && role !== undefined ?
                        <NavLink to={'/login'} onClick={handleLogout} style={{ textDecoration: 'none', color: 'white'}}>
                            <Typography variant="h6" component="div" >
                                Выйти
                            </Typography>
                        </NavLink> :
                        <NavLink to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
                            <Typography variant="h6" component="div" >
                                Страница входа
                            </Typography>
                        </NavLink>}
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header;