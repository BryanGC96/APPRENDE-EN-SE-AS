import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';

const courseOptions = ['Saludos', 'Números', 'Colores', 'Animales'];
const pages = ['Home', 'Courses', 'Log In', 'Sign Up'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCourses, setAnchorElCourses] = React.useState(null); // State for nested menu

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenCoursesMenu = (event) => {
    setAnchorElCourses(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseCourseMenu = () => {
    setAnchorElCourses(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1C1D21'}}>
      <Container maxWidth="x1"> {/* Distancia entre el texto y logo del Navbar */}
        <Toolbar disableGutters>
          <SignLanguageIcon sx={{ display: { xs: 'none', md: 'flex' },fontSize: '3rem', mr: 1 }} /> {/**Icon cuando pantalla completa */}
          <Typography
            variant="h6"
            noWrap
            // component="a" // Lo hace un link..
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex', fontSize:'1.60rem' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            App-rende En-señas {/**Titulo cuando pantalla completa */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', mr: 5 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
  id="menu-appbar"
  anchorEl={anchorElNav}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  open={Boolean(anchorElNav)}
  onClose={handleCloseNavMenu}
  sx={{
    display: { xs: 'block', md: 'none' },
  }}
>
  {pages.map((page) => (
    <div key={page}>
      {page === 'Courses' ? (
        <div>
          <MenuItem
            onMouseEnter={handleOpenCoursesMenu}
            onMouseLeave={handleCloseCourseMenu}
            onClick={handleCloseNavMenu}
          >
            <Typography textAlign="center">{page}</Typography>
            {/** Navbar version mobile */}
            <Menu
              anchorEl={anchorElCourses}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCourses)}
              onClose={handleCloseCourseMenu}
            >
              {courseOptions.map((option) => (
                <MenuItem key={option} onClick={handleCloseCourseMenu}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </MenuItem>
        </div>
      ) : (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      )}
    </div>
  ))}
</Menu>
          </Box>
          <SignLanguageIcon sx={{ display: { xs: 'flex', md: 'none' },fontSize: '3rem', mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            // component="a" // Lo hace un link..
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            App-rende En-señas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}> {/**Box Encargada de el texto de 'pages' */}
            {pages.map((page) => (
              <div key={page}>
                {page === 'Courses' ? (
                  <Button
                    onClick={handleOpenCoursesMenu}
                    sx={{ my: 4, mr: 4, color: '#F8F1FF', display: 'block' }}
                  >
                    {page}
                  </Button>
                ) : (
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 4, mr: 4, color: '#F8F1FF', display: 'block' }}
                  >
                    {page}
                  </Button>
                )}
                {page === 'Courses' && (
                  <Menu
                    anchorEl={anchorElCourses}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElCourses)}
                    onClose={handleCloseCourseMenu}
                  >
                    {courseOptions.map((option) => (
                      <MenuItem key={option} onClick={handleCloseCourseMenu}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <Box>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton> {/** Es la parte de el logo de la derecha! */}
                </Box>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;