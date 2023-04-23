import React, { useState } from "react";
import { Grid, Stack, Typography, Button, Box, Divider } from "@mui/material";
import HeaderLogedin from "../components/headerLogedin";
import { getProducts } from "../api/products";

export default function ProductDetail() {
  const imageColumn = {};
  const titleColumn = {
    paddingInline: "30px",
  };
  const sellerColumn = {
    backgroundColor: "custom.main",
    padding: "30px",
  };
  const iconStyle = {
    width: "20px",
    height: "20px",
    marginLeft: "20px",
  };
  const PositionStyle = {
    marginBlock: "15px",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:hover": {
      bgcolor: "custom.main",
    },
  };

  const [product, setProduct] = useState(getProducts()[0]);
  return (
    <>
      <HeaderLogedin />
      <Stack dir="rtl">
        <Typography sx={{ textAlign: "left", paddingTop: "60px" }}>
          خانه {`>`} تیرآهن {`>`} {product.title}
        </Typography>
        <Grid container sx={{ marginBlock: "30px" }}>
          <Grid sx={imageColumn} item xs={4}>
            <img
              src={require("../assets/images/girder.jpeg")}
              style={{ width: "100%", paddingBottom: "5px" }}
            />
          </Grid>
          <Grid sx={titleColumn} item xs={4}>
            <Stack
              sx={{
                justifyContent: "space-between",
                alignItems: "space-between",
              }}
            >
              <Typography variant="h2" sx={{ textAlign: "left" }}>
                {product.title}
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  textAlign: "left",
                  marginTop: "180px",
                  marginBottom: "60px",
                }}
              >
                از ۶,۰۰۰,۰۰۰ تومان تا ۸,۰۰۰,۰۰۰ تومان
              </Typography>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                خرید با کمترین قیمت
              </Button>
            </Stack>
          </Grid>
          <Grid sx={sellerColumn} item xs={4}>
            <Typography
              variant="h2"
              sx={{ textAlign: "left", paddingBottom: "30px", color: "black" }}
            >
              فروشنده
            </Typography>
            <Stack direction="row" sx={PositionStyle}>
              <img
                style={iconStyle}
                src={require("../assets/images/Vector3.png")}
              />
              <Box>
                <Typography variant="h6">فولاد آریا</Typography>
              </Box>
            </Stack>
            <Divider />
            <Stack direction="row" sx={PositionStyle}>
              <img
                style={iconStyle}
                src={require("../assets/images/Vector3.png")}
              />
              <Box>
                <Typography variant="h6">محل تحویل: کارخانه</Typography>
              </Box>
            </Stack>
            <Divider />
            <Stack direction="row" sx={PositionStyle}>
              <img
                style={iconStyle}
                src={require("../assets/images/Vector3.png")}
              />
              <Box>
                <Typography variant="h6">شماره تماس : ۰۹۱۲۴۳۵۶۶۸۸</Typography>
              </Box>
            </Stack>
            <Divider />
            <Stack direction="row" sx={PositionStyle}>
              <img
                style={iconStyle}
                src={require("../assets/images/Vector3.png")}
              />
              <Box>
                <Typography variant="h6">قیمت فروشنده: ۸,۰۰۰,۰۰۰</Typography>
              </Box>
            </Stack>
            <Divider />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
