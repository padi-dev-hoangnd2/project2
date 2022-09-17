
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

    //GET /
    index(req,res,next){
        db.User.findAll({raw: true})  // thêm raw: true để sử dụng dữ liệu như mongoose
        .then(data =>{
            
            res.render('home',{
                data: data
            })

        })
        .catch(next)
    }
    create(req,res){
        res.render('data/create')
    }
    
    //POST /data/store
    store(req,res){       // sử lý thêm thông tin người dùng vào cơ sở dữ liệu (khác so với mongoDB - xem ở folder nodejs)
       const data = req.body
       db.User.create({
        name: data.name,
        email: data.email,
        age: data.age,
        gender: data.gender

       })
       .then(() => res.redirect('/'))  // sau khi thêm khóa học xog trở về trang chủ
        .catch(error => {
        })
        
    }

    //GET /date/:id/edit
    edit(req,res,next){
        db.User.findByPk(req.params.id,{raw: true})
        .then(data => res.render('data/edit' ,{
            data: data
        }))
        .catch(next)
    }
    
    //PUT /data/:id

    update(req,res,next){
        const data = req.body
        db.User.update({
            name: data.name,
            email: data.email,
            age: data.age,
            gender: data.gender
        
        },

        {where: {id: req.params.id}}
        
        
        
        ) // cập nhật lại , {_id: req.params.id} là phần điều kiện
        .then(() => res.redirect('/'))  // sau khi thành công trở về trang mình mong muốn
        .catch(next)
        
    }
    
    destroy(req,res,next){
        db.User.destroy({
            where: {id: req.params.id}
        })
        .then(() => res.redirect('/'))  // sau khi thành công trở về trang mình mong muốn
        .catch(next)
        
    }


}
module.exports = new SiteControllers(); // xuất dữ liệu
