# Fitness Tracker

Fitness Tracker is a web-based application designed to help users track their workouts, monitor progress, and stay consistent with their fitness journey.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [License](#license)

---

## Features
- **Home Page**: An introduction to the Fitness Tracker with navigation to other sections.
- **Exercise Library**: A curated list of popular exercises and the ability to log custom exercises.
- **Progress Tracker**: Tracks workout history with a detailed log of exercises, sets, and reps.
- **Contact Us**: A form to send messages directly via the website.

---

## Technologies Used
- **HTML5**: Structure of the website.
- **CSS3**: Styling for a responsive and user-friendly interface.
- **JavaScript**: Client-side logic for interaction, including form submission and progress logging.
- **jQuery**: Simplified DOM manipulation and AJAX operations.
- **Email.js**: Sending emails directly from the Contact Us form.
- **Favicon**: Dumbbell icon for branding.

---

## File Structure
- `index.html`: Home page of the Fitness Tracker.
- `exercises.html`: Exercise library with predefined and custom exercises.
- `progress.html`: Tracks user workout history.
- `contact.html`: A form to contact the creator.
- `style.css`: CSS file for consistent styling across pages.
- `script.js`: General JavaScript functionality for workout tracking.
- `progress.js`: Handles specific progress tracking and display.
- `exercises.js`: Logs exercises to the progress tracker.
- `jquery.js`: jQuery library for ease of scripting.
- `img/`: Directory containing images, including the dumbbell favicon and the delete button.

---

## Setup and Installation
1. Clone the repository or download the source code.
2. Ensure all files are in the same directory structure.
3. Open any `.html` file in a web browser to view the website.
4. If hosting, place the files on your server and ensure the server supports static content.

---

## Usage
### Home Page
Navigate to the Home Page (`index.html`) to access the main sections:
- **Exercises**: Explore and log exercises.
- **Progress**: View your workout history.
- **Contact Us**: Send a message to the creator.

### Exercise Library
1. View the list of predefined exercises and log your workout by clicking the "Log Exercise" button.
2. Add custom exercises by entering the name, reps, and sets in the form.

### Progress Tracker
1. View your workout history under the "Progress" section.
2. Each entry displays the exercise name, date, and reps/sets.
3. Delete specific entries using the trash bin button.

### Contact Us
1. Fill out the contact form with your name, email, and message.
2. Click "Send Message" to submit your query.

### Website is hosted at http://marekmulac.wz.cz:8080/

---

## Scripts
### `script.js`
Handles the core logic of workout tracking, including:
- **Logging Exercises**: Adds exercises to `localStorage` with details like name, sets, reps, and date.
- **Displaying Progress**: Populates a progress table from `localStorage` when the page loads.
- **Deleting Entries**: Allows users to remove specific workout entries from the progress tracker.
- **Event Handling**:
  - Validates input fields before logging exercises.
  - Responds to page load events to initialize workout data.

### Key Functions:
- **`getWorkouts()`**: Retrieves stored workout data from `localStorage`.
- **`logExercise(name, sets, reps)`**: Logs a new exercise, adds it to `localStorage`, and updates the progress table.
- **`loadWorkouts()`**: Loads and displays workouts from `localStorage` into the progress table.
- **`deleteWorkout(workoutToDelete)`**: Deletes a specific workout entry and updates the table.
