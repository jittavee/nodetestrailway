const express = require  ('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.send('Hello World! Railway API is running');
})

 app.get('/api/info', (req,res) => {
    res.json({
        message: 'This is a simple API running on Railway',
        status: 'success',
        timestamp: new Date().toISOString()
    })
 })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})