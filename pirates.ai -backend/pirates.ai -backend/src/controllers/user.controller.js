const userService=require("../services/user.service")

const getUserProfile = async (req, res) => {
    try {
      // Extracting the user ID from the request parameters
      const userID = req.params.id;
  
      // Validate if the userID is provided
      if (!userID) {
        return res.status(400).json({ error: 'User ID is required' });
      }
  
      // Query the user by ID
      const user = await userService.findUserById(userID);
  
      // If the user is not found, return a 404 error response
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // If the user is found, return the user profile data
      return res.status(200).json({ success: true, user });
    } catch (error) {
      // If any error occurs during the process, return a 500 error response
      console.log("error from controller - ", error);
      return res.status(500).json({ error: error.message });
    }
  };
  
const getAllUsers=async(req,res)=>{
    try {
        const users=await userService.getAllUsers()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


const jwtProvider = require("../config/jwtProvider");
//@desc Authenticate User & Get Token
//@route POST /api/v1/auth/login

const getUserIdFromToken = async (req, res) => {
    try {
        // Extracting the token from the request headers or body
        const token=req.headers.authorization?.split(" ")[1]

        // Check if the token is provided
        if (!token) {
            return res.status(400).json({ error: 'Token is required' });
        }

        // Extract user ID from the token
        const userId = jwtProvider.getUserIdFromToken(token);

        // If the user ID is extracted successfully, return it
        return res.status(200).json({ success: true, userId });
    } catch (error) {
        // If any error occurs during the process, return a 500 error response
        console.log("Error from controller - ", error);
        return res.status(500).json({ error: error.message });
    }
};


module.exports={getUserProfile,getAllUsers,getUserIdFromToken}