const express = require('express')
const subscriber = require('../models/subscriber')
const router = express.Router()
const Item = require('../models/item')

//getting all
router.get('/', async (req, res) =>{
    try {
        const items = await Item.find()
        res.send(items)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})
//getting one
router.get('/:id',getItem, async (req, res) =>{

    res.json(res.item)
})
//creating one
router.post('/', async (req, res) =>{
    const item = new Item({
        name: req.body.name,
        value: req.body.value,
        price: req.body.price,
        shortDescription: req.body.shortDescription,
        description: req.body.description,
        picture: req.body.picture
    })

    try{
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch(err){
        res.status(400).json({message: err.message})
    }
    
})
//updating one
router.patch('/:id', getItem, async (req, res) =>{
    if(req.body.name != null) {
        res.item.name = req.body.name
    }
    if(req.body.value != null) {
        res.item.value = req.body.value
    }
    if(req.body.price != null) {
        res.item.price = req.body.price
    }
    if(req.body.shortDescription != null) {
        res.item.shortDescription = req.body.shortDescription
    }
    if(req.body.description != null) {
        res.item.description = req.body.description
    }
    if(req.body.picture != null) {
        res.item.picture = req.body.picture
    }

    try{
        const updatedItem = await res.item.save()
        res.json(updatedItem)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})
//deleting one
router.delete('/:id', getItem, async(req, res) =>{
    try{
        await res.item.remove()
        res.json({message: 'Deleted item'})
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

async function getItem(req, res, next){
    let item
    try{
        item = await Item.findById(req.params.id)
        if(item == null){
            return res.status(404).json({message: 'Cannot find item'})
        }
    }catch (err){
        return res.status(500).json({message: err.message})
    }
    res.item = item
    next()
}

module.exports = router