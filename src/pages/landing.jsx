// pages/landing-snap.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../utils/Logo/Logo_Final_03.png";

function LandingSnap() {
  return (
    <div dir="rtl" className="min-h-screen bg-white flex flex-col">
      <section className="relative flex-1 flex items-center">
        <div className="relative z-10 w-full px-6 text-center">
          <div className="flex items-center h-12">
            <Image
              src={logo}
              alt="Company Logo"
              className="object-contain"
              width={300}
              height={300}
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold mt-6 leading-tight">
            أهلاً بكم في{" "}
            <span className="text-[#67B4BF]">أكاديمية المستقبل</span>
          </h1>

          <p className="text-gray-700 mt-3 text-base">
            كورسات تفاعلية للأطفال من 6 إلى 17 سنة — عربي، إنجليزي، رياضيات،
            قرآن وتربية إسلامية.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 grid gap-3">
            <Link
              href="https://wa.me/+905526327279"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#25D366] px-5 py-3 text-white font-semibold shadow hover:opacity-90 active:scale-[0.99] transition"
            >
              احجز عبر واتساب الآن
            </Link>

            <Link
              href="/courses"
              className="inline-block rounded-lg bg-[#F0CC67] px-5 py-3 text-gray-900 font-semibold shadow hover:opacity-95 active:scale-[0.99] transition"
            >
              استكشف دوراتنا
            </Link>
          </div>

          {/* Social proof / micro bullets */}
          <ul className="my-5 text-sm text-gray-600 space-y-1">
            <li>✔️ جلسات فردية وجماعية (حتى 5 طلاب)</li>
            <li>✔️ تعليم ممتع بأساليب تفاعلية وألعاب تعليمية</li>
            <li>✔️ أمان ومرونة كاملة من المنزل</li>
          </ul>
        </div>
      </section>

      {/* <div className="sticky bottom-0 inset-x-0 bg-white/90 backdrop-blur border-t">
        <div className="max-w-md mx-auto px-6 py-3">
          <Link
            href="https://wa.me/+905526327279"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-xl bg-[#67B4BF] px-5 py-3 text-white font-bold shadow hover:opacity-95 active:scale-[0.99] transition"
          >
            تواصل معنا الآن عبر واتساب
          </Link>
        </div>
      </div> */}
    </div>
  );
}

LandingSnap.noLayout = true;

export default LandingSnap;
