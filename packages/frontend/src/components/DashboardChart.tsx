import * as React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {
  Card,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import { generateUniqueId } from "../utils";
import clsx from "clsx";
import ChartData from "../types/ChartData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
    },
    chart: {
      width: "100%",
      height: "100%",
    },
    fullWidth: {
      width: "100%",
    },
  })
);

const tooltipTextFormatString = `[white]
{name}
{dateX}
[bold]{valueY}[/bold]
[/white]`;
const tooltipHtmlFormatString = `<div style="color:white;">
<div>{name}</div>
<div style="font-size:12px;">{dateX}</div>
<div style="font-size:18px;">{valueY}</div>
</div>`;

interface DashboardChartProps {
  fullWidth?: boolean;
  title: string;
  chartData: Partial<ChartData>[];
}
export default function DashboardChart({
  fullWidth,
  title,
  chartData,
}: DashboardChartProps) {
  const classes = useStyles();
  const theme = useTheme();

  const chartId = React.useMemo(() => generateUniqueId(), []);

  React.useEffect(() => {
    am4core.useTheme(am4themes_animated);

    const chart = am4core.create(chartId, am4charts.XYChart);
    chart.logo.disabled = true;

    // Chart title
    var chartTitle = chart.titles.create();
    chartTitle.text = title;
    chartTitle.fill = am4core.color(theme.palette.dashboardGrey.main);
    chartTitle.fontSize = 16;
    chartTitle.align = "left";
    chartTitle.paddingLeft = 8;
    chartTitle.paddingTop = 8;

    // Data and formatting
    chart.data = chartData;
    chart.dateFormatter.dateFormat = "MMM yyyy";
    chart.numberFormatter.numberFormat = "$#.#a";

    // AxisX
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.date = "date";
    dateAxis.renderer.grid.template.strokeOpacity = 0;
    dateAxis.cursorTooltipEnabled = false;
    dateAxis.dateFormats.setKey("month", "MMM yyyy");
    // dateAxis.gridIntervals.setAll([{ timeUnit: "month", count: 1 }]);
    dateAxis.renderer.minGridDistance = 36;
    dateAxis.renderer.labels.template.fill = am4core.color(
      theme.palette.dashboardGrey.main
    );

    // AxisX - date labels
    let label = dateAxis.renderer.labels.template;
    label.wrap = true;
    label.truncate = false;
    dateAxis.renderer.labels.template.textAlign = "middle";
    dateAxis.renderer.labels.template.width = 60;

    // dateAxis.events.on("sizechanged", function (ev) {
    //   var axis = ev.target;
    //   var cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex) + 14;
    //   axis.renderer.labels.template.maxWidth = cellWidth;
    // });

    // AxisY
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.grid.template.stroke = am4core.color(
      theme.palette.dashboardGrey.light
    );
    valueAxis.renderer.grid.template.strokeWidth = 2;
    valueAxis.renderer.labels.template.fill = am4core.color(
      theme.palette.dashboardGrey.main
    );
    // valueAxis.extraMax = 0.1;

    // // Column values
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.dataFields.valueY = "revenue";
    columnSeries.dataFields.dateX = "date";
    columnSeries.name = "Revenue";
    // Line Tooltips
    columnSeries.tooltipText = tooltipTextFormatString;
    columnSeries.tooltipHTML = tooltipHtmlFormatString;
    // Column style
    columnSeries.columns.template.column.opacity = 0.6;
    columnSeries.columns.template.fill = am4core.color(
      theme.palette.dashboardGrey.light
    );
    columnSeries.columns.template.column.cornerRadiusTopLeft = 10;
    columnSeries.columns.template.column.cornerRadiusTopRight = 10;
    columnSeries.strokeWidth = 0;

    // Line values
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Gross Margin";
    lineSeries.dataFields.valueY = "grossMargin";
    lineSeries.dataFields.dateX = "date";
    lineSeries.stroke = am4core.color(theme.palette.primary.main);
    lineSeries.fill = am4core.color(theme.palette.primary.main);
    lineSeries.strokeWidth = 3;
    lineSeries.smoothing = "monotoneX";
    // Line Tooltips
    lineSeries.tooltipText = tooltipTextFormatString;
    lineSeries.tooltipHTML = tooltipHtmlFormatString;
    // Line bullets
    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.fill = am4core.color(theme.palette.primary.main);
    bullet.strokeWidth = 3;

    // Chart Legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.contentAlign = "right";
    chart.legend.marginBottom = 10;
    chart.legend.labels.template.fontSize = 12;
    chart.legend.labels.template.fill = am4core.color(
      theme.palette.dashboardGrey.main
    );
    chart.legend.valueLabels.template.fontSize = 12;
    chart.legend.valueLabels.template.fill = am4core.color(
      theme.palette.dashboardGrey.main
    );

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;

    return () => chart.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className={clsx(classes.root, fullWidth && classes.fullWidth)}>
      <div id={chartId} className={classes.chart}></div>
    </Card>
  );
}
