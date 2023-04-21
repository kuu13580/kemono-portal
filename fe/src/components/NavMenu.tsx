import { Page } from '../models/main';
import { Typography } from '@mui/material';

export const NavMenu = (props: { pages: Page[] }) => {
  const pages = props.pages;
  const test = pages.reduce((res, item) => {
    return res + item.name;
  }, "");
  return (
    <>
      <Typography>
        {test}
      </Typography>
    </>
  );
}
