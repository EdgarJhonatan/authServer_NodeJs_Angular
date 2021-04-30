const moongose = require("mongoose");

const dbConnection = async () => {
  try {
    await moongose.connect(process.env.BD_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("BD OnLine");
  } catch (error) {
    console.log(error);
    throw new "Error a la hora de inicializar DB-MONGO"();
  }
};

module.exports = {
  dbConnection,
};
