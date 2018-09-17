var express = require('express')
var router = express.Router()

var $sql = require('../server/sql.js')
var connection = require('../server/db.js')

/* GET users listing. */
router
  .post('/login', function (req, res) {
    var params = req.body
    console.log('....', params)
    connection.query($sql.user.login, [params.name, params.pwd], function (err, ret) {
      if (err) { throw err }
      // 没错
      if (ret.length > 0) {
        res.send({
          status: 0,
          msg: '登陆成功!'
        })
      } else {
        console.log('没有此数据')
        res.send({
          status: 1,
          msg: '账户名或密码错误'
        })
      }
    })
  })
  .post('/register', function (req, res) {
    var params = req.body

    connection.query($sql.user.add, [params.name, params.pwd], function (err, ret) {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY' && err.errno === 1062) {
          res.send({
            status: 1062,
            msg: '该用户已被注册,请尝试输入其他账号!'
          })
        } else {
          res.send({
            status: 1063,
            msg: err.Error
          })
          throw err
        }
      }
      if (ret) {
        if (ret.affectedRows > 0) {
          res.send({
            status: 0,
            msg: '注册成功!'
          })
        }
      }
    })
  })
module.exports = router
