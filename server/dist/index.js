import app from './app.js';
import { connectToDataBase } from './db/connection.js';
const PORT = process.env.PORT || 3001;
connectToDataBase()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`server open ${PORT} and connected to DB`);
    });
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map