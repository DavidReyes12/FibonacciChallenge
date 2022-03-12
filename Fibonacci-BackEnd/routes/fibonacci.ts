import { Router } from "express";
import { check } from "express-validator";
import { getFibonacciNumber } from "../controllers/fibonacci";
import { validateFields } from "../middlewares/validateFields";

const router = Router();

router.get( "/:number", [
    check("number", "It must be a number").isNumeric(),
    check("number", "It must be a integer number").isInt(),
    validateFields,
], getFibonacciNumber );


export default router;
