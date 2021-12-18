import * as React from "react";
import {
  Card,
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Theme,
} from "@material-ui/core";
import DashboardTableCell from "./DashboardTableCell";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      padding: "20px 30px",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    title: {
      fontSize: 16,
      color: theme.palette.dashboardGrey.main,
    },
    tableWrapper: {
      overflow: "auto",
      width: "100%",
      height: "100%",
      position: "relative",
    },
  })
);

const rows = new Array(50).fill({
  id: 1234,
  customer: "Customer 1",
  invoiceDate: "10/30/2020",
  revenue: "$6000.00",
  costOfGoods: "$2000.00",
  grossMargin: "$4000.00",
});

interface DashboardTableProps {}
export default function DashboardTable(props: DashboardTableProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.title}>Revenue Details</div>
      <div className={classes.tableWrapper}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <DashboardTableCell># Invoice</DashboardTableCell>
              <DashboardTableCell>Customer</DashboardTableCell>
              <DashboardTableCell>Invoice Date</DashboardTableCell>
              <DashboardTableCell>Revenue</DashboardTableCell>
              <DashboardTableCell>Cost of Goods</DashboardTableCell>
              <DashboardTableCell>Gross Margin</DashboardTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <DashboardTableCell>{row.id}</DashboardTableCell>
                <DashboardTableCell>{row.customer}</DashboardTableCell>
                <DashboardTableCell>{row.invoiceDate}</DashboardTableCell>
                <DashboardTableCell>{row.revenue}</DashboardTableCell>
                <DashboardTableCell>{row.costOfGoods}</DashboardTableCell>
                <DashboardTableCell>{row.grossMargin}</DashboardTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
