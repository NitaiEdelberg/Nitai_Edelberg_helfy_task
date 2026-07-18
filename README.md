# Task Manager App

Simple task manager home assignment (React frontend + Express(js) backend)

## Backend Setup

1. cd backend
2. npm install
3. npm start (runs on port 4000)

## Frontend Setup

1. cd frontend
2. npm install
3. npm start (runs on port 3000)

## API Endpoints

- GET /api/tasks - get all tasks
- POST /api/tasks - create a task
- PUT /api/tasks/:id - update a task
- DELETE /api/tasks/:id - delete a task
- PATCH /api/tasks/:id/toggle - toggle completed true/false

## Design decisions

- Data is saved in memory only without  db, as required - so it resets every time the server restarts
- If priority isn't sent when creating a task it defaults to "medium".
- If title is empty on create, backend returns 400 error.
- Delete asks for confirmation on the frontend before actually deleting (for making sure).
- Edit and Add use the same form (form just switches mode), instead of building two separate forms.
- Carousel duplicates the task list and slides it with CSS so it loops without any gap.
- Added a small middleware (logger.js) that just prints every request to the console, for debugging, as we don't have auth
- descided to make it simple as it's a home task assignemnt: should have use tasks as map for better data structures opperations, and chek other scnerios.

## Time spent

- Backend (routes + server): ~45 minutes
- Frontend components (form, list, item, filter): around 70 minutes
- Carousel: ~40 min
- Styling (CSS): ~40 min
- README + cleanup: ~15 min