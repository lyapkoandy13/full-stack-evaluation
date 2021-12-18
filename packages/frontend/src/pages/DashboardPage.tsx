import React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import DashboardCard from "../components/DashboardCard";
import DashboardChart from "../components/DashboardChart";
import DashboardTable from "../components/DashboardTable/DashboardTable";
import Layout from "../components/Layout";
import useChartData from "../hooks/useChartData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageName: {
      fontSize: 32,
      color: theme.palette.primary.main,
      letterSpacing: 0.41,
      marginBottom: 60,
    },
    topCardsWrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gridGap: "1rem",
      marginBottom: "1rem",
    },
    bottomCardsWrapper: {
      width: "100%",
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(2, 1fr) 2fr",
      aspectRatio: "23/60",
      [theme.breakpoints.up("sm")]: {
        aspectRatio: "23/40",
      },
      [theme.breakpoints.up("lgplus")]: {
        gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
        gridTemplateRows: "1fr 1fr",
        aspectRatio: "23/10",
      },
    },
    bottomCard1: { order: 1, position: "relative" },
    bottomCard2: {
      order: 2,
      position: "relative",
      [theme.breakpoints.up("lgplus")]: {
        order: 3,
      },
    },
    bottomCard3: {
      order: 3,
      gridRow: "span 2 / auto",

      [theme.breakpoints.up("lgplus")]: {
        order: 2,
      },
    },
    chartSkeleton: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: 4,
    },
  })
);

function DashboardPage() {
  const classes = useStyles();

  const { data, isLoading } = useChartData();
  // console.log(data, isLoading);

  return (
    <Layout>
      <Typography className={classes.pageName} component="h1">
        My Dashboard
      </Typography>
      {/*  */}
      <div className={classes.topCardsWrapper}>
        <DashboardCard
          title="Revenue"
          mainText="$9,000K"
          dateText="Aug 2020"
          percentage={21.7}
        />
        <DashboardCard
          title="Cost of Goods"
          mainText="$4,000K"
          dateText="Aug 2020"
          percentage={13.1}
          negativePercentage
        />
        <DashboardCard
          title="Gross Margin"
          mainText="$5,000K"
          dateText="Aug 2020"
          percentage={11.4}
        />
        <DashboardCard
          title="Gross Margin %"
          mainText="55.5%"
          dateText="Aug 2020"
          percentage={14.7}
        />
      </div>
      {/*  */}
      <div className={classes.bottomCardsWrapper}>
        <div className={classes.bottomCard1}>
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.chartSkeleton}
            />
          ) : (
            <DashboardChart title="Gross Margin" chartData={data} />
          )}
        </div>
        <div className={classes.bottomCard2}>
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.chartSkeleton}
            />
          ) : (
            <DashboardChart title="Gross Margin" chartData={data} />
          )}
        </div>
        <div className={classes.bottomCard3}>
          <DashboardTable />
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
