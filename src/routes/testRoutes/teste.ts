import { Router } from "express";
const routerTest = Router();

routerTest.get("/teste", (req, res) => {
    res.send("tudo certo!");
});
export default routerTest;
