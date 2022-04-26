import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import style from "./BlockNavigation.module.css";

const buttons = [
  <Button key="profile" className={style.item}>
    <NavLink to="/profile">Profile</NavLink>
  </Button>,
  <Button key="dialogs" className={style.item}>
    <NavLink to="/profile/dialogs">Dialogs</NavLink>
  </Button>,
  <Button key="news" className={style.item}>
    <NavLink to="/profile/news">News</NavLink>
  </Button>,
  <Button key="music" className={style.item}>
    <NavLink to="/profile/music">Music</NavLink>
  </Button>,
  <Button key="settings" className={style.item}>
    <NavLink to="/profile/settings">Settings</NavLink>
  </Button>,
  <Button key="users" className={style.item}>
    <NavLink to="/profile/users">Users</NavLink>
  </Button>,
];

const BlockNavigation = () => {
  return (
    <nav className={style.nav}>
      <Box>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
          color="warning"
          size="large">
          {buttons}
        </ButtonGroup>
      </Box>
    </nav>
  );
};

export default BlockNavigation;
