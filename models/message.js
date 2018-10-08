var mongoose = require('../modules/database.js');

var schema = new mongoose.Schema({
    // type: (一级回复,二级回复，关注，收藏),也可再建一个类型表
    type: {
        type: String,
        required: true
    },
    // 发消息的人的ID
    fromUserId: {
        type: String,
        required: true,
        ref: 'users'
    },
    // 消息发给谁
    toUserId: {
        type: String,
        required: true,
        ref: 'users'
    },
    // 收藏文章的ID（只在收藏文章时填写）
    articleId: {
        type: String,
        ref: 'articles'
    },
    // 回复的ID(二级回复时填写)
    replyId: {
        type: String,
        ref: 'replies'
    },
    readFlag: {
        type: Boolean,
        default: false
    },
    createTime: {
        type: Date,
        default: Date.now
    }
});

schema.statics = {

}

var Model = mongoose.model('messages', schema);

module.exports = Model;