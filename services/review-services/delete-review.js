const {db} = require("../../config/config")


const deleteReview = (reviewId) => {
    return db("reviews").where("id", reviewId).del()
}

module.exports = {
    deleteReview
}