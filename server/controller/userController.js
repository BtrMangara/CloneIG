const {Users} = require('../models');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const { where } = require('sequelize');
require('dotenv')

class userController{

    static async getUser(req,res){
        try {
            const result = await Users.findAll();

            res.status(200).json(result);
        } catch (error) {
            res.status(404).json(error.message)
        }
    }
    

    static async register(req,res){
        try {
            const {username,email,password} = req.body;
            const image = 'https://via.placeholder.com/100';
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password,salt);
            console.log(hashPassword);

            const result = await Users.create({
                username,email,password:hashPassword,image
            },{returning:true})

            res.status(200).json({
                message: 'Anda Berhasil Mendaftar',
                result
            });

        } catch (error) {
            res.status(404).json(error.message)
        }
    }

    static async deleteUser(req,res){
        try {
            const id = req.params.id
            const result = await Users.destroy({
                where:{id}
            })
            result === 1
            ? res.status(200).json({
                message:"User Berhasil Dihapus",
                result
            })
            : res.status(400).json({message:`Data Dengan Id ${id} Tidak Ditemukan`})
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async getDetailUser(req,res){
        try {
            const id = req.params.id;
            const result = await Users.findOne({where:{id}})
            result === null
            ? res.status(400).json({message:`Data Dengan Id ${id} Tidak Ditemukan`})
            : res.status(200).json({
                message:"Data Ditemukan",
                result
            })
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async updateUser(req,res){
        try {
            const id = req.params.id;
            const  {username,email,password,image} = req.body;
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password,salt);
            const result = await Users.update({
                username,
                email,
                password:hashPassword,
                image
            },{
                where:{id},
                returning:true
            });
            result[0] === 1
            ?res.status(200).json({
                message:'Data Berhasil Diubah',
                result
            })
            :res.status(404).json({message:`Data Dengan id ${id} Tidak Ditemukan`})
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async login(req,res){
        try {
            const {email,password} = req.body;
            const user = await Users.findOne({
                where : {email}
            });

            if(user){
                if(bcrypt.compareSync(password, user.password)){
                    const token = Jwt.sign({username:user.username,id:user.id,createdAt:user.createdAt},
                        process.env.SECRET_KEY);
                    res.status(200).json({
                        message:'Anda Berhasil Login',
                        token
                    })
                }
                else{
                    res.status(402).json({message:'Maaf Password Anda Salah, Silahkan Periksa Kembali'})
                }
            }
            else{
                res.status(400).json({message:`Maaf,Email ${email} Tidak Terdaftar`})
            }
            // res.send(user)
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    

}

module.exports = userController;