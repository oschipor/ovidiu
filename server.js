let express = require('express');
let path = require('path');
let app = express();

// Define the static folder
app.use(express.static(path.join(__dirname, 'public')));
// Inform that server is alive
console.log("Server running on 8080.");
// Listen to a port
app.listen(8082);