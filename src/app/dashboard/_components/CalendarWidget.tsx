"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

export function CalendarWidget() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const events = [
    {
      date: new Date(currentYear, currentMonth, 15),
      title: "Project Deadline",
    },
    {
      date: new Date(currentYear, currentMonth, 20),
      title: "Live Coding Session",
    },
    {
      date: new Date(currentYear, currentMonth, 25),
      title: "Quiz: JavaScript Basics",
    },
  ];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    const selectedEvent = events.find(
      (event) => event.date.toDateString() === date?.toDateString()
    );
    if (selectedEvent) {
      alert(`Event on ${date?.toDateString()}: ${selectedEvent.title}`);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-md border w-full h-full"
          components={{
            DayContent: (props) => {
              const matchingEvent = events.find(
                (event) =>
                  event.date.toDateString() === props.date.toDateString()
              );
              return (
                <div className="flex flex-col items-center justify-between h-full w-full p-1">
                  <span className="text-sm">{props.date.getDate()}</span>
                  {matchingEvent && (
                    <Badge
                      variant="secondary"
                      className="text-[8px] mt-1 px-1 py-0.5"
                    >
                      {matchingEvent.title}
                    </Badge>
                  )}
                </div>
              );
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
