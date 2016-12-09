
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('CalDisp', { title: 'Express' });
};