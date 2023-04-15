import * as React from "react";
import { useState, useEffect } from "react";
import "./Signup.css";
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
import { registerUser } from "../../redux/apiRequest";
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

export default function Signup() {
  const { t } = useTranslation("signup");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleregister = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
      email: email,
    };
    registerUser(newUser, dispatch, navigate);
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
          marginTop: "7rem",
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
          }}
        >
          <img src={logo} alt="logo" className="logo" />
          <Typography component="h1" variant="h5">
            {t("signup")}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleregister}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label={t("username")}
                  name="username"
                  autoComplete="username"
                  className="Mui-focused"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t("password")}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  className="Mui-focused"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={t("email")}
                  name="email"
                  autoComplete="email"
                  className="Mui-focused"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
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
              {t("signup")}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2 " color="inherit">
                  {t("wantlogin")}
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
