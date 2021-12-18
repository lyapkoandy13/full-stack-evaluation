import React from "react";
import { ListItem, ListItemIcon, ListItemText, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "14px 40px",
      color: theme.palette.primary.contrastText,
      marginBottom: theme.spacing(4),
    },
    rootActive: {
      padding: "14px 32px",
      backgroundColor: "#0E8E6D",
      borderLeft: "8px solid #fff",
      "&:hover": { backgroundColor: "#0E8E6D" },
    },
    icon: { color: theme.palette.primary.contrastText },
  })
);

export interface DrawerItemProps {
  text: string;
  icon: React.ReactNode;
  path: string;
}
export default function DrawerItem({ text, icon, path }: DrawerItemProps) {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const active = React.useMemo(
    () => location.pathname === path,
    [location.pathname, path]
  );
  const gotoPage = () => !active && navigate(path);

  return (
    <ListItem
      className={clsx(classes.root, active && classes.rootActive)}
      button
      key={text}
      onClick={gotoPage}
    >
      <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
