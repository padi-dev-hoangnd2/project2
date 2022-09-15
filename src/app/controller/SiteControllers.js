
const db = require('../../models/index')

class SiteControllers {
    // GET /home

    // index = async(req,res) => {
    //     try {
    //         let data = await db.User.findAll()

    //         console.log(data)

    //         return res.render('home')

    //     }
    //     catch(e){
    //         console.log(e)
    //     }
       

    // }
    index(req,res,next){
        db.User.findAll()
        .then(data =>{
            
            res.render('home',{
                data: JSON.stringify(data)
            })

        })
        .catch(next)
    }


}
module.exports = new SiteControllers(); // xuất dữ liệu
