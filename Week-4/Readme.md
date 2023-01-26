# Week-4 Assignment

Status: In progress

[Week-4 Note](https://www.notion.so/Week-4-Note-008ade6331c846daaa87ed7ac63f1d8b)

[https://github.com/fockspaces/remote-assignments](https://github.com/fockspaces/remote-assignments)

### Assignment 1: Asynchronous function

**思路 :**

> **A. Complete the function below to show a delayed result in the console.**

套用 setTimeout function 即可

> **B. To implement delayedResult again using promise this time. It should look like:**

這邊要用到 promise，並且在 promise callback function 傳入 resolve, reject 來 handle input

> **C. To implement it using async/await this time.**

改以 async function 實作

### Assignment 2: Callback Function and Advanced HTML DOM

將 Fetch API 得到的 data 轉為 json type 讀取，並且用 createElement 來將資訊 append 到 html 上

### Assignment 3: Build a Website with MySQL

- **SQL 常見操作**
  打開 mysql 方法 :
  `sudo service mysql start`
  `mysql -u root -p`
  **dump sql file**
  `mysqldump -u root -p assignment > backup.sql`

**Data Schema :**

📄 [email data type](https://www.notion.so/Week-4-Assignment-35a6648e88594d30b9bbaa87b408cc91)

📄 [mysql cheatsheet](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)

📄 [data type 選擇](https://www.yiibai.com/mysql/text.html)

**home page :**

📄 [handling form](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms) (注意要用 express parser 來 resolve req.body)

📄 [用 axios post method](https://ithelp.ithome.com.tw/articles/10253259)

**把 data 送至資料庫 :**

📄 [sql 在``中的 value 要多補’’來轉回字串](https://stackoverflow.com/questions/49821318/how-to-insert-data-into-mysql-table-using-node-and-express)

📄 [express with mysql](https://dotblogs.com.tw/explooosion/2016/07/18/010601)

📄 [way to send back data from model](https://stackoverflow.com/questions/71262608/in-node-js-how-to-return-mysql-results-from-a-function)

📄 [next 怎麼用?](https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express)

callback function 不能直接回傳 data，必須轉為 promise 接收資料

🚧 Todo :

- [ ] API only send data, so turn the redirect to ajax
- [ ] button to switch form type
- [x] 前後端分離

因為不像 React script 那麼方便，決定改為用 views

- [ ] Validated From (give alert if not match) (with req.flash)
- [ ] password hash
- [x] MVC

實現 MVC 架構

- [ ] data sechema
- [ ] check if account has been registered
- [ ] list all of the accoounts and delete button
- [ ]

### Assignment 4: Design Table Schema (Advanced Optional)

📄 [setup mysql file](https://www.sqlshack.com/learn-sql-sql-script/)
