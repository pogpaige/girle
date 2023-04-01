module.exports = {
    filterMessage: function (message) {
        
    console.log(`[${message.createdAt}] ${message.author.username}: ${message.content}`);
    }  
};