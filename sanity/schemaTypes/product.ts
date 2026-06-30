export default {
  name: 'product',
  type: 'document',
  title: 'المنتجات',
  fields: [// أضف هذا الجزء داخل مصفوفة الـ fields
{
  name: 'category',
  title: 'التصنيف',
  type: 'string',
  options: {
    list: [
      { title: 'كاميرات', value: 'cameras' },
      { title: 'IP', value: 'ip' },
      { title: 'ملحقات', value: 'accessories' },
      { title: 'أسلاك', value: 'cables' },
    ],
  },
},
    { name: 'name', type: 'string', title: 'الاسم (Name)' },
    { 
      name: 'slug', 
      type: 'slug', 
      title: 'رابط المنتج (Slug)', 
      options: { source: 'name', maxLength: 96 } 
    },
    { name: 'price', type: 'number', title: 'السعر (Price)' },
    { name: 'image', type: 'image', title: 'صورة المنتج (Image)' },
    { name: 'description', type: 'text', title: 'الوصف (Description)' },
    { 
      name: 'language', 
      type: 'string', 
      title: 'اللغة (Language)', 
      options: { list: ['ar', 'en'], layout: 'radio' } 
    }
  ]
}
