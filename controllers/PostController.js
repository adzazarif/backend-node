import Post from "../models/PostsModel.js";

export const getPost = async(req, res) =>{
    try {
        const response = await Post.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPostById= async(req, res)=>{
    try {
        const response = await Post.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = async(req, res)=>{
    try {
        await Post.create(req.body);
        res.status(201).json({msg: "Post Created"})
    } catch (error) {
        console.log(error.message);
    }
}

export const updatedPost = async(req, res)=>{
    try {
        await Post.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Post Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

export const deletedPost = async(req, res)=>{
    try {
        await Post.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Post Deleted"})
    } catch (error) {
        console.log(error.message);
    }
}


