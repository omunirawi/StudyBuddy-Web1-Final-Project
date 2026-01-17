# StudyBuddy - Video Review Notes (student level)

These notes are written to help me when I record the required review video.
I explain each main block in a simple way.

---

## 1) index.html (App Shell + Sections)

**What it is:** One HTML file (SPA). I do not open multiple pages. The navigation only shows/hides sections using JavaScript.

**Main blocks:**
- **Header (appbar):** shows the logo (SB) and the app name "StudyBuddy".
- **Navigation (tabs):** Dashboard / Tasks / Habits / Resources / Settings. Clicking a tab calls JS routing (no reload).
- **Dashboard section:** quick summary cards + a small “today” view to see what is important.
- **Tasks section:** the main CRUD page (Add / Edit / Delete tasks). I also added a simple filter/sort.
- **Habits section:** weekly tracker. I can mark a habit for each day of the week and see progress.
- **Resources section:** learning links loaded from `resources.json` using `fetch()`. I can search, filter by category, and star favorites.
- **Settings/About section:** theme toggle (light/dark) and reset data button + my student info.

---

## 2) style.css (Simple styling, grouped by blocks)

**What it is:** One CSS file with simple rules. I avoided advanced tricks.
I used CSS variables for colors because it makes theme switching easy.

**Main blocks:**
- **Base + variables:** page colors, fonts, background, spacing.
- **Header + nav:** simple top bar and tabs; on mobile the nav can open/close.
- **Cards:** used for summary cards and panels.
- **Forms:** inputs, labels, buttons (simple validation message style).
- **Lists:** tasks list and resources list are styled as clean list/cards.
- **Progress bar:** used for habits and dashboard progress.
- **Modal:** a simple confirm modal for delete / reset.
- **Responsive:** small adjustments when the screen is small.
- **Dark mode (BONUS):** uses `.dark` class + saved in localStorage.

---

## 3) js/state.js (App state)

**What it is:** A simple object `window.appState` that keeps:
- tasks
- habits
- favorites
- settings (theme)
Also stores `editingTaskId` to know if I am editing or adding.

**Why:** It keeps data in one place so rendering is easier.

---

## 4) js/storage.js (localStorage)

**What it is:** All read/write to localStorage.
- `loadAll()` loads saved data into `appState` when app starts.
- `saveAll()` saves the current data after any change.

**Why:** So tasks/habits/favorites stay saved after refresh.

---

## 5) js/ui.js (Rendering)

**What it is:** DOM functions to update the page:
- render summary cards
- render task list
- render habit grid
- render resources list
- update progress bars

**Why:** Keeps UI work separate from logic/events.

---

## 6) js/app.js (Main events + SPA routing)

**What it is:** The “glue” file:
- sets click events for forms/buttons
- handles routing (show the correct section)
- loads resources from JSON using fetch()
- calls render functions

**SPA routing idea (simple):**
When I click a tab, JS hides all sections and shows only the selected one.

---

## Bonus (if required by the PDF)
If the assignment asks for bonus, I placed bonus features in a clear place and I kept them simple (dark mode + small extras).
