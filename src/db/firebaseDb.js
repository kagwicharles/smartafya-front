import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

const db = getFirestore();

const jsonData = [];

function addApp(generatedKey, email, app_name, app_desc) {

    try {
        const apiRef = doc(db, 'api_keys', email);
        setDoc(apiRef, {
            apiKey: generatedKey,
            authorized: true,
            appName: app_name,
            appDescription: app_desc
        })
        console.log("Document written with ID: ", apiRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function getApps() {
    getDoc(doc(db, "api_keys", "kagwitheuri@gmail.com")).then(docSnap => {
        if (docSnap.exists()) {
            const allApps = docSnap.data()
            var obj = {
                'AppName': allApps.appName,
                'ApiKey': allApps.apiKey,
                'Authorized': allApps.authorized.toString()
            }
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