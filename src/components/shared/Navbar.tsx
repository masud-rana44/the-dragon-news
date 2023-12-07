"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

const pages = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Career",
    href: "/career",
  },
];

function Navbar() {
  return (
    <AppBar
      position="static"
      className="shadow-none"
      sx={{ bgcolor: "white", color: "gray" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              columnGap: 8,
              width: "full",
              justifyContent: "center",
            }}
          >
            {pages.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ my: 2, backgroundColor: "black", color: "white" }}
              className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-700"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
