const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");

require('dotenv').config();


// Create a new sequelize store using the express-session package
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// Configure and link a session object with the sequelize store
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
const apiWeightRoutes = require("./controllers/api/weightRoutes");
const userRoutes = require("./controllers/userRoutes");
app.use(userRoutes);
app.use(apiWeightRoutes);
// Add express-session and store as Express.js middleware


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.post('/submit', (req, res) => {
  const { exercise_type, description, weight, weight_unit, date } = req.body;

   const workout_id = 12345;

  res.json({ workout_id });
});

app.delete('/api/workouts/delete/:id', async (req, res) => {
  try {
    const workoutId = req.params.id;
    const deletedWorkout = await Workout.destroy({
      where: { id: workoutId }
    });

    if (deletedWorkout) {
      res.json({ message: `Workout with ID ${workoutId} deleted successfully.` });
    } else {
      res.status(404).json({ message: `Workout with ID ${workoutId} not found.` });
    }
  } catch (error) {
    console.error('Error deleting workout:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
