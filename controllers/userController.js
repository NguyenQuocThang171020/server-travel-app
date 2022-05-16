const userSchema = require("../models/userSchema.js");
const argon2 = require("argon2");
const userController = {
  Register: async (req, res) => {
    const { username,email,phone,password } = req.body;
    if (!username || !password) {
      return res.status(401).json("Username or password is empty");
    }
    try {
      const user = await userSchema.findOne({ username });
      if (user) {
        return res.status(401).json("Username already exists");
      }
      const hash = await argon2.hash(password);
      const newUser = new userSchema({
        username: username,
        email:email,
        phone:phone,
        password: hash
      });
      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  Login: async(req, res) => {
      const {username,password} = req.body
      if (!username || !password) {
        return res.status(401).json("Username or password is empty");
      }
    try {
        const user = await userSchema.findOne({ username });
        if(!user)
        {
            return res.status(404).json("Username or password is incorrect");
        }
        const passwordHash = await argon2.verify(user.password,password)
        if(!passwordHash)
        {
            return res.status(404).json("Username or password is incorrect");
        }
        if(user && passwordHash){
            return res.status(200).json(user)
        }
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
  getAllUser:async(req,res)=>{
    try {
      const allUser = await userSchema.find()
      return res.status(200).json(allUser)
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};

module.exports = userController;
