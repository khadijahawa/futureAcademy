import Link from "next/link";
import { courseData } from "../../utils/courseData";
import Image from "next/image";

export default function Courses() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center mb-10">خدماتنا</h1>
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
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link href={`/courses/${course.id}`}>
              <button className="bg-[#E694AD] hover:bg-green-600 text-white py-2 px-4 rounded">
                عرض التفاصيل
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
