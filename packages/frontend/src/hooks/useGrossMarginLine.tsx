import * as React from "react";
import { useCubeQuery } from "@cubejs-client/react";
import gross_margin_line from "../cubejs/queries/gross_margin_line";

import type { CubejsSeriesData, GrossMarginLineData } from "../types";
import { ResultSet } from "@cubejs-client/core";

const getDataFromResultSet = (
  resultSet: ResultSet | null
): GrossMarginLineData[] => {
  if (!resultSet) return [];
  const data = resultSet?.series<CubejsSeriesData>()?.[0]?.series || [];
  return data.map(({ x, value }) => ({ dateStr: x, date: new Date(x), value }));
};

export default function useGrossMarginLine() {
  const { isLoading, resultSet } = useCubeQuery(gross_margin_line);

  const resultingData = React.useMemo(
    () => ({
      isLoading,
      data: getDataFromResultSet(resultSet),
    }),
    [isLoading, resultSet]
  );

  return resultingData;
}
