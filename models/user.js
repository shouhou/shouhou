/**
 * Shouhou
 * @authors Shouhou (shouhouml@gmail.com)
 * @date    2014-10-13 22:29:34
 * @version 1.0
 */
var mongoose = require("mongoose"); //  顶会议用户组件
var Schema = mongoose.Schema; //  创建模型
var userScheMa = new Schema({
    username: String,
    password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.user = mongoose.model('user', userScheMa); //  与users集合关联
