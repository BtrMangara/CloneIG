const jwt = require("jsonwebtoken");
const { Posts, Users } = require("../models");
require("dotenv");

class postController {
  
  static async getAllPost(req, res) {
    try {
      const result = await Posts.findAll({
        include: [Users],
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  static async getPost(req, res) {
    try {
      const result = await Posts.findAll({ where: { status: true } });
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  static async getPostUser(req, res) {
    try {
      const token = req.headers.authorization;
      const UserId = jwt.verify(token, process.env.SECRET_KEY).id;
      // console.log(UserId)
      const result = await Posts.findAll({ where: { UserId } });
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  static async addPost(req, res) {
    try {
      const token = req.headers.authorization;
      const { caption, image, status } = req.body;
      const UserId = jwt.verify(token, process.env.SECRET_KEY).id;
      const result = await Posts.create(
        {
          caption,
          image,
          status,
          UserId,
        },
        { returning: true }
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  static async deletePost(req, res) {
    try {
      const id = req.params.id;
      const result = await Posts.destroy({
        where: { id },
        returning: true,
      });
      res.status(200).json({
        message: "Data Berhasil Dihapus",
        data: result,
      });
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  static async getDetailPost(req, res) {
    try {
      const id = req.params.id;
      const result = await Posts.findOne({ where: { id } });

      result === null
        ? res.status(404).json({ message: "Data Tidak Ditemukan" })
        : res.status(200).json({
            message: "Data Berhasil Ditemukan",
            result,
          });
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  static async updatePost(req, res) {
    try {
      const id = req.params.id;
      const { caption, image, status, UserId } = req.body;
      const result = await Posts.update(
        {
          caption,
          image,
          status,
          UserId,
        },
        {
          where: { id },
          returning: true,
        }
      );
      result[0] === 1
        ? res.status(200).json({
            message: "Data Berhasil Diubah",
            result,
          })
        : res
            .status(404)
            .json({ message: `Data Dengan id ${id} Tidak Ditemukan` });
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  static async updateStatus(req, res) {
    try {
      const status = req.body.status;
      const id = req.params.id;
      const result = await Posts.update(
        {
          status: status,
        },
        {
          where: { id },
          returning: true,
        }
      );
      result[0] === 1
        ? res.status(200).json({
            message: "Status Berhasil Diubah",
            result,
          })
        : res
            .status(404)
            .json({ message: `Data Dengan id ${id} Tidak Ditemukan` });
    } catch (error) {
      res.status(404).json(error.message);
    }
  }
}

module.exports = postController;
