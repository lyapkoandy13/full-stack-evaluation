import React from "react";
import { ListItem, ListItemIcon, ListItemText, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import clsx from "clsx";

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
  active?: boolean;
}
export default function DrawerItem({ text, icon, active }: DrawerItemProps) {
  const classes = useStyles();
  return (
    <ListItem
      className={clsx(classes.root, active && classes.rootActive)}
      button
      key={text}
    >
      <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
