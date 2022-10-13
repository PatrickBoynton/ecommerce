import { Request, Response } from "express"
import User from "../data/models/User"
import generateToken from "../utils/generateToken"
import { GetUserAuthInfoRequest } from "../data/interfaces/GetUserAuthInfoRequest"

export const authenticateUser =  async (req: Request, res: Response) => {
	const { email, password } = req.body

	const user: any = await User.findOne({where: { email } })

	try {
		const isMatch = await user.comparePassword(password)

		if (isMatch) {
			const loginUser = {
				id: user.id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user.id)
			}

			return res.status(200).json(loginUser)
		}
	} catch(e: any) {
		console.log(e.message)
		return res.status(401).send({message:  "Invalid email or password." })
	}
	return res.status(500).send("ERROR")
}

export const getUserProfile = async (req: GetUserAuthInfoRequest, res: Response) => {
	const {id} = req.user
	const user: any = await User.findByPk(id)

	try {
		if(user) {
			return res.json({
				id: user.id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin
			})
		} else {
			res.status(404)
			throw new Error("IUser not found.")
		}
	} catch(e: any) {
		console.error(e.message)
		return res.status(500).send("Server Error.")
	}
}

export const createUser = async (req: Request, res: Response) => {
	const { name, email, password } = req.body
	const userExists = await User.findOne({where: { email} })

	try {
		if (userExists) {
			res.status(400).send("IUser already exists.")
		}

		const user: any = await User.create({
			name,
			email,
			password
		})
		
		if(user) {
			res.status(200).send({
				id: user.id,
				name: user.name,
				isAdmin: user.isAdmin,
				token: generateToken(user.id)
			})
		} else {
			res.status(400).send("Invalid user data.")
		}
	} catch(e: any) {
		console.error(e.message)
		return res.status(500).send("Server Error.")
	}
}