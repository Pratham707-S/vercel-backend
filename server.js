require('dotenv').config()
const app = require('./src/app')



app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000')
})