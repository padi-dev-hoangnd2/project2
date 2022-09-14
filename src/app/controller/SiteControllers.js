class SiteControllers {
    // GET /home

    index(req,res,next){
        res.render('home')
    }


}
module.exports = new SiteControllers(); // xuất dữ liệu
