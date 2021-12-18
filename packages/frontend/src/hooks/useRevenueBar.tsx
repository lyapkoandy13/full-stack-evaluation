import * as React from "react";
import { useCubeQuery } from "@cubejs-client/react";
import revenue_bar from "../cubejs/queries/revenue_bar";

import type { CubejsSeriesData, RevenueBarData } from "../types";
import { ResultSet } from "@cubejs-client/core";

const getDataFromResultSet = (
  resultSet: ResultSet | null
): RevenueBarData[] => {
  if (!resultSet) return [];
  const data = resultSet?.series<CubejsSeriesData>()?.[0]?.series || [];
  return data.map(({ x, value }) => ({ dateStr: x, date: new Date(x), value }));
};

export default function useRevenueBar() {
  const { isLoading, resultSet } = useCubeQuery(revenue_bar);

  const resultingData = React.useMemo(
    () => ({
      isLoading,
      data: getDataFromResultSet(resultSet),
    }),
    [isLoading, resultSet]
  );

  return resultingData;
}
