# Week-4 Assignment

Status: In progress

[Week-4 Note](https://www.notion.so/Week-4-Note-008ade6331c846daaa87ed7ac63f1d8b)

## Assignment 1: Asynchronous function

### **思路 :**

**A. Complete the function below to show a delayed result in the console.**

套用setTimeout function即可

**B. To implement delayedResult again using promise this time. It should look like:**

這邊要用到promise，並且在promise callback function傳入resolve, reject來handle input

**C. To implement it using async/await this time.**

改以async function實作

## Assignment 2: Callback Function and Advanced HTML DOM

### **思路 :**

將Fetch API得到的data轉為json type讀取，並且用createElement來將資訊append到html上

## Assignment 3: Build a Website with MySQL

### **SQL常見操作**

打開mysql方法 :

`sudo service mysql start`

`mysql -u root -p`

**dump sql file**

`mysqldump -u root -p assignment > backup.sql`

backup sql file

`mysql -u root -p assignment < backup.sql`

### **Data Schema :**

📄 [email data type](https://www.notion.so/Week-4-Assignment-35a6648e88594d30b9bbaa87b408cc91) 

📄 [mysql cheatsheet](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)

📄 [data type選擇](https://www.yiibai.com/mysql/text.html)

### **home page :**

📄 [handling form](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms) (注意要用express parser來resolve req.body)

📄 [用axios post method](https://ithelp.ithome.com.tw/articles/10253259)

### **把data送至資料庫 :**

📄 [sql在``中的value要多補’’來轉回字串](https://stackoverflow.com/questions/49821318/how-to-insert-data-into-mysql-table-using-node-and-express)

📄 [express with mysql](https://dotblogs.com.tw/explooosion/2016/07/18/010601)

📄 [way to send back data from model](https://stackoverflow.com/questions/71262608/in-node-js-how-to-return-mysql-results-from-a-function)

callback function不能直接回傳data，必須轉為promise接收資料

📄 [next怎麼用?](https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express)

### **🚧 Todo :**

- [x]  API only send data, so turn the redirect to ajax
- [x]  前後端分離
    
    因為不像React script那麼方便，決定改為用MVC
    
- [x]  Validated From (give alert if not match)
- [x]  welcome message with req.flash
- [x]  password hash (with bcrypt)
- [x]  check if account has been registered
- [x]  req.session restore
- [x]  textarea偵測換行
    
    📄 [不換行的原因](https://adminhk.com/%E5%9C%A8html%E5%96%AE%E8%A1%A8%E7%9A%84-textarea%E6%8F%9B%E8%A1%8C%EF%BC%8C%E7%94%A8php%E4%BF%9D%E5%AD%98%E5%BE%8C%E5%8D%BB%E6%B2%92%E6%9C%89%E6%8F%9B%E8%A1%8C-nl2br/)
    
    解決方法 : 在display tag加上`style="white-space: pre-line"`
    
- [x]  auth post id
- [x]  hide edit and delete btn when not auth
- [x]  make posts to N*3 grid display
- [x]  logout option
- [x]  catch async
- [x]  reformat form
- [x]  fadeout alert
- [x]  one logout, others remains login
    
    不同的browser會有不同connect_sid，當執行session.destroy()時，並不會刪除其他client的session
    

## Assignment 4: Design Table Schema (Advanced Optional)

### **思路 :**

在每一篇文章記下author_id後即可用LEFT JOIN refer back author data

這裡用author_id作為foreign key的原因是，id為unique value，如果用name match可能會出現重複author name 

## 🚧開發流程

### 🆕 **CRUD**

- [x]  設定Expree server
- [x]  make views folder
- [x]  set routes users
- [x]  setup routes articles
    
    index, article, new, edit
    
    use ****method-override****
    

### 💈 **Styling**

- [x]  Apply Bootstrap to page
- [x]  navbar(Homepage, Register, Login, Articles)
- navbar左右對齊的範例 :
    
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
    
- [x]  styling each article (card)
- [x]  styling form (return btn)

### 🍪 Cookie / Session

- [x]  用cookie, session儲存登入狀態
    
    session在middleware確認為登入後，會將isLoggedIn傳入client作為cookie
    
    session default不會store在real database，之後可以改存到redis/mongo作為backup
    
- [x]  flash to show alert message
- [x]  session寫入local file觀察

### 🔒 Password Authentication & Authorization

- [x]  CRUD權限修改
    
    用session存取登入時的資訊進currentUser
    
    set permission to aviod someone use postman method to delete post
    
- [x]  Hash Password (bcrypt)
    
    透過genSalt產生一組序號，以此作為signature來對應特定的output
    

### 🚹 Member Page

- [x]  show list of articles from this user
- [x]  CRUD permission

### 💽 SQL database

- [x]  pseudo-datasets (with script)
- [x]  fetch the first one it hit (single-read)
- [x]  design table
    
    user : email, password, username
    
    article : title, content, author_id
    

### 💳 Redis cache

- [x]  使用redis server來儲存session資訊，避免server shutdown lossing data