const bcrypt = require('bcryptjs');
const UserModel = require('../Models/UserModel');

async function UserSignupController(req, res) {
    try {

        const { name, email, password } = req.body
        const user = await UserModel.findOne({ email })

        if (user) {
            throw new Error('Already User Exits')
        }
        if (!name) {
            throw new Error('Enter Your Last Name')
        }
        if (!email) {
            throw new Error('Enter Your Email')
        }
        if (!password) {
            throw new Error('Enter Your Password')
        }
        
        const salt = bcrypt.genSaltSync(10);
        const HashPassword = await bcrypt.hashSync(password, salt);
     
        if (!HashPassword) {
            throw new Error('Something Went Wrong')
        }
        const payload = {
            ...req.body,
            password: HashPassword
        }
        const UserData = new UserModel(payload)
        const SaveUser = await UserData.save()
        res.status(201).json({
            data: SaveUser,
            success: true,
            error: false,
            message: 'Register Successfully Created',
        })
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = UserSignupController;
