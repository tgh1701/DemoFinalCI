import * as React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/logo/logo.png";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        MeowBooking
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

export default function Login() {
  const { t } = useTranslation("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
    return false;
  };

  useEffect(() => {
    const currentLanguage = localStorage.getItem("language");
    i18next.changeLanguage(currentLanguage);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        className="container-main"
        component="main"
        maxWidth="sm"
        sx={{
          marginTop: "8rem",
          border: "2px solid var(--black)",
          borderRadius: "1rem",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" className="logo" />
          <Typography component="h1" variant="h5">
            {t("login")}
          </Typography>

          <Box
            onSubmit={handleLogin}
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label={t("username")}
              name="username"
              autoComplete="username"
              autoFocus
              className="Mui-focused"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("password")}
              type="password"
              id="password"
              autoComplete="current-password"
              className="Mui-focused"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "var(--theme)",
                color: "white",
                "&:hover": {
                  backgroundColor: "#fa1f47",
                },
                mt: 3,
                mb: 2,
              }}
            >
              {t("login")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="inherit">
                  {t("forgotpassword")}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" color="inherit">
                  {t("wantsignup")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
