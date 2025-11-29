# dojo-blog
dojo-blog: A Comprehensive React Blog Application

The dojo-blog project is a dynamic, fully functional Single-Page Application (SPA) built entirely with modern React concepts, functional components, and Hooks.

This application demonstrates a clean, component-based architecture and robust data handling by integrating with a local mock API (JSON Server) to perform Create, Read, and Delete (CRUD) operations.

🌟 Key Features & Technical Highlights
This project was a deep dive into mastering modern React development patterns, covering:

⚛️ State Management & Data Flow

Functional Components: Utilizing functional components throughout the application.


useState Hook: Implementing state management for complex data types (e.g., arrays of blogs) and primitive values.


Props: Passing data and functions (event handlers) between parent and child components for modularity and child-to-parent communication.


Immutability: Managing list state by creating new arrays (e.g., using the Array.prototype.filter() method for deletion) to ensure predictable state updates.

💻 Data Fetching & Side Effects

useEffect Hook: Handling side effects, primarily focusing on asynchronous data fetching from a mock API on component mount.


Custom useFetch Hook: Demonstrating code reusability and separation of concerns by extracting the data fetching, loading state (isPending), and error handling logic into a reusable custom hook.


Conditional Rendering: Displaying loading messages (isPending) and error messages (error) based on the data fetching status to provide clear user feedback.

🌐 Routing & CRUD Operations

React Router: Implementing client-side routing using react-router-dom to manage navigation between pages.


Route Parameters: Using dynamic routes (/blogs/:id) to fetch and display the details for individual blog posts.


POST Requests (Create): Handling form submission with controlled inputs and making fetch requests with method: 'POST' and appropriate headers to add new data to the server.


Programmatic Navigation: Using the useHistory hook to redirect users after successfully creating or deleting a blog post.


