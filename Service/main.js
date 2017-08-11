
const sql = require('mssql');
const config = {
    user: 'sa',
    password: 'nailcutter',
    server: 'W0044962',
    database: 'HandbookNew',
    options: {
        trustedConnection: true,
        port: '45179',
        instanceName: 'SQL2012'
    }
};

var flag = true;

console.log('loop');

var http = require('http');
var express = require('express'), cors = require('cors');
var mongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://localhost:27017/Handbook';


var service = express();
var port = 4300;
service.listen(port);
service.use(cors());

var GetNavigationList = function (req, res) {
    /*
    var menuList = [];
    const pool = new sql.ConnectionPool(config);
    pool.connect(err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Database Connection successful');
            var req = new sql.Request(pool);
            req.multiple = true;
            req.query('SELECT * from menu order by ID desc', (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    for (var i = 0; i < result.recordset.length; i++) {
                        var menu = {
                            id: result.recordset[i].ID,
                            name: result.recordset[i].Name,
                            parentID: result.recordset[i].ParentID,
                            children: null
                        }
                        menuList.push(menu);
                    }

                    req.query('SELECT distinct ParentID from menu where ParentID is not null order by ParentID desc ', (subErr, subResult) => {
                        if (subErr) {
                            console.log(subErr);
                        }
                        else {
                            for (var i = 0; i < subResult.recordset.length; i++) {
                                var children = menuList.filter(function (menu) {

                                    return menu.parentID === subResult.recordset[i].ParentID;
                                });

                                for (var j = 0; j < menuList.length; j++) {
                                    if (menuList[j].id === subResult.recordset[i].ParentID) {
                                        menuList[j].children = children;
                                        break;
                                    }
                                }
                            }
                            var finalList = menuList.filter(function (menu) {
                                return menu.parentID === null;
                            });
                            console.log(finalList);
                            res.setHeader('Content-Type', 'application/json');
                            res.end(JSON.stringify(finalList.sort(function (menu1, menu2) {
                                return menu1.id - menu2.id;
                            })));
                            pool.close();
                        }
                    });
                }
            });
        }
    });
    */

    mongoClient.connect(mongoURL, function (err, db) {
        if (err) {
            console.log(err);
        }
        else {
            db.collection('Menu').find().toArray(function (err, result) {
                if (err) {
                    console.log('2nd' + err);
                }
                else {
                    console.log(JSON.stringify(result));
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(result));
                    db.close();
                }
            });
        }
    });
}

var GetNavigationContent = function (req, res) {
    const pool = new sql.ConnectionPool(config);
    pool.connect(err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Connected to Database');
            var dbReq = new sql.Request(pool);
            dbReq.multiple = true;
            dbReq.query(' SELECT T1.Title,T1.URL, T2.Name FROM [dbo].[MenuLinks] AS T1 ' +
                'JOIN [dbo].[Menu] AS T2 ON T1.MenuID = T2.ID ' +
                'WHERE T1.MenuID = ' + req.params.id, (err, result) => {
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(result.recordset));
                        res.end('Hello World');
                        pool.close();
                    }
                });

        }
    });
}

service.route('/GetNavigationList').get(GetNavigationList);
service.route('/GetNavigationContent/:id').get(GetNavigationContent);

console.log('Server running on ' + port);

