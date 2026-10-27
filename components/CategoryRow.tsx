import Link from "next/link";
import { CategoryIcon } from "@/components/icons";

const categories = [
  ["كاميرات خارجية", "cam"],
  ["كاميرات داخلية", "dome"],
  ["أجهزة التسجيل", "dvr"],
  ["التخزين", "hdd"],
  ["الشبكات", "net"],
  ["الانتركوم", "int"],
];

export default function CategoryRow() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-14">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">تسوق حسب الفئة</h2>
      <div className="mt-6 scroll-x flex md:grid md:grid-cols-6 gap-3 -mx-4 px-4">
        {categories.map(([t, k]) => (
          <Link
            key={t}
            href="/category/accessories"
            className="pc shrink-0 w-36 md:w-auto rounded-2xl bg-fog p-5 text-center"
          >
            <div className="h-16 grid place-items-center">
              <CategoryIcon type={k} size={44} />
            </div>
            <div className="mt-3 text-sm font-bold">{t}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
