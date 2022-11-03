import { Request, Response } from "express"

export const getCart = async (req: Request, res: Response) => {
	res.send("GET CART")
}

export const postCart = async (req: Request, res: Response) => {
	res.send("POST CART")
}
