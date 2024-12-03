import app from "./app";
import confing from "./app/confing";
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(confing.databaes_url as string);

    app.listen(confing.port, () => {
      console.log(`app is listening on port ${confing.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main().catch((err) => console.log(err));
