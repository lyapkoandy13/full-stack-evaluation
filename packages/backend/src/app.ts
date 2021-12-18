import "dotenv/config";
import express from "express";
import jsonRoute from "./routes/json.route";
import delayRoute from "./routes/delay.route";
import encodeRoute from "./routes/encode.route";
import decodeRoute from "./routes/decode.route";
import notFoundMiddleware from "./middleware/notFound.middleware";
import errorMiddleware from "./middleware/error.middleware";

const PORT = parseInt(process.env.PORT || "5000"); // Windows has a problem running on string port
const HOST = process.env.HOST || "localhost";

const app = express();
app.use(express.json());

app.use("/json", jsonRoute);
app.use("/delay", delayRoute);
app.use("/encode", encodeRoute);
app.use("/decode", decodeRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`Started server on http://${HOST}:${PORT}/`)
);
