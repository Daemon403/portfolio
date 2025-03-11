import React, { useEffect, useState } from 'react';
import { GitBranch, GitCommit, GitPullRequest, Star, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

const GITHUB_USERNAME = 'daemon403'; // Replace with your GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

const GithubOverview = () => {
  const [stats, setStats] = useState({
    repositories: 0,
    contributions: 0,
    stars: 0,
    pullRequests: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [topRepos, setTopRepos] = useState([]);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch repositories
        const reposResponse = await fetch(`${GITHUB_API_URL}/repos`);
        const repos = await reposResponse.json();

        // Fetch starred repositories
        const starsResponse = await fetch(`${GITHUB_API_URL}/starred`);
        const stars = await starsResponse.json();

        // Fetch events (commits, PRs, etc.)
        const eventsResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events`);
        const events = await eventsResponse.json();

        // Calculate stats
        const pullRequests = events.filter(event => event.type === 'PullRequestEvent').length;
        const contributions = events.filter(event => event.type === 'PushEvent').reduce((acc, event) => acc + event.payload.commits.length, 0);

        setStats({
          repositories: repos.length,
          contributions,
          stars: stars.length,
          pullRequests
        });

        // Recent activity (commits and PRs)
        const recent = events
          .filter(event => event.type === 'PushEvent' || event.type === 'PullRequestEvent')
          .slice(0, 4)
          .map(event => ({
            type: event.type === 'PushEvent' ? 'commit' : 'pr',
            repo: event.repo.name,
            description: event.payload.commits?.[0]?.message || 'Opened a pull request',
            date: new Date(event.created_at).toLocaleDateString()
          }));

        setRecentActivity(recent);

        // Top repositories (sorted by stars)
        const sortedRepos = repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 3)
          .map(repo => ({
            name: repo.name,
            description: repo.description || 'No description available',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language || 'Unknown'
          }));

        setTopRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-20 bg-[#060312] text-gray-400">
        <div className="max-w-95%] w-full flex flex-col justify-center items-center">
        {/* Title Section */}
        <div className="w-full max-w-[900px] mb-8">
        <SectionTitle icon={<Github />} title="GitHub" />
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard icon={GitBranch} value={stats.repositories} label="Repositories" />
          <StatCard icon={GitCommit} value={stats.contributions} label="Contributions" />
          <StatCard icon={Star} value={stats.stars} label="Stars Earned" />
          <StatCard icon={GitPullRequest} value={stats.pullRequests} label="Pull Requests" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-16">
          {/* Recent Activity */}
          <ActivityCard title="Recent Activity" activities={recentActivity} />

          {/* Top Repositories */}
          <RepoCard title="Top Repositories" repos={topRepos} />
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 text-[#060312] font-medium rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            <GitBranch className="w-5 h-5 mr-2" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

// Stat Card Component
const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-gray-800 border border-yellow-400 rounded-lg p-6 text-center">
    <div className="flex items-center justify-center mb-3">
      <Icon className="w-8 h-8 text-yellow-400" />
    </div>
    <h3 className="text-3xl font-bold text-yellow-400 mb-1">{value}</h3>
    <p className="text-gray-300">{label}</p>
  </div>
);

// Activity Card Component
const ActivityCard = ({ title, activities }) => (
  <div className="bg-gray-800 border border-yellow-400 rounded-lg p-6">
    <h3 className="text-xl font-semibold text-yellow-400 mb-6">{title}</h3>
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start space-x-3">
          {activity.type === 'commit' ? (
            <GitCommit className="w-5 h-5 text-yellow-400 mt-1" />
          ) : (
            <GitPullRequest className="w-5 h-5 text-yellow-400 mt-1" />
          )}
          <div>
            <p className="text-yellow-300 font-medium">{activity.repo}</p>
            <p className="text-gray-400 text-sm">{activity.description}</p>
            <p className="text-gray-500 text-xs mt-1">{activity.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Repository Card Component
const RepoCard = ({ title, repos }) => (
  <div className="bg-gray-800 border border-yellow-400 rounded-lg p-6">
    <h3 className="text-xl font-semibold text-yellow-400 mb-6">{title}</h3>
    <div className="space-y-6">
      {repos.map((repo, index) => (
        <div key={index} className="border-b border-gray-600 last:border-0 pb-4 last:pb-0">
          <h4 className="text-lg font-medium text-yellow-300">{repo.name}</h4>
          <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
          <div className="mt-2 flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-gray-400 text-sm">{repo.stars}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GithubOverview;
