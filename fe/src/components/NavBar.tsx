import { Link } from 'react-router-dom';
import { Toolbar, Button } from '@mui/material';
import { Page } from '../models/main';

export const NavBar = (props : { pages: Page[] }) => {
  const pages = props.pages;
  return (
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          {
            pages.map((page) => (
              <Button color="inherit" key={page.id}>
                <Link to={page.path} style={{ textDecoration: 'none', color: 'white' }}>
                  <div>{page.name}</div>
                  {/* <div style={{ fontSize: "0.5em" }}>{page.name_eng}</div> */}
                </Link>
              </Button>
            ))
          }
        </Toolbar>
  );
}