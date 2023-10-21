const { mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL_DB);
    console.log("[SUCCESS] Connect to database successfully ❤");
  } catch (error) {
    console.log("[ERROR] ", error);
  }
};

module.exports = {
  connectDb,
};
