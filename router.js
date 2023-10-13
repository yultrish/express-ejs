const router = require('express').Router();

router.get('/welcome', (req, res) => {

    res.send('welcome guys');
});

router.get('/login', (req, res) => {

    res.render('pages/index', {title: "Login"} );
});

router.get('/employees', (req, res) => {
    let usr = req.query.username;
    if(!usr){
        res.redirect('/login');
    }
    else{
   
    res.render('pages/employees', {title: "Employees", user:usr} );
    }

});

router.get('/home', (req, res) => {
        let usr = req.query.username;
// if usr is not null or usr is not empty redirect to login page
  
    if(!usr){
        res.redirect('/login');
    }
    else{
        res.render('pages/home', {title: "Home", user:usr } );
    }

});

router.post('/user', (req, res) => {

    if(req.body.username != '' || req.body.username != null){
        res.json({
            username: req.body.username,
           message : "success"
        });

    }
    
});

module.exports = router;
