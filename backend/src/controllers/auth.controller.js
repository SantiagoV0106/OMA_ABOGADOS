import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
export const register = async (req, res) => {
    const { email, password, username } = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10)
        
        const newUser = new User({
            email,
            password : passwordHash,
            username
        })
        console.log(newUser);
        const userSaved = await newUser.save()
        res.json({
            id : userSaved._id,
            username : userSaved.username,
            email : userSaved.email
        })

    } catch (error) {
        console.error(error);
    }


}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.find(
            (user) => {
                user.email === User.email
            }
        )

        if (!userFound) return res.status(400).json({ message: "User not found" })

    } catch (error) {

    }
}