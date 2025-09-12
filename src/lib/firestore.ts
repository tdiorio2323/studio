import { db } from './firebase';
import { collection, getDocs, doc, getDoc, where, query, limit } from 'firebase/firestore';
import type { Project } from '@/types/project';

export const getAllProjects = async (): Promise<Project[]> => {
  const snapshot = await getDocs(collection(db, 'projects'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
};

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    const q = query(collection(db, 'projects'), where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        return null;
    }
    
    const docData = snapshot.docs[0];
    return { id: docData.id, ...docData.data() } as Project;
};
