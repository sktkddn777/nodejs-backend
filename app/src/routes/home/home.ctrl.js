"use strict";

const users = {
    id: ["user1", "user2", "user3"],
    pw: ["password1", "password2", "password3"],
}


const output = {
    hello: (req, res) => {
        res.render("home/index");  
    },
    
    login: (req, res) => {
        res.render("home/login");  
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
        pw = req.body.pw;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
        
            if(users.pw[idx] === pw) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "failed to login",
        })
    }
}



module.exports = {
    output,
    process
};