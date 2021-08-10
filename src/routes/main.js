/*
 * Main
 * @date 2021-08-01
 * @author LCY
 */

var main = function(req, res) {
  res.render('main.ejs', {param:req});
};

var run = function(req, res) {






  
  res.render('result.ejs', {param:req});
};


module.exports.main = main;
module.exports.run = run;



