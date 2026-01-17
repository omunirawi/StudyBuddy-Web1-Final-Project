// =========================================================
// state.js
// Goal: keep the main app data in one place (simple global state).
// This is a student-level project, so I used window.* on purpose.
// =========================================================

// state.js
// Simple app state (tasks, habits, favorites, settings)

window.appState = {
  tasks: [],
  habits: [],
  favorites: [],
  settings: {
    theme: "light"
  },
  editingTaskId: null
};

// Helper: generate simple id
// Create a simple unique id for new items (tasks/habits)
window.makeId = function(){
  return Date.now() + "-" + Math.floor(Math.random() * 1000);
};
