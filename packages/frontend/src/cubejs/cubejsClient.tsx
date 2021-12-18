import cubejs from "@cubejs-client/core";

const ACCESS_TOKEN = process.env.CUBEJS_TOKEN!;
const API_BASE_URL = "https://cube-ae.overlayanalytics.com";

const cubejsClient = cubejs(ACCESS_TOKEN, {
  apiUrl: `${API_BASE_URL}/cubejs-api/v1`,
});

export default cubejsClient;
