# Leaderboard App

A modern, responsive application for creating and managing leaderboards and rankings for competitions, games, or any activity requiring score tracking.

## Features and Usage

The application provides a clean, interactive interface for tracking and displaying leaderboards:

- Real-time leaderboard updates
- On first load, the app fetches sample player data from the API
- All data is managed through Pinia stores
- All players start with 0 points
- Player management:
  - Add new players with the (+) button
  - Remove existing players with the (x) button
  - Click +/- buttons to update scores
- Sorting and filtering:
  - Click column headers to sort by name (alphabetically) or score
  - Use the search box to filter players by name
- User details:
  - Click on a player's name to view detailed information (Name, Age, Scores, Address)
- Note: Data persistence is not implemented yet (see Roadmap), so refreshing the page will reset the data

## Technologies Used

- Frontend: Nuxt.js
- Backend: Node.js with Nuxt.js
- Database: N/A
- Authentication: N/A
- Styling: TailwindCSS with responsive design

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ertugrulhaskan/leaderboard-app.git
cd leaderboard-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev:launch
```

## API Reference

The API endpoints are available at `/api/` with the following resources:

- `/api/players` - First load fake users

## Roadmap

Future development plans include:

- **Dark Theme Implementation**: Add toggle-able dark/light themes with TailwindCSS for improved user experience
- **Data Persistence**: Implement local storage solution to preserve Pinia store data between sessions
- **Unity Testing**: Implement end-to-end testing with Cypress and/or Playwright to ensure application reliability
- **User Authentication**: Develop secure login and user management system with role-based permissions
- **Database Integration**: Connect to a persistent database (Supabase or PostgreSQL) for data storage
- **Profile Customization**: Allow users to create and customize their player profiles
- **Performance Analytics**: Implement charts and statistics for tracking player progress
