

# **ToDo App - Lab Assignment 4**

A simple and functional ToDo list application built using **React Native**. This app demonstrates concepts such as **state lifting**, **event handling**, and **form interaction**, while providing a clean and mobile-friendly UI.

---

## **Features**

- **Add Tasks**: Input tasks via a form and dynamically add them to the task list.
- **Prevent Empty/Duplicate Tasks**: Ensures that only unique, non-empty tasks are added.
- **Dynamic Task List**: Displays tasks in a styled list, updated in real-time.
- **Clear Input Field**: Automatically clears the input field after task submission.
- **Mobile-Friendly Design**: Improved layout and styles for a better user experience.
- **Empty List Message**: Displays a helpful message when no tasks are present.

---

## **Technologies Used**

- **React Native**: For building the mobile application.
- **Expo**: For fast development and testing.
- **JavaScript (ES6+)**: For logic and functionality.

---

## **Setup Instructions**

Follow these steps to run the app locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/HarwinderS01/Lab4.git
   cd Lab4
   ```

2. **Install Dependencies**:
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Start the Expo Server**:
   ```bash
   npm start
   ```

4. **Run on Mobile or Emulator**:
   - Open the Expo Go app on your mobile device (available on Android and iOS).
   - Scan the QR code displayed in the terminal or Expo DevTools.

---

## **File Structure**

```
project/
├── src/
│   ├── App.jsx        # Main app logic and task list management
│   ├── ToDoForm.jsx   # Input form for adding tasks
├── App.js             # Entry point, links to src/App.jsx
├── index.js           # Registers the app with Expo
├── app.json           # App configuration
├── package.json       # Project dependencies
```

---

## **Usage**

1. **Add Tasks**:
   - Type a task into the input field.
   - Click the "Add" button to add the task to the list.
2. **View Tasks**:
   - All tasks are displayed in a scrollable list.
   - Each task is styled for clarity and visibility.
3. **Empty List**:
   - If there are no tasks, a message ("No tasks yet. Add a new task!") is displayed.

---


## **Assignment Requirements Fulfilled**

This app meets all the requirements of Lab Assignment 4:
1. **State Lifting**: Managed task state in `App.jsx` and passed it to `ToDoForm` as a prop.
2. **Event Handling**: Implemented `onPress` events to trigger the addition of tasks.
3. **Form Interaction**: Created a functional form using `TextInput` and `Button`.
4. **Validation**: Prevented adding empty or duplicate tasks.
5. **Enhanced UI**: Improved styling with a header, shadows, spacing, and an empty list message.

---
