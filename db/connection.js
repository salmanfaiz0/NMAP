const { default: mongoose } = require("mongoose");

uri =
  "mongodb+srv://sfdesigns001:L4rvgze7QGb1Jh0z@cluster0.e2a3gjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const conntectDB = async () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

module.exports = conntectDB;
