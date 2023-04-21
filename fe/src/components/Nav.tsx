import { AppBar, Container, Box } from "@mui/material";
import { Page } from "../models/main";
import { NavBar } from "./NavBar";
import { NavMenu } from "./NavMenu";

export const Nav = (props: { pages: Page[] }) => {
  const pages = props.pages;
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavBar pages={pages} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <NavMenu pages={pages} />
          </Box>
        </Container>
      </AppBar>
    </>
  );
}