import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'nc1cxoz6', // الـ ID الخاص بك الذي زودتني به
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false, // تأكد أنها false لتظهر التعديلات فوراً
});