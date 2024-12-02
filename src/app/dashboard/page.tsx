"use client";

import { ProgressOverview } from "./_components/ProgressOverview";
import { ActiveCourses } from "./_components/ActiveCourses";
import { AchievementsMilestones } from "./_components/AchievementsMilestones";
import { LearningStats } from "./_components/LearningStats";
import { RecommendedCourses } from "./_components/RecommendedCourses";
import { CalendarWidget } from "./_components/CalendarWidget";
import { RecentActivity } from "./_components/RecentActivity";
import { QuickActions } from "./_components/QuickActions";

export default function StudentDashboard() {
  const studentName = "Leo";
  const greeting = getGreeting();
  const quote = "Check out your learning progress, recent activity, and more.";

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }

  return (
    <div className={`min-h-screen`}>
      <div className="bg-background text-foreground">
        {/* Main content */}
        <main className="container py-6">
          {/* Welcome Section */}
          <section className="mb-6">
            <h1 className="text-3xl font-bold">
              {greeting}, {studentName}!
            </h1>
            <p className="text-muted-foreground mt-2">{quote}</p>
          </section>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ProgressOverview />
            <ActiveCourses />
            <AchievementsMilestones />
            <div className="lg:col-span-4">
              <LearningStats />
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <RecommendedCourses />
            <CalendarWidget />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <RecentActivity />
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
}
