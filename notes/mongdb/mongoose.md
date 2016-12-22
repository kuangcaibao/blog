### mongodb 分页查询

查询第一页数据

	db.test.find().sort({"age": 1}).limit(2)

以 `age` 字段升序排序，取前2条数据。

查询第二页数据

	db.test.find().sort({"age": 1}).skip(2).limit(2)

跳过2条记录，取剩下的记录中的前2条记录。