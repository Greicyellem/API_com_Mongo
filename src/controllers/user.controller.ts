import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Request, Response} from 'express';
import User from '../models/user.model';

const saltRounds = 10;
const jsonSecret = 'MinhaSenhaJSONwebToken#2023'

export const createUser = async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.user_password, saltRounds);
        
        req.body.user_password = hashedPassword;

        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const idToDelete = new mongoose.Types.ObjectId(req.params.id);
        const deletedUser = await User.findOneAndDelete(idToDelete);
        res.status(200).json(deletedUser);

               
    }catch (error) {
        res.status(500).json(error);
    }
}

export const authUser = async (req: Request, res: Response) => {
    const { user_username, user_password } = req.body;

    const user = await User.findOne({'user_username': user_username});

    if(!user){
        res.status(500).json({'error': 'Usuário não encontrado'});
        return;
    }

    const isPassValid = await bcrypt.compare(user_password, user.user_password);

    if(!isPassValid){
        res.status(500).json({'error': 'Senha não encontrada'});
        return;
    }


    const token = jwt.sign({user_id: User}, jsonSecret, {expiresIn: '30m'})
    
    res.json({'token': token, 'user': user});

}