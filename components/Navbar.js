import { AppBar, Container, styled, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "@mui/material/Link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import CartIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Badge from "@mui/material/Badge";

export default function Navbar() {
  let shoppingBasket = [];
  const theme = useTheme();
  const StyledLink = styled(Link)({
    "&:hover": {
      color: "black",
    },
    fontWeight: "bold",
    padding: "1rem",
  });

  const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
      color: "#fff",
    },
    border: `2px solid ${theme.palette.primary.main}`,
    marginLeft: "2px",
  });
  const StyledButton = styled(Button)({
    color: theme.palette.primary.main,
    borderRadius: "0.75rem",
    backgroundColor: "white",
    border: `2px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      "& .MuiBadge-badge": {
        backgroundColor: "#fff",
        color: theme.palette.primary.main,
      },
    },
  });
  return (
    <AppBar
      position="static"
      elevation={0}
      className="py-3"
      sx={{
        backgroundColor: "white",
        borderBottom: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <Container>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="basis-1/4">
              <Image
                src="/logo.png"
                width={200}
                height={46.5}
                alt="Picture of the author"
              />
            </div>
            <div className="flex justify-between items-center basis-1/2 mx-16">
              <div>
                <StyledLink href="#" underline="none">
                  Home
                </StyledLink>
              </div>
              <div>
                <StyledLink
                  className="flex items-center"
                  href="#"
                  underline="none"
                >
                  Hosting
                  <KeyboardArrowDownIcon />
                </StyledLink>
              </div>
              <div>
                <StyledLink
                  className="flex items-center"
                  href="#"
                  underline="none"
                >
                  Pages
                  <KeyboardArrowDownIcon />
                </StyledLink>
              </div>
              <div>
                <StyledLink href="#" underline="none">
                  Contact
                </StyledLink>
              </div>
            </div>
            <div className="flex justify-center basis-1/4">
              <StyledButton disableElevation variant="contained">
                <CartIcon />
                &nbsp; Cart &nbsp;&nbsp;
                <StyledBadge
                  badgeContent={shoppingBasket.length}
                  color="primary"
                  showZero
                ></StyledBadge>
              </StyledButton>
            </div>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}
