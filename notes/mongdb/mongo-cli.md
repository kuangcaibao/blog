使用 mongo.exe 查看或者操作数据库。

3个概念：db, collection, doc

# db

	> show dbs

显示所有的的数据库名称

	> use <db>

切换到某个数据库

# collection - 表

	> db.getCollectionNames()

获取当前数据库中的所有表

	> db.<collection name>.drop()

清空某个 collection 的数据

	> db.<collection name>.find()

显示某个 collection 的所有 doc