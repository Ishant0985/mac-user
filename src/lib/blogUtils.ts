import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Blog } from '@/types/blog';

const BLOGS_COLLECTION = 'blogs';

export async function getAllBlogs(): Promise<Blog[]> {
  const blogsQuery = query(
    collection(db, BLOGS_COLLECTION),
    orderBy('publishDate', 'desc')
  );
  
  const snapshot = await getDocs(blogsQuery);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Blog));
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogsQuery = query(
    collection(db, BLOGS_COLLECTION),
    where('slug', '==', slug),
    limit(1)
  );
  
  const snapshot = await getDocs(blogsQuery);
  if (snapshot.empty) return null;
  
  return {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data()
  } as Blog;
}

export async function getRelatedBlogs(currentBlog: Blog, maxResults = 3): Promise<Blog[]> {
  const blogsQuery = query(
    collection(db, BLOGS_COLLECTION),
    where('tags', 'array-contains-any', currentBlog.tags),
    where('slug', '!=', currentBlog.slug),
    orderBy('publishDate', 'desc'),
    limit(maxResults)
  );
  
  const snapshot = await getDocs(blogsQuery);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Blog));
}