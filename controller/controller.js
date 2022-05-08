const ProductsModel =  require('../model/post_model')

exports.showIndex = (req,res) =>{
    res.send("Running Node API")
}

exports.addProducts = (req,res) =>{
    const post = new ProductsModel({
        id:req.body.id,
        title:req.body.title,
        routeName:req.body.routeName,
        items:req.body.items
    })
    post.save()
    .then(
        data =>{
            res.send(data)
        }).catch(err => {res.send(err)})
}

exports.showProducts = (req,res) =>{
    ProductsModel.find()
    .then(result =>{
        res.send(result)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
}

exports.getCategoryItems = (req,res) => {
    ProductsModel.findById(req.params.id)
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.send(err)
    })
}

exports.updateCategory = (req,res) =>{
    ProductsModel.findById(req.params.id, (err, category) =>{
        if(err)
        res.send(err)
        category.title = req.body.title ? req.body.title : category.title
        category.routeName = req.body.routeName ? req.body.title : category.routeName

        category.save((err) =>{
            if(err)
            res.send(err)
            res.json({
                message: "Category updated.",
                data: category
            })
        })
    })
}

exports.deleteCategory = (req,res) =>{
    ProductsModel.remove({
        _id:req.params.id
    },(err) =>{
        if(err)
        res.send(err)

        res.json({
            status: "Success",
            message: "Successfully deleted"
        })
    })
}