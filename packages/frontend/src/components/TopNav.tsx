import React from "react";
import { IconButton, useMediaQuery } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import HelpIcon from "@material-ui/icons/Help";
import PersonIcon from "@material-ui/icons/Person";
import clsx from "clsx";

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
      padding: "12px 12px",
      transition: "background .3s ease-in-out",
      [theme.breakpoints.up("md")]: {
        padding: "27px 22px 0",
      },
    },
    rootBackground: {
      backgroundColor: "white",
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

export default function TopNav() {
  const classes = useStyles();
  const hasMobileWidth = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [showBackground, setShowBackground] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    if (window.pageYOffset > 0) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={clsx(
        classes.root,
        hasMobileWidth && showBackground && classes.rootBackground
      )}
    >
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
