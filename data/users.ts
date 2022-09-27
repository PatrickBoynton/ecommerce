import bcrypt from "bcryptjs"

const users = [
	{
	    name: "Admin User",
	    email:"admin@example.com",
		  password:bcrypt.hashSync("safepass1", 10),
		  isAdmin:true,
	},
	{
	    name: "Patrick",
	    email: "p@p.com",
		 password:bcrypt.hashSync("safepass1", 10),
	},
	{
	    name: "Jane",
	    email: "j@j.com",
		  password:bcrypt.hashSync("safepass1", 10),
	},
	{
	    name: "John",
	    email: "jo@jo.com",
		 password:bcrypt.hashSync("safepass1", 10),
	},
]

export default users