export const projects = [
  {
    id: "plateful",
    title: "PlateFul",
    category: "Recipe Book",
    image: "https://i.ibb.co/YFb4nTXz/laptop.png",
    link: "/projects/plateful",
    live: "https://plateful-21a3d.web.app/",
    github: "https://github.com/asapial/Plateful-Client",
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
    id: "webja",
    title: "WebJa",
    category: "Online Voting System",
    image: "https://i.ibb.co/VY2FGKM/dashboard.png",
    link: "/projects/webja",
    live: "#",
    github: "#",
    stack: "React, Firebase, Tailwind, Node.js",
    description:
      "WebJa is a secure, online voting system designed to provide transparent and tamper-proof voting experiences for organizations, institutions, or local communities. With clearly separated roles for admin, voter, and election commissioner, the platform ensures smooth management and tracking of elections. Real-time result visualization, vote locking mechanisms, and a clean UI help users participate and manage elections efficiently.",
    challenges:
      "One major challenge was implementing a secure vote submission system to prevent multiple voting from the same user. Designing the database schema to handle different roles and elections dynamically with Firebase’s NoSQL structure required careful planning. Another difficulty was ensuring that all data was encrypted or validated and stored securely to maintain trust. Balancing real-time updates with performance and ensuring that every UI interaction reflects backend changes quickly were also tricky.",
    future:
      "In the future, WebJa will include OTP or email verification for voter authentication, a more advanced admin dashboard with analytics and export options, and a PWA version for accessibility. Multi-language support, blockchain-based voting verification, and live result broadcasting with data visualizations are also planned to ensure scalability and trust at a higher level.",
  },
];