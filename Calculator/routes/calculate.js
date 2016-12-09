/**
 * http://usejsdoc.org/
 */

exports.makeCalculation=function(req,res){
	//var math = require('/mathjs');
	console.log("in");
	var x=req.param("exp");
	//console.log(req.data.status);
	
	//evaluate(x);
	
	var ans=eval(x);
	
	var json_responses;
	if(ans!==null)
	{
		
	json_responses = {"statusCode" : 200, "result" : ans};
	res.send(JSON.stringify(json_responses));
	}
else
	{
	json_responses = {"statusCode" : 401};
	res.send(json_responses);
	}
	//var ans=math.eval(x);
	//console.log(ans);
		
};


