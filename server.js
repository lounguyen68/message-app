const app = require("./src/app");

const PORT = process.env.APP_PORT || 3003

app.listen(PORT,()=>{
    console.log(`Server API listening on ${PORT}`);
})