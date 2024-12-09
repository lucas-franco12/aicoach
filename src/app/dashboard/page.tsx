"use client";

import { ProgressOverview } from "./_components/ProgressOverview";
import { ActiveCourses } from "./_components/ActiveCourses";
import { AchievementsMilestones } from "./_components/AchievementsMilestones";
import { LearningStats } from "./_components/LearningStats";

export default function StudentDashboard() {
  const studentName = "Jonathon";
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
        <main className="container py-6">
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
        </main>
      </div>
    </div>
  );
}