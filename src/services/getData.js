const { Firestore } = require("@google-cloud/firestore");

async function getData() {
  const db = new Firestore();

  const predictCollection = db.collection("predictions");
  const history = await predictCollection.get();

  if (history.empty) {
    throw new Error("History tidak ditemukan");
  }

  const data = [];
  history.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}

module.exports = getData;
