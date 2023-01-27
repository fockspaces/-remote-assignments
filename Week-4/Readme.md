# Week-4 Assignment

Status: In progress

[Week-4 Note](https://www.notion.so/Week-4-Note-008ade6331c846daaa87ed7ac63f1d8b)

### Assignment 1: Asynchronous function

**思路 :**

**A. Complete the function below to show a delayed result in the console.**

套用 setTimeout function 即可

**B. To implement delayedResult again using promise this time. It should look like:**

這邊要用到 promise，並且在 promise callback function 傳入 resolve, reject 來 handle input

**C. To implement it using async/await this time.**

改以 async function 實作

### Assignment 2: Callback Function and Advanced HTML DOM

**思路 :**

將 Fetch API 得到的 data 轉為 json type 讀取，並且用 createElement 來將資訊 append 到 html 上

### Assignment 3: Build a Website with MySQL

**SQL 常見操作**

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

callback function 不能直接回傳 data，必須轉為 promise 接收資料

📄 [next 怎麼用?](https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express)

**🚧 Todo :**

- [x] API only send data, so turn the redirect to ajax
- [x] 前後端分離
  因為不像 React script 那麼方便，決定改為用 views
- [ ] Validated From (give alert if not match)
- [ ] welcome message with req.flash
- [ ] password hash (with bcrypt)
- [x] MVC
- [x] check if account has been registered
- [ ] list all of the accoounts and delete button
- [ ] req.session restore
- [ ] textarea 偵測換行
      📄 [不換行的原因](https://adminhk.com/%E5%9C%A8html%E5%96%AE%E8%A1%A8%E7%9A%84-textarea%E6%8F%9B%E8%A1%8C%EF%BC%8C%E7%94%A8php%E4%BF%9D%E5%AD%98%E5%BE%8C%E5%8D%BB%E6%B2%92%E6%9C%89%E6%8F%9B%E8%A1%8C-nl2br/)
      解決方法 : 在 display tag 加上`style="white-space: pre-line"`
- [x] auth post id
- [ ] add right-menu(float) to display all accounts (name and login status)
- [ ] use avatar icon to recognize each user (and show on article title)
- [ ] hide edit and delete btn when not auth

### Assignment 4: Design Table Schema (Advanced Optional)

**思路 :**

在每一篇文章記下 author_id 後即可用 LEFT JOIN refer back author data

### 🚧 開發流程

**Crud**

- [x] 設定 Expree server
- [x] make views folder
- [x] set routes users
  GET /users : 有登入/未登入兩種呈現畫面 (登入時列出該使用者寫的文章)
  GET /users/accounts : 得到所有 accounts data
  POST /users/signup : 註冊
  POST /users/login : 登入
- [x] setup routes articles
  index, article, new, edit
  基於 article id 來導入 edit 畫面
  use \***\*method-override\*\***

**Styling**

- [x] Apply Bootstrap to page
- [x] navbar(Homepage, Register, Login, Articles)
- navbar 左右對齊的範例 :
  ```jsx
  nav(class="navbar navbar-expand-lg navbar-dark bg-dark")
          .container-fluid
              a(class="navbar-brand" href="/") Blog Posts
              button(class="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false"
                  aria-label="Toggle navigation")
                  span(class="navbar-toggler-icon")
              div(class="collapse navbar-collapse" id="navbarNavAltMarkup")
                  .navbar-nav.me-auto.mb-2.mb-lg-0
                      a(class="nav-link active" aria-current="page" href="/article") Articles
                  div(class="navbar-nav ml-auto")
                      a(class="nav-link" href="#") SignUp
                      a(class="nav-link" href="#") Login
  ```
- [x] styling each article (card)
  author name : text-muted
  author icon : using API to generate
- [x] styling form (return btn)

Cookie / Session

- [ ]
