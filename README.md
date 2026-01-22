# React JS - Custom Hooks Exercise

**Goal:** Create and use your own custom hook in React.

## Instructions 📖

1. Create a new React project by running `npm create vite@latest custom-hook-exercise`.
2. Create a custom hook called `useTime` which accepts a string parameter of "hour" or "day"  and returns the corresponding data. For example:

    ```tsx
    const day = useTime<string>("day") // Friday
    const hour = useTime<string>("hour") // 11
    ```

3. Use the custom hook in your `App.tsx` component. You can decide how you want to display both day and hour.

    Example:

    ```jsx
    <div>
      <h3>Day: {day}</h3>
      <h3>Hour: {hour}</h3>
    </div>
    ```

4. Feel free to add more to the functionality of your custom hook.
5. Commit and push your changes.