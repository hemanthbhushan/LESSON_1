app.use("/", express.static('/',path.join(__dirname, "public")));
app.use(express.static('/',path.join(__dirname, "public")));
app.use( express.static( "public"));
above are same

-app.use(express.json())
 this will allow the app to receive and parse the json data

Types of MiddleWare
1.Built-in
2.Custom
3.Third Party

1.Built-in
-express.static is a builtin middle ware
-express.json()