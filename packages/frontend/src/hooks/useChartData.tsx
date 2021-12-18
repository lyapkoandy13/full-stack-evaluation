import * as React from "react";
import { GrossMarginLineData, RevenueBarData } from "../types";
import ChartData from "../types/ChartData";
import useGrossMarginLine from "./useGrossMarginLine";
import useRevenueBar from "./useRevenueBar";

const combineGrossMarginDataWithRevenueData = (
  revenueData: RevenueBarData[],
  grossMarginData: GrossMarginLineData[]
): Partial<ChartData>[] => {
  let groupedByDateMap = new Map<string, Partial<ChartData>>();
  for (const revenueDataValue of revenueData) {
    if (!groupedByDateMap.has(revenueDataValue.dateStr)) {
      groupedByDateMap.set(revenueDataValue.dateStr, {
        date: revenueDataValue.date,
        revenue: revenueDataValue.value,
      });
    }
  }
  for (const grossMarginValue of grossMarginData) {
    if (!groupedByDateMap.has(grossMarginValue.dateStr)) {
      groupedByDateMap.set(grossMarginValue.dateStr, {
        date: grossMarginValue.date,
        grossMargin: grossMarginValue.value,
      });
    } else {
      const groupedValue = groupedByDateMap.get(grossMarginValue.dateStr);
      groupedByDateMap.set(grossMarginValue.dateStr, {
        ...groupedValue,
        grossMargin: grossMarginValue.value * (groupedValue?.revenue || 1),
      });
    }
  }
  return Array.from(groupedByDateMap.values());
};

export default function useChartData() {
  const { data: grossMarginData, isLoading: isLoadingGrossMargin } =
    useGrossMarginLine();
  const { data: revenueData, isLoading: isLoadingRevenueBar } = useRevenueBar();

  const isLoadingOther = React.useMemo(
    () => isLoadingGrossMargin || isLoadingRevenueBar,
    [isLoadingGrossMargin, isLoadingRevenueBar]
  );
  const [isLoading, setIsLoading] = React.useState(true);

  const data = React.useMemo(() => {
    if (isLoadingOther) return [];
    setIsLoading(true);
    const result = combineGrossMarginDataWithRevenueData(
      revenueData,
      grossMarginData
    );
    setIsLoading(false);
    return result;
  }, [grossMarginData, isLoadingOther, revenueData]);

  return { data, isLoading: isLoading || isLoadingOther };
}
