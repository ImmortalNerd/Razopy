import React from "react";
import Image from "next/image";
import { Typography, Button, styled } from "@mui/material";
import theme from "@/src/theme";

export default function FirstSlide() {
  const StyledButton2 = styled(Button)({
    border: `2px solid ${theme.palette.type.main}`,
    backgroundColor: "transparent",
    textTransform: "capitalize",
    borderRadius: "1rem",
    color: theme.palette.type.main,
    transition: "top 500ms linear",
    "&:hover": {
      backgroundColor: "transparent",
      top: "-3px",
    },
  });

  const StyledButton1 = styled(Button)({
    textTransform: "capitalize",
    borderRadius: "1rem",
    color: "#fff",
    transition: "top 500ms linear",
    "&:hover": {
      top: "-3px",
    },
  });

  return (
    <div
      key={1}
      style={{ backgroundColor: "#e2eef7" }}
      className="flex justify-center gap-10 px-24 h-full	"
    >
      <div className="my-16 basis-3/5">
        <div
          className="flex items-center gap-2"
          style={{
            backgroundColor: "#fff",
            borderRadius: "0.75rem",
            padding: "0.7rem",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: theme.palette.primary.main,
              padding: "0.5rem",
              color: "#fff",
              borderRadius: "0.5rem",
            }}
          >
            info
          </div>
          <Typography color={theme.palette.type.main}>
            Installation And Delivery In 5 Minutes
          </Typography>
        </div>
        <div className="my-3">
          <Typography
            color={theme.palette.secondary.main}
            variant="h4"
            sx={{ fontWeight: "bold" }}
          >
            Purchase Your Cloud Hosting Today!
          </Typography>
        </div>
        <div className="my-5">
          <Typography color={theme.palette.type.main}>
            Get the power and flexibility of a Cloud Hosting for your business
            needs. Experience seamless performance, scalability. and security.
          </Typography>
        </div>
        <div className="my-5">
          <Typography color={theme.palette.secondary.main} variant="h6">
            Start Your Cloud Hosting Journey Today!
          </Typography>
        </div>
        <div className="flex gap-5">
          <div>
            <StyledButton1 disableElevation={true} variant="contained" sx={{}}>
              Order Now!
            </StyledButton1>
          </div>
          <div>
            <StyledButton2 disableElevation={true} variant="contained">
              Get Help Now!
            </StyledButton2>
          </div>
        </div>
        <div className="my-5">
          <Typography color={theme.palette.secondary.main}>
            Performance, Security, And Low Prices.{" "}
            <strong> It&apos;s Worth Trying.</strong>
          </Typography>
        </div>
      </div>
      <div className="basis-2/5">
        <Image src="/cloud-hosting.svg" width={437} height={550} alt="..." />
      </div>
    </div>
  );
}
