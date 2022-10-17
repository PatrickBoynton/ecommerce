import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import path from "path"
dotenv.config({path: path.join(__dirname, "../config", ".env")})

const { SECRET } = process.env


const generateToken = (id: number) => jwt.sign({ id }, SECRET as string, {
	expiresIn: "365d",
})

export default generateToken