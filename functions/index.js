const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions
  .region("asia-northeast3")
  .https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
  });

exports.createAlert = functions
  .region("asia-northeast3")
  .firebase.document("chatroom/{docid}")
  .onCreate((snapshot, context) => {
    let product = snapshot.data().product;

    db.collection("user")
      .doc(product)
      .update({ alert: "메시지가 생성되었습니다." });
  });
