

// Import only what’s safe at the top level
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

//DO NOT import firebase/analytics here — it's browser-only!

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGiF7GCStOTTglX5xuCBjbglWX8IX1l3A",
  authDomain: "githubai-ea23c.firebaseapp.com",
  projectId: "githubai-ea23c",
  storageBucket: "githubai-ea23c.firebasestorage.app",
  messagingSenderId: "37842645187",
  appId: "1:37842645187:web:de569a4415912dfe67f276",
  measurementId: "G-ENQ6KWPN1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Conditionally initialize Analytics on client only
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  });
}

// Export Firebase storage
export const storage = getStorage(app);

// Upload function with optional progress tracking
export async function uploadFile(file: File, setProgress?: (progress: number) => void) {
  return new Promise((resolve, reject) => {
    try {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          if (setProgress) setProgress(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => resolve(downloadUrl as string));
        }
      );
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}
