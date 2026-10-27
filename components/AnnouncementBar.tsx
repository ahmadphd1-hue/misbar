export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-white text-[12px] sm:text-[13px]">
      <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between">
        <span>توصيل مجاني للطلبات فوق 400 ريال</span>
        <a href="https://wa.me/966532999563" className="hidden sm:inline hover:underline">
          دعم واتساب: 966532999563+
        </a>
      </div>
    </div>
  );
}
