import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'منتج',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'التصنيف',
      type: 'string',
      options: {
        list: [
          { title: 'كاميرات', value: 'cameras' },
          { title: 'IP', value: 'ip' },
          { title: 'ملحقات', value: 'accessories' },
        ],
      },
    }),
    defineField({
      name: 'name',
      title: 'اسم المنتج',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'الرابط (Slug)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'image',
      title: 'صورة المنتج',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'price',
      title: 'السعر الحالي',
      type: 'number',
      validation: (r) => r.required().min(0),
    }),
    defineField({
      name: 'oldPrice',
      title: 'السعر القديم (اختياري)',
      type: 'number',
    }),
    defineField({
      name: 'badge',
      title: 'شارة (مثل: هدايا بقيمة)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'الوصف',
      type: 'text',
    }),
    defineField({
      name: 'language',
      title: 'اللغة',
      type: 'string',
      options: {
        list: [
          { title: 'العربية', value: 'ar' },
          { title: 'English', value: 'en' },
        ],
      },
    }),
  ],
})