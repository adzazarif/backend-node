import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Post = db.define('post',{
    title: DataTypes.STRING,
    isi: DataTypes.STRING
},{
    freezeTableName: true
});

export default Post;

(async() =>{
    await db.sync();
})();