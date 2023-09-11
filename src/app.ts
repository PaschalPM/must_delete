import express from "express";
import userRouter from "./users/router.js";
import productRouter from "./products/router.js";

const app = express();

app.use("/api", userRouter);
app.use('/api', productRouter)
// app.listen(7000, ()=> console.log('listening'))

export default app