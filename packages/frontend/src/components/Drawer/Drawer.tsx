import React from "react";
import {
  SwipeableDrawer as MuiDrawer,
  List,
  Typography,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/Close";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const DRAWER_WIDTH = 280;
const DRAWER_ITEMS: DrawerItemProps[] = [
  {
    text: "Home",
    icon: <HomeRoundedIcon />,
  },
  {
    text: "My Dashboard",
    icon: <DashboardRoundedIcon />,
    active: true,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      [theme.breakpoints.down("md")]: { width: 0 },
    },
    openButton: {
      top: 26,
      left: 4,
      padding: "10px",
      position: "fixed",
      zIndex: 2,
      [theme.breakpoints.up("sm")]: {
        left: 14,
      },
    },
    closeButton: {
      position: "absolute",
      right: 10,
      top: 28,
      color: "#fff",
    },
    title: {
      padding: "37px 39px",
      color: theme.palette.primary.contrastText,
      fontSize: 20,
      letterSpacing: 0.26,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0px 2px 4px #00000054",
      border: 0,
    },
    list: {
      width: "100%",
    },
  })
);

interface DrawerProps {
  mobile?: boolean;
}
export default function Drawer({ mobile }: DrawerProps) {
  const classes = useStyles();
  const hasMobileWidth = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const [opened, setOpened] = React.useState(false);
  const toggleOpened = () => setOpened((prev) => !prev);

  const showCloseButton = React.useMemo(
    () => hasMobileWidth && opened,
    [hasMobileWidth, opened]
  );

  return (
    <nav className={classes.root}>
      <IconButton className={classes.openButton} onClick={toggleOpened}>
        <MenuRoundedIcon />
      </IconButton>
      <MuiDrawer
        classes={{ paper: classes.drawerPaper }}
        variant={hasMobileWidth ? "temporary" : "permanent"}
        onClose={toggleOpened}
        onOpen={toggleOpened}
        open={!hasMobileWidth || opened}
      >
        {showCloseButton && (
          <IconButton className={classes.closeButton} onClick={toggleOpened}>
            <CloseIcon />
          </IconButton>
        )}
        <Typography className={classes.title}>OverlayAnalytics</Typography>
        <List className={classes.list}>
          {DRAWER_ITEMS.map((item, i) => (
            <DrawerItem
              key={i}
              text={item.text}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </List>
      </MuiDrawer>
    </nav>
  );
}
