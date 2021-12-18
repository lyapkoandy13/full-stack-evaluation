import { TableCell, Theme, withStyles } from "@material-ui/core";

const DashboardTableCell = withStyles((theme: Theme) => ({
  root: {
    border: 0,
    color: theme.palette.dashboardGrey.main,
    fontSize: 12,
    backgroundColor: theme.palette.background.paper,
    padding: "12px 4px 12px 0",
    wordBreak: "break-all",
    verticalAlign: "top",
    [theme.breakpoints.up("md")]: {
      padding: "12px 12px 12px 0",
      verticalAlign: "center",
      wordBreak: "break-word",
    },
  },
}))(TableCell);

export default DashboardTableCell;
