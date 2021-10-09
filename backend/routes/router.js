const express = require("express");
const router = express.Router();
// const { addNew } = require('../controller/dataController');
const upload = require('../utils/Multer');
const Data = require('../model/dataModel');



router
.route('/new')
.post(upload.single('photo'), (req, res) => {
    
    try {
        const username = req.body.username;
        const photo = req.file.filename;

        const newData = {
            username,
            photo
        }

        const storeData = new Data(newData);

        storeData.save()
        .then(() => {
            res.status(200).json({
                success: true,
                data: newData
            })
        })
        .catch(() => {
            res.status(400).json({
                success: false,
                msg: "Error"
            })
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
    
});




router.get('/',  async (req, res) => {

    try {
        
        const allData = await Data.find();

        return res.status(200).json({
            success: true,
            count: allData.length,
            data: allData
        })

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }

})

router.get('/:id',  async (req, res) => {

    try {

        const id = req.params.id
        
        const dataID = await Data.findById(id);

        if (!dataID) {
            return res.status(404).json({
                success: false,
                msg: "Not Found"
            })
        }

        return res.status(200).json({
            success: true,
            data: dataID
        })

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }

});



router.delete('/:id',  async (req, res) => {

    try {

        const id = req.params.id
        
        const dataID = await Data.findById(id);

        await dataID.remove();


        return res.status(200).json({
            success: true,
            msg: 'Delete successfull!'
        })

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }

})

module.exports = router;