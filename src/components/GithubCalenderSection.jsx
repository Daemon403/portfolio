import React, { useEffect } from "react";
import "github-calendar/dist/github-calendar-responsive.css";
import GitHubCalendar from "github-calendar";

const GithubCalendarSection = ({ username }) => {
  useEffect(() => {
    GitHubCalendar(".calendar", username);
  }, [username]);

  return (
    <div className="bg-gray-800 border border-yellow-400 rounded-lg p-6 mb-12">
      <h3 className="text-xl font-semibold text-yellow-400 mb-6">GitHub Contributions</h3>
      <div className="calendar flex justify-center"></div>
    </div>
  );
};

export default GithubCalendarSection;
