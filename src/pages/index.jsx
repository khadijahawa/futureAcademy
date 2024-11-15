import React from "react";
import Image from "next/image";
import { courseData } from "../utils/courseData";
import Link from "next/link";
import hero from "../utils/background/3.jpg";
import whoarewe from "../utils/Logo/Logo_Final_02.png";
import galaray1 from "../utils/opinions/1.jpg";
import galaray2 from "../utils/opinions/10.jpg";
import galaray3 from "../utils/opinions/11.jpg";
import galaray4 from "../utils/opinions/12.jpg";
import galaray5 from "../utils/opinions/13.jpg";
import galaray6 from "../utils/opinions/2.jpg";
import galaray7 from "../utils/opinions/3.jpg";
import galaray8 from "../utils/opinions/4.jpg";
import galaray9 from "../utils/opinions/5.jpg";
import galaray10 from "../utils/opinions/6.jpg";
import galaray11 from "../utils/opinions/7.jpg";
import galaray12 from "../utils/opinions/8.jpg";

function Home() {
  return (
    <div>
      {" "}
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${hero.src})`,
          //   backgroundColor: "#6EA116", // Green overlay
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="text-center p-6 text-white rounded-md">
          <h2 className="text-4xl font-bold mb-4">أطلق العنان لإمكانات طفلك</h2>
          <p className="mb-6">
            انضم إلى دوراتنا التفاعلية والممتعة عبر الإنترنت اليوم!{" "}
          </p>
          <div className="space-x-4">
            <button className="bg-[#E694AD] hover:bg-pink-400 text-white py-2 px-4 rounded">
              <Link href="/courses">استكشف دوراتنا </Link>
            </button>
            <button className="bg-[#F0CC67] hover:bg-yellow-400 text-white py-2 px-4 rounded">
              <Link
                href="https://wa.me/+905526327279"
                target="_blank"
                rel="noopener noreferrer"
              >
                احجز الآن
              </Link>
            </button>
          </div>
        </div>
      </section>
      {/* courses */}
      <section id="courses" className="py-16 ">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 ">خدماتنا</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {courseData.map((course) => (
              <div key={course.id} className="bg-white rounded shadow p-6">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={500}
                  className="rounded mb-4"
                />
                <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link href={`/courses/${course.id}`}>
                  <button className="bg-[#E694AD] hover:bg-green-600 text-white py-2 px-4 rounded">
                    عرض التفاصيل{" "}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
            آرائكم
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src={galaray1}
              alt="Gallery Image 1"
              width={300}
              height={200}
              className="rounded shadow"
            />
            <Image
              src={galaray2}
              alt="Gallery Image 2"
              width={300}
              height={200}
              className="rounded shadow"
            />
            <Image
              src={galaray3}
              alt="Gallery Image 3"
              width={300}
              height={200}
              className="rounded shadow"
            />
            <Image
              src={galaray4}
              alt="Gallery Image 4"
              width={300}
              height={200}
              className="rounded shadow"
            />
            <Image
              src={galaray5}
              alt="Gallery Image 5"
              width={300}
              height={200}
              className="rounded shadow"
            />
            <Image
              src={galaray6}
              alt="Gallery Image 6"
              width={300}
              height={200}
              className="rounded shadow"
            />
            <Image
              src={galaray7}
              alt="Gallery Image 7"
              width={300}
              height={200}
              className="rounded shadow"
            />
            <Image
              src={galaray8}
              alt="Gallery Image 8"
              width={300}
              height={200}
              className="rounded shadow"
            />
            <Image
              src={galaray9}
              alt="Gallery Image 8"
              width={300}
              height={200}
              className="rounded shadow"
            />{" "}
            <Image
              src={galaray10}
              alt="Gallery Image 8"
              width={300}
              height={200}
              className="rounded shadow"
            />{" "}
            <Image
              src={galaray11}
              alt="Gallery Image 8"
              width={300}
              height={200}
              className="rounded shadow"
            />{" "}
            <Image
              src={galaray12}
              alt="Gallery Image 8"
              width={300}
              height={200}
              className="rounded shadow"
            />
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-16 bg-[#F0CC67]">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-white">
            ما الذي يميزنا
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <p className="italic">بيئة تفاعلية وجذابة</p>
              <h5 className="text-lg font-bold mt-4">
                - نتبع أسلوب التعليم التفاعلي والجذاب، حيث يستخدم المعلمون
                ألعابًا تعليمية وأنشطة تفاعلية تساعد على تحويل التعلم إلى تجربة
                ممتعة وملهمة للأطفال.
              </h5>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="italic">جلسات فردية وجماعية</p>
              <h5 className="text-lg font-bold mt-4">
                - نوفر خيارات مرنة للتعلم تشمل جلسات تعليم فردية للأطفال
                الراغبين في التركيز على احتياجاتهم الشخصية، بالإضافة إلى جلسات
                جماعية بحد أقصى 5 طلاب للتعلم ضمن بيئة تفاعلية واجتماعية.
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={whoarewe}
              alt="About Us"
              width={500}
              height={400}
              className="rounded shadow"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">من نحن</h3>
            <p className="text-gray-600 mb-4">
              نحن{" "}
              <span className="font-bold text-[#67B4BF]">
                أكاديمية تعليمية إلكترونية
              </span>
              , متخصصة في تقديم دروس تعليمية تفاعلية للأطفال من عمر 6 إلى 17
              عامًا، حيث نوفر بيئة تعليمية مرنة وآمنة تمكن الأطفال من التعلم من
              منازلهم. نقدم مجموعة واسعة من الدروس التي تشمل اللغة العربية،
              اللغة الإنجليزية، الرياضيات، القرآن الكريم، والتربية الإسلامية.
              نعتمد على طرق تعليم حديثة تجمع بين التعليم والمتعة من خلال الألعاب
              والأنشطة التفاعلية، مما يحفّز الأطفال على الاستكشاف والتعلم.
            </p>
            <p className="text-gray-600 mb-4">
              تأسست أكاديميتنا لتكون بمثابة شريك تعليمي للعائلات، حيث نقدم
              برامجنا بأسلوب يناسب الأطفال ويشجعهم على التفوق الأكاديمي وتطوير
              مهاراتهم الشخصية والاجتماعية.
            </p>
            <p className="text-gray-600 mb-4">
              هدفنا هدفنا هو تعزيز حب التعلم لدى الأطفال عبر تقديم محتوى تعليمي
              متطور يعتمد على التفاعل والمتعة. نهدف إلى بناء جيل متمكن من
              مهاراته اللغوية والأكاديمية، وواعٍ بأخلاقه وقيمه الإسلامية. نسعى
              لتحقيق بيئة تعليمية شاملة تسهم في تطوير مهارات الطفل التعليمية
              والاجتماعية، وتساعده على تحقيق أقصى إمكانياته.
            </p>
            <button className="bg-[#E694AD] hover:bg-green-600 text-white py-2 px-6 rounded mt-4">
              <Link
                href="https://wa.me/+905526327279"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                أرسل رسالة واتساب الآن!
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
