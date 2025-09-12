import { db } from './firebase';
import { collection, getDocs, doc, getDoc, where, query, limit } from 'firebase/firestore';
import type { Project } from '@/types/project';

// This function is kept for when you want to re-enable Firebase.
export const getAllProjects = async (): Promise<Project[]> => {
  if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    console.warn("Firebase is not configured. Returning empty array for projects.");
    return [];
  }
  try {
    const snapshot = await getDocs(collection(db, 'projects'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    return [];
  }
};

// This function is kept for when you want to re-enable Firebase.
export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
        console.warn("Firebase is not configured. Returning null for project.");
        return null;
    }
    try {
        const q = query(collection(db, 'projects'), where("slug", "==", slug), limit(1));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return null;
        }
        
        const docData = snapshot.docs[0];
        return { id: docData.id, ...docData.data() } as Project;
    } catch (error) {
        console.error(`Error fetching project with slug "${slug}" from Firestore:`, error);
        return null;
    }
};
