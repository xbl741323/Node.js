var mysql      = require('mysql');
// 1. 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'xbl237413',
  database : 'nodemysql'
});
 
// 2. 连接数据库，打开冰箱门
connection.connect();
 
//3. 执行数据操作，把大象装进冰箱
connection.query('select * from users', function (error, results, fields) {
  if (error) throw error;
  console.log('查询成功！', results);
});

// connection.query('insert into users values(null,"zz","321","321@321.com")', function (error, results, fields) {
//     if (error) throw error;
//     console.log('增加成功！');
//   });

// connection.query('delete from users where id = 4', function (error, results, fields) {
//     if (error) throw error;
//     console.log('删除成功！');
//   });

// connection.query('update users set name = "pp" where name = "mm"', function (error, results, fields) {
//     if (error) throw error;
//     console.log('修改成功');
//   });
 
// 4. 关闭连接，关闭冰箱门
connection.end();

