"use client";

import app from "./firebase.client";
import { getAuth } from "firebase/auth";

export default getAuth(app);
