import { Request, Response } from "express";


export const getFibonacciNumber = ( req: Request, res: Response ): void => {

    const { number } = req.params;

    const fibonacci = ( n: number ): number => Math.round( 
            ( Math.pow( (1 + Math.sqrt(5)), n ) - Math.pow( (1 - Math.sqrt(5)), n ) ) 
            / (Math.pow(2, n) * Math.sqrt(5)) 
        );


    res.json( fibonacci(parseInt(number)) );
};