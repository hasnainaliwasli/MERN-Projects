import express from 'express';
import { SignIn, SignUp } from "../controller/userController.js"
const route = express.Router()

route.post('/signup', SignUp)
route.post('/signin', SignIn)

export default route;
