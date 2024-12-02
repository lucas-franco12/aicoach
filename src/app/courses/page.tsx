import { Suspense } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CourseCategories } from "./_components/CourseCategories";
import { FeaturedLearningPaths } from "./_components/FeaturedLearningPaths";
import { CourseExplorer } from "./_components/CourseExplorer";
import { NewTrendingCourses } from "./_components/NewTrendingCourses";
import { MajorBasedCourses } from "./_components/MajorBasedCourses";
import { SkillBasedCourses } from "./_components/SkillBasedCourses";

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="mb-6 flex flex-wrap justify-center gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="trending" className="flex-grow">
            Trending
          </TabsTrigger>
          <TabsTrigger value="explorer" className="flex-grow">
            Course Explorer
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex-grow">
            Categories
          </TabsTrigger>
          <TabsTrigger value="learning-paths" className="flex-grow">
            Learning Paths
          </TabsTrigger>
          <TabsTrigger value="major-based" className="flex-grow">
            By Major
          </TabsTrigger>
          <TabsTrigger value="skill-based" className="flex-grow">
            By Skill
          </TabsTrigger>
        </TabsList>

        <div className="mt-8">
          <TabsContent value="trending">
            <Suspense
              fallback={
                <div className="text-center">
                  Loading new and trending courses...
                </div>
              }
            >
              <NewTrendingCourses />
            </Suspense>
          </TabsContent>
          <TabsContent value="explorer">
            <Suspense
              fallback={
                <div className="text-center">Loading course explorer...</div>
              }
            >
              <CourseExplorer />
            </Suspense>
          </TabsContent>
          <TabsContent value="categories">
            <Suspense
              fallback={
                <div className="text-center">Loading categories...</div>
              }
            >
              <CourseCategories />
            </Suspense>
          </TabsContent>
          <TabsContent value="learning-paths">
            <Suspense
              fallback={
                <div className="text-center">Loading learning paths...</div>
              }
            >
              <FeaturedLearningPaths />
            </Suspense>
          </TabsContent>
          <TabsContent value="major-based">
            <Suspense
              fallback={
                <div className="text-center">
                  Loading major-based courses...
                </div>
              }
            >
              <MajorBasedCourses />
            </Suspense>
          </TabsContent>
          <TabsContent value="skill-based">
            <Suspense
              fallback={
                <div className="text-center">
                  Loading skill-based courses...
                </div>
              }
            >
              <SkillBasedCourses />
            </Suspense>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
