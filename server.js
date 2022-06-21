const express = require('express')
const app = express()
const cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb')
require('dotenv').config()

let db, 
    dbConnectionStr = process.env.DB_STRING
    dbName = 'sample_mflix',
    collection