

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBSp1E1ZyJ_MmXDegNmo2sdXqaV7irK9TE",

  authDomain: "reservation-403e3.firebaseapp.com",

  projectId: "reservation-403e3",

  storageBucket: "reservation-403e3.appspot.com",

  messagingSenderId: "881366607292",

  appId: "1:881366607292:web:9332994acc459fc4fdf7b9",

  measurementId: "G-X5QNECJ4L6"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

userID = '';

const reservationCollection = db.collection("reservation");



// Web (JavaScript)
function fetchData(){
     data = []
    const reservationRef = db.collection('reservation');
    reservationRef.get().then((snapshot) => {

        snapshot.forEach((doc) => {
      
          //console.log(doc.id, '=>', doc.data());
          data.push(doc.data())
          str = JSON.stringify(doc.data())
          //console.log(data.length)
        
        });

         console.log(data.length)
         for (let i = 0; i < data.length; i++)
        {
            document.getElementById("table").innerHTML += data[i].name + " " + data[i].start_date + "   " + 
            "   " +  data[i].end_date  + "   " + data[i].car_type
            var br = document.createElement("br");
            var foo = document.getElementById("table");
            foo.appendChild(br); 

        }
      
      }).catch((error) => {
      
        console.error("Error getting documents: ", error);
      
      });
        // console.log(data.length)

}   
  




 function enterData(){
     db.collection("reservation").add({
         start_date: document.getElementById("startField").value,
         end_date: document.getElementById("endField").value,
         car_type: document.getElementById("carType").value,
         name: document.getElementById("name").value
     })

     .then(docRef => {
        // userID = docRef.id;
        console.log("Document written with ID: ", docRef.id);
        //console.log(userID)
        db.collection('reservation').doc(docRef.id).get()
    
    .then(doc => {
    
        if (doc.exists) {
    
            console.log("Document data:", doc.data());
    
        } else {
    
            console.log("No such document!");
    
        }
    
    })
    
    
    
    })
    
    .catch(error => {
    
        console.error("Error adding document: ", error);
    
    });
 }
