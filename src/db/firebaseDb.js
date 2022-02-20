import { collection, getFirestore, addDoc, doc, setDoc, getDoc } from "firebase/firestore"

const db = getFirestore();

const jsonData = [];

function addApp(generatedKey, email, app_name, app_desc) {

    try {
        const docRef = doc(collection(db, "api_keys", email, "my_apps"))
        setDoc(docRef, {
            apiKey: generatedKey,
            authorized: true,
            appName: app_name,
            appDescription: app_desc
        })
        console.log("Document written with Id: " + docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function getApps() {
    getDoc(doc(db, "api_keys", "kagwitheuri@gmail.com")).then(docSnap => {
        if (docSnap.exists()) {
            const allApps = docSnap.data()
            var obj = {
                'No': 1,
                'AppName': allApps.appName,
                'ApiKey': allApps.apiKey,
                'Authorized': allApps.authorized.toString()
            }
            console.log(jsonData)
            jsonData.push(obj)
        } else {
            console.log("No such document!");
        }
    })
}

export {
    jsonData,
    addApp,
    getApps,
}