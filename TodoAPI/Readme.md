<h1 id="node.js-restful-api-for-todo-app-with-jwt-authentication">Node.js RESTful API for Todo App with JWT Authentication</h1>
<p>This is a Node.js based RESTful API that allows users to create, read, update and delete tasks in a TODO app. The API also implements JWT authentication to secure the endpoints and ensure that only authenticated users can perform CRUD operations on their own tasks.</p>
<h2 id="installation">Installation</h2>
<p>To run this project on your local machine, follow these steps:</p>
<ol>
<li>Clone the repository:</li>
</ol>
<p>`git clone <a href="https://github.com/pintu544/guruji/tree/main/TodoAPI">https://github.com/pintu544/guruji/tree/main/TodoAPI</a></p>
<ol start="2">
<li>Install dependencies:</li>
</ol>
<p><code>cd TodoApi npm install</code></p>
<ol start="3">
<li>Set environment variables:</li>
</ol>
<p>Create a <code>.env</code> file in the root directory of the project and add the following variables:</p>
<p><code>PORT=8000, MONGO_URI="mongodb://localhost:todoapi", JWT_SECRET=secretkey</code></p>
<ol start="4">
<li>Run the application:</li>
</ol>
<p><code>npm start</code></p>
<p>You can now access the API at <code>http://localhost:8000</code></p>
<h2 id="endpoints">Endpoints</h2>
<p>The API has the following endpoints:</p>
<h3 id="authentication">Authentication</h3>
<h4 id="signup">Signup</h4>
<p><code>POST /signup</code></p>
 <img src="https://github.com/pintu544/guruji/blob/main/TodoAPI/signup.jpg" alt="signup"> 
<p>Creates a new user account.</p>
<h5 id="request-body">Request Body</h5>
<p>`{</p>
<pre><code>"email": "johndoe@example.com",
"password": "password"
</code></pre>
<p>}`</p>
<h5 id="response">Response</h5>
<p>On successful signup, returns the newly created user object along with a JWT token.</p>
<p>`{<br>
“user”: {<br>
“_id”: “6158c8230a5f6ecb12345678”,</p>
<pre><code>    "email": "johndoe@example.com"
},
"token": "&lt;jwt-token&gt;"
</code></pre>
<p>}`</p>
<h4 id="login">signin</h4>
<p><code>POST /signin</code></p>
 <img src="https://github.com/pintu544/guruji/blob/main/TodoAPI/signin.jpg" alt="signin"> 
<p>Logs in a user and returns a JWT token.</p>
<h5 id="request-body-1">Request Body</h5>
<p><code>{ "email": "johndoe@example.com", "password": "password" }</code></p>
<h5 id="response-1">Response</h5>
<p>On successful login, returns a JWT token.</p>

<p><code>{ "token": "&lt;jwt-token&gt;" }</code></p>
<h3 id="tasks">Tasks</h3>
<h4 id="create-task">Create Task</h4>
 <img src="https://github.com/pintu544/guruji/blob/main/TodoAPI/createTodo.jpg" alt="createTodo"> 
<p><code>POST /create-todo</code></p>
<p>Creates a new task.</p>
<h5 id="request-body-2">Request Body</h5>
<p><code>{ "taskName": "Task 1", "taskDescription": "Do something", "taskStatus": "pending" }</code></p>
<h5 id="response-2">Response</h5>
<p>Returns the newly created task object.</p>
<p><code>{ "_id": "6158c8230a5f6ecb12345679", "taskName": "Task 1", "taskDescription": "Do something", "taskStatus": "pending", "createdAt": "2023-04-22T10:55:50.177Z", "updatedAt": "2023-04-22T10:55:50.177Z", __v:0 }</code></p>
<h4 id="get-all-tasks">Get All Tasks</h4>
<p><code>GET /todo</code></p>
 <img src="https://github.com/pintu544/guruji/blob/main/TodoAPI/getTodo.jpg" alt="getTodo"> 
<p>Gets all tasks for the authenticated user.</p>
<h5 id="response-3">Response</h5>
<p>Returns an array of all tasks for the authenticated user.</p>
<p><code>[ { "_id": "6158c8230a5f6ecb12345679", "taskName": "Task 1", "taskDescription": "Do something", "taskStatus": "pending", "createdAt": "2023-04-22T10:55:50.177Z", "updatedAt": "2023-04-22T10:55:50.177Z" }, { "_id": "6158c8230a5f6ecb1234567a", "taskName": "Task 2", "taskDescription": "Do something else", "taskStatus": "completed", "createdAt": "2023-04-22T10:56:23.177Z", "updatedAt": "2023-04-22T10:56:23.177Z" } ]</code></p>
<h4 id="get-task-by-id">Get Task by ID</h4>
<p><code>GET /todo/:id</code></p>
<p>Gets a task by ID.</p>

<h5 id="response-4">Response</h5>
<p>Returns the task object that matches the specified ID.</p>
<p><code>{ "_id": "6158c8230a5f6ecb12345679", "taskName": "Task 1", "taskDescription": "Do something", "taskStatus": "pending", "createdAt": "2023-04-22T10:55:50.177Z", "updatedAt": "2023-04-</code></p>
<h4 id="update-task">Update Task</h4>
<p><code>PUT /tasks/:id</code></p>
 <img src="https://github.com/pintu544/guruji/blob/main/TodoAPI/updateTodo.jpg" alt="updateTodo"> 
<p>Updates a task by ID.</p>
<h5 id="request-body-3">Request Body</h5>
<p>`{</p>
<pre><code>"description": "Do something else",
"status": "completed"
</code></pre>
<p>}`</p>
<h5 id="response-5">Response</h5>
<p>Returns the updated task object.</p>
<p><code>{ "_id": "6158c8230a5f6ecb12345679", "taskName": "New Task Name", "taskDescription": "Do something else", "taskStatus": "completed", "createdAt": "2023-04-22T10:55:50.177Z", "updatedAt": "2023-04-22T11:05:34.447Z" }</code></p>
<h4 id="delete-task">Delete Task</h4>
<p><code>DELETE /todo/:id</code></p>
<p>Deletes a task by ID.</p>
 <img src="https://github.com/pintu544/guruji/blob/main/TodoAPI/deleteTodo.jpg" alt="deleteTodo"> 
<h5 id="response-6">Response</h5>
<p>Returns a message indicating the task has been deleted.</p>
<p><code>{ "message": "Task deleted successfully" }</code></p>
<h2 id="error-handling">Error Handling</h2>
<p>The API returns appropriate HTTP status codes and error messages for various scenarios such as invalid input, unauthorized access, and server errors.</p>
<h2 id="authentication-1">Authentication</h2>
<p>The API uses JWT authentication to secure the endpoints and ensure that only authenticated users can perform CRUD operations on their own tasks.</p>
<h2 id="additional-features-implemented">Additional Features Implemented</h2>
<ol>
<li>Pagination - The  <code>GET /tasks</code>  endpoint supports pagination using the  <code>page</code>  and  <code>limit</code>  query parameters.</li>
<li>Filtering - The  <code>GET /tasks</code>  endpoint supports filtering by task status using the  <code>status</code>  query parameter.</li>
</ol>
<h2 id="conclusion">Conclusion</h2>
<p>This project demonstrates how to build a RESTful API with Node.js and Express, implement JWT authentication, and use MongoDB as the database. The API provides basic CRUD operations for tasks and includes additional features like pagination and filtering. Proper error handling and security measures are also implemented to ensure the API is robust and secure.</p>
