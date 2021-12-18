import React from "react";
import { IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import HelpIcon from "@material-ui/icons/Help";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      display: "flex",
      justifyContent: "end",
      left: 0,
      top: 0,
      width: "100%",
      zIndex: 1,
      padding: "27px 12px 0",
      [theme.breakpoints.up("md")]: {
        padding: "27px 22px 0",
      },
    },
    button: {
      padding: "10px",
      "&:hover": {
        background: "none",
        color: theme.palette.primary.main,
        transition: "color .3s ease-in-out",
      },
    },
  })
);

interface TopNavProps {}
export default function TopNav(props: TopNavProps) {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <IconButton className={classes.button}>
        <SearchIcon />
      </IconButton>
      <IconButton className={classes.button}>
        <WbSunnyIcon />
      </IconButton>
      <IconButton className={classes.button}>
        <HelpIcon />
      </IconButton>
      <IconButton className={classes.button}>
        <PersonIcon />
      </IconButton>
    </nav>
  );
}
