import * as React from "react";
import AppBar from "@mui/material/AppBar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import MessageIcon from "@mui/icons-material/MessageOutlined";
import PersonIcon from "@mui/icons-material/Person2Outlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Container from "@mui/material/Container";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function Header() {
  const StyledButton = styled(Button)({
    backgroundColor: "#fff",
    minWidth: "unset",
    height: "fit-content",
    "&:hover": {
      backgroundColor: "#0069d9",
      color: "#fff",
    },
  });
  return (
    <AppBar position="static" elevation={0} className="py-3">
      <Container>
        <div className="container">
          <div
            className="flex justify-center md:justify-between"
            variant="dense"
            sx={{ color: "white" }}
          >
            <div className="flex gap-2 items-center">
              <StyledButton size="small">
                <InstagramIcon />
              </StyledButton>
              <StyledButton size="small">
                <WhatsAppIcon />
              </StyledButton>
              <StyledButton size="small">
                <FacebookIcon />
              </StyledButton>
              <StyledButton size="small">
                <TwitterIcon />
              </StyledButton>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                The hosting theme that tries to be the best
              </Typography>
            </div>
            <div className="hidden md:flex gap-2">
              <StyledButton
                sx={{ textTransform: "capitalize", borderRadius: "0.5rem" }}
              >
                <MessageIcon /> Support
              </StyledButton>
              <StyledButton
                sx={{ textTransform: "capitalize", borderRadius: "0.5rem" }}
              >
                <PersonIcon /> Login
              </StyledButton>
              <StyledButton
                sx={{ textTransform: "capitalize", borderRadius: "0.5rem" }}
              >
                <PersonIcon /> Register
              </StyledButton>
              <StyledButton
                sx={{ textTransform: "capitalize", borderRadius: "0.5rem" }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                English
              </StyledButton>
            </div>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}
export default Header;
