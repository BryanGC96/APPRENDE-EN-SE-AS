import * as React from "react";
import { useNavigate } from "react-router-dom"; // Permite las conexiones entre componentes.
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";

const courseOptions = ["Todos", "Saludos", "Números", "Colores", "Animales"];
const pages = [
  "Inicio",
  "Cursos",
  "Iniciar Sesión",
  "Crear Cuenta",
  "Nosotros",
];
const settings = ["Perfil", "Cuenta", "Panel", "Cerrar Sesión"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCursosDesktop, setAnchorElCursosDesktop] =
    React.useState(null); // Vista para Escritorio.
  const [anchorElCursosMobile, setAnchorElCursosMobile] = React.useState(null); // Vista para mobil.

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenCursosDesktopMenu = (event) => {
    setAnchorElCursosDesktop(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenCursosMobileMenu = (event) => {
    setAnchorElCursosMobile(event.currentTarget);
  };

  const handleCloseCourseMenu = () => {
    setAnchorElCursosDesktop(null);
    setAnchorElCursosMobile(null);
  };

  const handlePageClick = (page) => {
    handleCloseNavMenu();

    const routes = {
      Inicio: "/",
      "Iniciar Sesión": "/login",
      "Crear Cuenta": "/signup",
      Nosotros: "/aboutUs",
      // AQUI PODEMOS AGREGAR MAS LINKS A LOS COMPONENTES DE LA PAGINA
    };

    const route = routes[page];
    if (route) {
      navigate(route);
    }
  };

  const handleCourseOptionClick = (courseOptions) => {
    handleCloseCourseMenu();

    // if (option === 'Todos') {
    //   navigate('/courses/todos');
    // } else {
    //   // Aqui podemos agregar mas Opciones dentro de el navbar de courses.
    //   console.log(`Selected course option: ${option}`);
    // }
    switch (courseOptions) {
      case "Todos":
        navigate("/courses/Todos");
        break;

      case "Saludos":
        navigate("/courses/Saludos");
        break;

      case "Números":
        navigate("/courses/Numeros");
        break;

      case "Colores":
        navigate("/courses/Colores");
        break;

      case "Animales":
        navigate("/courses/Animales");
        break;
      default:
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1C1D21" }}>
      <Container maxWidth="x1">
        {" "}
        {/* Distancia entre el texto y logo del Navbar */}
        <Toolbar disableGutters>
          <SignLanguageIcon
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: "3rem",
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex", fontSize: "1.60rem" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Apprende EnSeñas
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              mr: 5,
            }}
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <div key={page}>
                  {page === "Cursos" ? (
                    <div>
                      <MenuItem onClick={handleOpenCursosMobileMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                      <Menu
                        anchorEl={anchorElCursosMobile}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElCursosMobile)}
                        onClose={handleCloseCourseMenu}
                      >
                        {courseOptions.map((option) => (
                          <MenuItem
                            key={option}
                            onClick={() => handleCourseOptionClick(option)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  ) : (
                    <MenuItem key={page} onClick={() => handlePageClick(page)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  )}
                </div>
              ))}
            </Menu>
          </Box>
          <SignLanguageIcon
            sx={{
              display: { xs: "flex", md: "none" },
              fontSize: "3rem",
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Apprende EnSeñas
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <div key={page}>
                {page === "Cursos" ? (
                  <Button
                    onClick={handleOpenCursosDesktopMenu}
                    sx={{ my: 4, mr: 4, color: "#F8F1FF", display: "block" }}
                  >
                    {page}
                  </Button>
                ) : (
                  <Button
                    onClick={() => handlePageClick(page)}
                    sx={{ my: 4, mr: 4, color: "#F8F1FF", display: "block" }}
                  >
                    {page}
                  </Button>
                )}
                {page === "Cursos" && (
                  <Menu
                    anchorEl={anchorElCursosDesktop}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElCursosDesktop)}
                    onClose={handleCloseCourseMenu}
                  >
                    {courseOptions.map((option) => (
                      <MenuItem
                        key={option}
                        onClick={() => handleCourseOptionClick(option)}
                      >
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
                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton> */}
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
