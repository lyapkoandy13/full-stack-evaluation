import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import TopNav from "./TopNav";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { display: "flex", height: "100%", width: "100%" },
    main: {
      position: "relative",
      flexGrow: 1,
      padding: "84px 14px",
      [theme.breakpoints.up("sm")]: {
        padding: "84px 24px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "84px 74px",
      },
    },
  })
);

interface LayoutProps {
  children?: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopNav />
      <Drawer />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
