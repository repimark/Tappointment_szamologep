const express = require('express');
const router = express.Router();
const fs = require('fs');

/*
*. @return {message, data} returns a json string 
*  
*/
router.get('/', (req,res,next) => {
    fs.readFile('./data/number-store.txt','utf-8', function (err,data){
		if (err){
			res.status(200).json({
                error: err
            });
            return
		}
        res.status(200).json({
            message: '/number GET method is working',
            number: data
        });
	});
    
});
/*
*. @return {message, success, number}a json string with a message, a boolean of success, and the input number
*  @param {number} a string in req.body
*/
router.post('/', (req, res, next) => {
    const number = req.body.number.toString();
    fs.writeFile('data/number-store.txt', number, err => {
		if (err) {
		  console.error(err)
		  res.status(500).json({
              message: err
            });
		  return
		}
        res.status(200).json({
            message: 'Save number was success!',
            success: true,
            number: number
        })
	  });
    
})

module.exports = router
