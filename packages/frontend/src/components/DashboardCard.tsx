import React from "react";
import { Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      height: 130,
      width: "100%",
      padding: "18px 28px 19px",
      color: theme.palette.dashboardGrey.main,
      display: "flex",
      flexDirection: "column",
      gap: 4,
    },
    mainText: {
      fontSize: 34,
      letterSpacing: 0.01,
      fontWeight: 500,
    },
    date: {
      fontSize: 14,
      lineHeight: 1.15,
    },
    pillWrapper: {
      position: "absolute",
      right: 19,
      bottom: 14,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    pill: {
      width: 115,
      height: 23,
      backgroundColor: theme.palette.dashboardGrey.light,
      borderRadius: 14,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 8,
    },
    pillNegative: {
      backgroundColor: theme.palette.secondary.main,
    },
    pillText: {
      color: "#fff",
      fontSize: 18,
    },
    pillIcon: {
      color: "#fff",
    },
    pillIconNegative: { transform: "rotate(180deg)" },
    underPillText: {
      color: "#747C83",
      fontSize: 12,
      lineHeight: 1.5,
    },
  })
);

interface DashboardCardProps {
  title: string;
  mainText: string;
  dateText: string;
  percentage: number;
  negativePercentage?: boolean;
}
export default function DashboardCard({
  title,
  mainText,
  dateText,
  percentage,
  negativePercentage,
}: DashboardCardProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div>{title}</div>
      <div className={classes.mainText}>{mainText}</div>
      <div className={classes.date}>{dateText}</div>
      <div className={classes.pillWrapper}>
        <div
          className={clsx(
            classes.pill,
            negativePercentage && classes.pillNegative
          )}
        >
          <span className={classes.pillText}>{percentage.toFixed(1)}%</span>
          <ArrowUpwardIcon
            className={clsx(
              classes.pillIcon,
              negativePercentage && classes.pillIconNegative
            )}
          />
        </div>
        <div className={classes.underPillText}>MoM</div>
      </div>
    </Card>
  );
}
