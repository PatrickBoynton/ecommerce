import jwt, { JwtPayload } from "jsonwebtoken"
import User from "../data/models/User"
import { NextFunction, Response } from "express"
import dotenv from "dotenv"
import path from "path"
import { GetUserAuthInfoRequest } from "../data/interfaces/GetUserAuthInfoRequest"

dotenv.config({path: path.join(__dirname, "../config", ".env")})

// The interface on req is to allow TS to recognize req.user.
const protect = async (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
	let token
	const {authorization} = req.headers
	const { SECRET } = process.env

	try {
		if(authorization && authorization.startsWith("Bearer")) {
			token = authorization.split(" ")[1]

			const decoded = jwt.verify(token, SECRET as string) as JwtPayload

			const user = await User.findOne({
				where: {
					id: decoded.id
				},
				attributes: {
					exclude: ["password"]
				}
			})

			req.user = user

			next()
		}

		if(!token) {
			res.status(401)
			throw new Error("Invalid credentials.")
		}
	} catch(e: any) {
		console.log(authorization)
		console.error(e.message)
		return res.status(500).send({message: "Internal server error."})
	}

	next()
}

export default protect