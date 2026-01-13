import { Router } from "express";
const routerTest = Router();

routerTest.get("/teste", (req, res) => {
    res.send("Rota de teste funcionando!");
});
export default routerTest;
