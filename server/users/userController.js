const logger = require('./../../applogger');
const userModel = require('./userEntity').userModel;


var userController = {
      add : function(req, res){
              	logger.debug("Inside user post");
              	let db= new userModel(req.body);
              	db.save();
              	res.send("Added successfully");
              },
      find :function(req, res) {
         userModel.findOne(req.body, function(err,docs){
           if(err){
             res.send("Error:"+err);
           }
           else if(docs!=null){
             res.send(docs);
           }
           else{
             res.send("incorrect");
           }
         });
      },
      update :function(req, res) {
         userModel.update(req.body.old, req.body.new, function(err,docs){
           if(err){
             res.send("Error:"+err);
           }
           else if(docs!=null){
             res.send(docs);
           }
           else{
             res.send("not changed");
           }
         });

}
}

module.exports = userController;
