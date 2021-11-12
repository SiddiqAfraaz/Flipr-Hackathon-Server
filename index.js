import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import homeRoutes from './routes/home.js'

const app = express();

app.use('/', homeRoutes);
app.use('/signup', homeRoutes);
app.use('/login', homeRoutes);

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://SiddiqAfraaz:Siddiq123@flipr-hackathon.5bvji.mongodb.net/Flipr-Hackathon?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server Started at Port: ${PORT}`)))
    .catch((error)=>console.error(error));

