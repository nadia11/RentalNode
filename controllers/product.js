
const Product = require('../models').Products

module.exports = {
  
  // get all products

  getAllProducts: ( req, res ) => {

    Product.findAll( {
    }).then(products => {
      return res.status(200).json({
        products
      })
    }).catch(err => {
      return res.status(400).json({err})
    })
  },

  // get single Product by id

  getSingleProduct:(req, res) => {
    let productId = req.params.id

    Product.findAll({
      where: {
        id: productId
      }
    })
      .then((Product) => {
        return res.status(200).json({Product})
      }).catch(err => {
      return res.status(400).json({err})
    })
  },

// delete Product by id

  deleteSingleProduct: (req, res) => {
    let productId = req.params.id

    Product.destroy({
      where: {id: productId}
    }).then(() =>{
      return res.status(200).json({
        "message": "Product Deleted successfully"
      })
    }).catch(err =>{
      return res.status(400).json({error})
    })

  },

// delete all products

  deleteAllproducts: (req, res) => {
    Product.destroy({
      truncate: true
    }).then(() => {
      return res.status(200).json({
        success: true,
        "message": "All products deleted"
      })
    }).catch(err => {
      return res.status(400).json({
        err
      })
    })
  },






}