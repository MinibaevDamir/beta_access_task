const express = require('express')
const config = require('config');
const app = express();
const PORT = config.get('port') || 5000;
const cors = require('cors')
app.use(cors())
app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))
async function start() {
    try {
        app.listen(PORT, () => console.log(`App has been started on port: ${PORT}`));
    } catch(e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}
start()

