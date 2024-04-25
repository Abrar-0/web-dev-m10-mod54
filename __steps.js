// 1. create a post API on the server side
// 2. send data from client side via POST method
// 3. set fetch method inside the fetch options (2nd parameter) - client side
// 4. there will be 3 options - method, headers,body
// method - post 
// headers - content-type -> application/json
// body - json.stringify(data)
// 5. now work on server side -> express.json(middleware) to show the data
// 6. add req.body (stores data) to a const, add id to const, push that const to existing user data and then send that const -> res.send(const)
// 7. back to client side,  get that data add it to new const using spread operator -> const newuser = [...user,data] and then setuser(newuser)
