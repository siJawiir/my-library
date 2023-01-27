# Bash for Sequelize

>> User
>> ```
>> npx sequelize-cli model:generate --name User --attributes fullname:string,phone:integer,address:string,city:string,image:string
>> ```

>> Book
>> ```
>> npx sequelize-cli model:generate --name Book --attributes pub_id:integer,title:string,price:integer,image:string,desc:string
>> ```

>> BookGenre
>> ```
>> npx sequelize-cli model:generate --name BookGenre --attributes book_id:integer,gen_id:integer
>> ```

>> Genre
>> ```
>> npx sequelize-cli model:generate --name Genre --attributes genre:string
>> ```

>> Publisher
>> ```
>> npx sequelize-cli model:generate --name Publisher --attributes pub_name:string,address:string
>> ```

>> Cart
>> ```
>> npx sequelize-cli model:generate --name Cart --attributes user_id:integer,book_id:integer,quantity:integer
>> ```

>> Auth
>> ```
>> npx sequelize-cli model:generate --name Auth --attributes username:string,email:string,password:string,role:integer,user_id:integer
>> ```
