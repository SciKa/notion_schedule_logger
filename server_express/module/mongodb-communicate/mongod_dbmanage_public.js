const mongoGenerate = require('./mongod_dbmanage_generate')
const mongoNameManage = require('./mongod_dbmanage_Name')



async function makeNewDBset(dbNamenum,dbVarinum, collectionTypenum)
{
    for (var i=0; i<3;i++)
    {
        console.log(i)
        await mongoGenerate.makeNewDB(dbNamenum,dbVarinum, i, collectionTypenum)
    }
}

async function clearDBset(dbNamenum,dbVarinum, collectionTypenum)
{
    for (var i=0; i<3;i++)
    {
        console.log(i)
        await mongoGenerate.initialize(dbNamenum,dbVarinum, i, collectionTypenum)
    }
}

async function delDBset(dbNamenum,dbVarinum, collectionTypenum)
{
    for (var i=0; i<3;i++)
    {
        console.log(i)
        await mongoGenerate.deleteSelf(dbNamenum,dbVarinum, i, collectionTypenum)
        await mongoNameManage.delDBnaming(dbNamenum,dbVarinum, i, collectionTypenum)
    }
}

async function reloadDB_main(dbNamenum,dbVarinum, collectionTypenum, callback)
{
    await mongoGenerate.update(dbNamenum,dbVarinum, 1, collectionTypenum, callback)
}

async function generateDB_test(dbNamenum,dbVarinum, collectionTypenum, datestring, callback) // datestring means when to set today.
{
    await mongoGenerate.insertRandomDatepairs(dbNamenum,dbVarinum, 0, collectionTypenum,datestring, callback)
}

async function saveDB_main(dbNamenum,dbVarinum, collectionTypenum, callback)
{
    await mongoGenerate.copypaste(dbNamenum,dbVarinum, 1, collectionTypenum, dbNamenum,dbVarinum, 2, collectionTypenum, callback)
}

async function takeDBfromBackUp_test(dbNamenum,dbVarinum, collectionTypenum, callback)
{
    await mongoGenerate.copypaste(dbNamenum,dbVarinum, 2, collectionTypenum, dbNamenum,dbVarinum, 0, collectionTypenum, callback)
}

async function debug(dbNamenum,dbVarinum, dbTypenum, collectionTypenum)
{
    await mongoGenerate.debug(dbNamenum,dbVarinum, dbTypenum, collectionTypenum)
}

exports.makeNewDBset = makeNewDBset
exports.reloadDB_main = reloadDB_main
exports.generateDB_test = generateDB_test
exports.saveDB_main = saveDB_main
exports.takeDBfromBackUp_test = takeDBfromBackUp_test
exports.clearDBset = clearDBset
exports.delDBset = delDBset
exports.debug = debug