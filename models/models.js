var db = require('../dbconnection');

var dbCalls = {
    getCeos:function(callback){
        var sql_get_ceos = "SELECT * FROM CEO";
        db.query(sql_get_ceos, callback)
    },
    getSectors:function(callback){
        var sql_get_sector = "SELECT * FROM Sector";
        db.query(sql_get_sector, callback)
    },

    getSectorCeoSalarySum:function(callback){
        var sql_get_sector_salaries = "SELECT * FROM SumOfCeoSalariesBySector"
        db.query(sql_get_sector_salaries,callback);
    },

    getCompanyInfo:function(tickerSymbol,callback){
        var get_company_info = 'SELECT * FROM Company WHERE ticker = ?'
        db.query(get_company_info,[tickerSymbol.ticker],callback);
    },

    getCompanies:function(callback){
        var sql_get_companies = "SELECT * FROM Company"
        db.query(sql_get_companies,callback);
    },

    getDailyPrices:function(stock,callback){
        var sql_get_companies = "SELECT * FROM "+stock.ticker
        db.query(sql_get_companies,callback);
    }


}

module.exports = dbCalls
