import { auth, signInWithEmailAndPassword } from "../../../../firebase";
import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const userRef = doc(db, "users", user.uid);

    const savedUserDoc = await getDoc(userRef);

    if (!savedUserDoc.exists()) {
      return NextResponse.json(
        { error: "User data not found in Firestore" },
        { status: 404 }
      );
    }

    const userData = savedUserDoc.data();

    return NextResponse.json({ userData }, { status: 200 });
  } catch (error) {
    console.error("Sign-in error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
