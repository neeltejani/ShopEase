const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config({ path: "Backend/config/config.env" });
app.listen(process.env.PORT, () => {
  console.log(`server is started on port http://localhost:${process.env.PORT}`);
});
connectDatabase();
