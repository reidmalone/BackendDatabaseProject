var express = require('express');
var dbCalls = require('../models/models');
var router = express.Router();

router.get('/getAllCeos', function(req,res){
    dbCalls.getCeos(function (err, result) {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

router.get('/getAllSectors', function(req,res){
    dbCalls.getSectors(function (err, result) {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

router.get('/getSectorCeoSalarySum', function(req,res){
    dbCalls.getSectorCeoSalarySum(function (err, result) {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

router.get('/getCompanies', function(req,res){
    dbCalls.getCompanies(function (err, result) {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

router.get('/getCompanyInfo/:ticker', function (req, res, next) {
    dbCalls.getCompanyInfo(req.params, function (err, result) {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

router.get('/getPriceData/:ticker', function (req, res, next) {
    dbCalls.getDailyPrices(req.params, function (err, result) {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});
module.exports = router;
