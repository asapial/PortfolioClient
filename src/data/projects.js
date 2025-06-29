export const projects = [
  {
    id: "plateful",
    title: "PlateFul",
    category: "Recipe Book",
    image: "https://i.ibb.co/YFb4nTXz/laptop.png",
    link: "/projects/plateful",
    live: "https://plateful-21a3d.web.app/",
    github: "https://github.com/asapial/PlateFul-Client-Side",
    stack: "React, Firebase, Tailwind CSS",
    description:
      "PlateFul is a user-friendly recipe management application where users can explore a variety of dishes, save favorites, and view recipe details. The app emphasizes a visually rich and responsive design, ensuring smooth navigation across devices. Users can like recipes, see trending ones, and maintain a personalized recipe list. Admins can manage recipes and user interactions.",
    challenges:
      "One of the main challenges was implementing secure user authentication and authorization using Firebase. Managing recipe images and storing them efficiently in Firebase Storage while syncing them with Firestore was tricky. Another key difficulty was ensuring a responsive design that adapts gracefully on all screen sizes while maintaining high performance and accessibility.",
    future:
      "Planned features include adding social sharing options, enabling video-based recipe instructions, integrating user-submitted recipes with moderation, and displaying detailed nutritional data for each recipe using third-party APIs. Offline access and progressive web app (PWA) capabilities are also on the roadmap.",
  },
  {
    id: "playpulse",
    title: "PlayPulse",
    category: "Event Management",
    image: "https://i.ibb.co/zhYYBnKH/all-devices-black.png",
    link: "/projects/playpulse",
    live: "https://playpulse-b8a0d.web.app/",
    github: "https://github.com/asapial/PlayPulse-Client-Side",
    stack: "React, Firebase Auth, Node.js, Express, MongoDB",
    description:
      "PlayPulse is a modern event management platform where users can explore, join, and organize various events such as concerts, webinars, or local meetups. It features an interactive dashboard, user authentication, role-based access (admin/user), event creation, dynamic content filtering, and real-time updates. Admins can control all activities from a protected admin panel.",
    challenges:
      "Handling real-time updates, secure Firebase authentication, and building a multi-role dashboard were challenging. Syncing MongoDB with the front end while maintaining fast load times required optimization. Setting up protected routes with proper role-based guards in React Router and securing admin-level access from tampering were critical and tricky. Managing image uploads with previews and optimizing image sizes without compromising quality was also a learning experience.",
    future:
      "Plans include integrating a payment gateway for premium event bookings, real-time chat between attendees and organizers, push notifications for upcoming events, and Google Calendar integration. More analytics tools for organizers and SEO-friendly public event pages will enhance visibility and usability.",
  },
{
  id: "boxably",
  title: "BoxaBly",
  category: "Entertainment Platform",
  image: "https://i.ibb.co/hxxWkJns/laptop-1.png", // Replace with your own project screenshot or cover image
  link: "/projects/boxably",
  live: "https://boxably.web.app/",
  github: "https://github.com/asapial/BoxaBly", // Add your GitHub repo link here
  stack: "React, Firebase, Tailwind, Swiper, Lottie, AOS",
  description:
    "BoxaBly is a dynamic and modern entertainment web application that allows users to explore movies, shows, and exclusive originals through a clean and responsive interface. With features like user registration, profile management, animated avatar reactions, and content previews, BoxaBly delivers a premium OTT-like experience. Seamless UI transitions and a structured content layout make it intuitive and engaging for users to navigate through categories and details.",
  challenges:
    "One major challenge was achieving an OTT-style layout while keeping the UI lightweight and responsive across devices. Integrating animated reactions using Lottie and scroll-based transitions with AOS without affecting performance required careful optimization. Designing a user-friendly authentication flow with Firebase, including updateable profiles and error handling, also took fine-tuning. Ensuring content scaling, dark/light contrast balance, and interactive icon use without bloating the build size was another key challenge.",
  future:
    "In future updates, BoxaBly aims to include a video playback system, dark mode toggle, watchlist functionality, and a reviews/comments section. Plans are also in place for integrating TMDb or other APIs to fetch real movie/show data, enhancing the platform’s realism. Multi-user roles, personalized recommendations, and a PWA version are on the roadmap to make BoxaBly a fully immersive streaming-ready solution.",
}
];