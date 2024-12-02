import { Metadata } from "next";
import { dummyCourseData } from "../_data/dummyCourseData";
import CourseHeader from "./_components/CourseHeader";
import SkillsBadges from "./_components/SkillsBadges";
import CourseOutline from "./_components/CourseOutline";

export async function generateMetadata({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: { courseId: string };
}): Promise<Metadata> {
  const courseData = dummyCourseData;

  return {
    title: `${courseData.title} | BullsEAI`,
    description: courseData.description,
  };
}

export default function CoursePreviewPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: { courseId: string };
}) {
  const courseData = dummyCourseData;

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <CourseHeader
          courseId={courseData.courseId}
          title={courseData.title}
          description={courseData.description}
          lessons={courseData.modules.reduce(
            (sum, module) => sum + module.lessons,
            0
          )}
          practices={courseData.modules.reduce(
            (sum, module) => sum + module.practices,
            0
          )}
        />
        <div className="mt-8 md:mt-12">
          <h2 className="text-2xl font-semibold mb-6">Course Outline</h2>
          <CourseOutline modules={courseData.modules} />
        </div>
        <div className="mt-8 md:mt-12">
          <h2 className="text-xl font-semibold mb-4">
            Verified skills you&#39;ll gain
          </h2>
          <SkillsBadges skills={courseData.skills} />
        </div>
        <div className="mt-8 md:mt-12">
          <h2 className="text-xl font-semibold mb-4">Tools you&#39;ll use</h2>
          <div className="flex flex-wrap gap-2">
            {courseData.tools.map((tool) => (
              <span
                key={tool}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
