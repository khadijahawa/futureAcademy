import { useRouter } from "next/router";
import { useEffect } from "react";
import { courseData } from "../../utils/courseData";
import Image from "next/image";
import Link from "next/link";
import { snapTrack } from "../../utils/snapchatPixel";

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    snapTrack("VIEW_CONTENT", {
      item_category: "course",
      item_ids: [String(id)]
    });
  }, [id]);

  const course = courseData.find((course) => course.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Course Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Course Image */}
        <div className="md:w-1/2">
          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Course Details */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {course.title}
          </h1>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">المدة:</span> {course.duration}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">الجلسات:</span> {course.session}
          </p>
          <p className="text-gray-800 font-bold text-lg mb-4">
            مدة الجلسة: {course.sessionDuration}
          </p>

          <button className="bg-[#6EA116] hover:bg-green-600 text-white py-2 px-6 rounded">
            <Link
              href="https://wa.me/+905526327279"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              سجل الآن{" "}
            </Link>
          </button>
        </div>
      </div>

      {/* Course Content */}
    </div>
  );
}
