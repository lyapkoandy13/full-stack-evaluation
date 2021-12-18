import { Query } from "@cubejs-client/core";

export default {
  measures: ["IncomeStatementMeasures.grossProfit"],
  timeDimensions: [
    {
      dimension: "IncomeStatementMeasures.accountingPeriodEndDate",
      dateRange: ["2019-11-30", "2020-10-31"],
      granularity: "month",
    },
  ],
  filters: [],
  order: {},
} as Query;
