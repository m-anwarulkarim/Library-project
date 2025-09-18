export const questions = [
  {
    id: 1,
    title: "React-এ Context API কিভাবে কাজ করে?",
    snippet: "Context API হচ্ছে prop drilling এড়ানোর...",
    answer: `React-এর Context API মূলত data share করার জন্য ব্যবহৃত হয় 
    যাতে বারবার props হিসাবে data পাঠাতে না হয়। প্রথমে createContext() 
    দিয়ে Context তৈরি করতে হয়। এরপর Provider দিয়ে root component-কে wrap 
    করলে নিচের যেকোনো component useContext() হুক ব্যবহার করে data নিতে পারে।`,
    answeredBy: "Anwarul Karim",
    email: "user1@gmail.com",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Tailwind v4-এ @tailwind components কাজ করছে না কেন?",
    snippet: "v4 থেকে @tailwind components বাদ দেওয়া হয়েছে...",
    answer: `Tailwind CSS v4-এ @tailwind components ডিরেক্টিভ বাদ দেওয়া হয়েছে। 
    এখন শুধু @tailwind base এবং @tailwind utilities ব্যবহার করতে হবে। 
    যেকোনো custom component এখন utility class দিয়েই বানাতে হবে।`,
    answeredBy: "AI Assistant",
    email: "designer.dev@gmail.com",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "JavaScript-এ var, let এবং const এর মধ্যে পার্থক্য কী?",
    snippet: "var function scoped, let এবং const block scoped...",
    answer: `var হলো function scoped এবং একই নামের variable একাধিকবার declare করা যায়। 
    let এবং const হলো block scoped। let দিয়ে reassign করা যায় কিন্তু redeclare করা যায় না। 
    const একবার value দিলে সেটা reassign করা যায় না।`,
    answeredBy: "Hasan Ali",
    email: "hasan.dev@gmail.com",
    time: "3 days ago",
  },
  {
    id: 4,
    title: "Git-এ commit এবং push এর মধ্যে পার্থক্য কী?",
    snippet: "commit লোকালি save করে, push server এ পাঠায়...",
    answer: `commit হলো local repository তে পরিবর্তন সংরক্ষণ করার প্রক্রিয়া। 
    অন্যদিকে push ব্যবহার করা হয় local commit গুলোকে remote repository (যেমন GitHub) এ পাঠানোর জন্য।`,
    answeredBy: "Rafiq Hossain",
    email: "rafiq.code@gmail.com",
    time: "5 hours ago",
  },
  {
    id: 5,
    title: "Node.js কেন single-threaded বলা হয়?",
    snippet: "Node.js event-driven এবং non-blocking I/O...",
    answer: `Node.js single-threaded কারণ এটি event loop এর মাধ্যমে কাজ করে। 
    একসাথে অনেক request আসলেও non-blocking asynchronous I/O ব্যবহার করে efficiently handle করে। 
    এজন্য আলাদা থ্রেড তৈরি করতে হয় না।`,
    answeredBy: "Mehedi Hasan",
    email: "mehedi.backend@gmail.com",
    time: "2 days ago",
  },
  {
    id: 6,
    title: "MongoDB এবং SQL database এর মধ্যে পার্থক্য কী?",
    snippet: "MongoDB হলো NoSQL, SQL হলো relational...",
    answer: `MongoDB হলো একটি NoSQL ডাটাবেজ যেখানে data JSON document আকারে সংরক্ষিত হয়। 
    অন্যদিকে SQL database হলো relational model ভিত্তিক এবং data table আকারে থাকে। 
    MongoDB flexible schema support করে, SQL strict schema ব্যবহার করে।`,
    answeredBy: "Sadia Jahan",
    email: "sadia.dbexpert@gmail.com",
    time: "6 hours ago",
  },
  {
    id: 7,
    title: "React-এ useEffect hook এর কাজ কী?",
    snippet: "useEffect হলো side effect handle করার জন্য...",
    answer: `useEffect React component-এর lifecycle এর মতো কাজ করে। 
    এটা data fetch, subscription, DOM update ইত্যাদি side effect handle করতে ব্যবহৃত হয়। 
    dependency array দিয়ে কন্ট্রোল করা যায় কখন effect চালু হবে।`,
    answeredBy: "Tanvir Ahmed",
    email: "tanvir.react@gmail.com",
    time: "1 day ago",
  },
  {
    id: 8,
    title: "REST API এবং GraphQL এর মধ্যে পার্থক্য কী?",
    snippet: "REST হলো endpoint ভিত্তিক, GraphQL হলো query ভিত্তিক...",
    answer: `REST API তে প্রতিটি resource এর জন্য আলাদা endpoint থাকে। 
    GraphQL এ একটাই endpoint থাকে যেখানে client নিজের মতো করে query করতে পারে। 
    REST এ over-fetch বা under-fetch হতে পারে, GraphQL এ client ঠিক যা দরকার তাই চায়।`,
    answeredBy: "Nusrat Jahan",
    email: "nusrat.api@gmail.com",
    time: "4 days ago",
  },
  {
    id: 9,
    title: "TypeScript কেন ব্যবহার করা হয়?",
    snippet: "TypeScript হলো JavaScript-এর typed superset...",
    answer: `TypeScript হলো JavaScript-এর উপর ভিত্তি করে তৈরি typed superset। 
    এর মাধ্যমে static type checking হয়, development এ bug কমে যায়। 
    বড় project এ code maintain করা সহজ হয়।`,
    answeredBy: "Mahmudul Hasan",
    email: "mahmud.ts@gmail.com",
    time: "8 hours ago",
  },
  {
    id: 10,
    title: "Docker কেন ব্যবহার করা হয়?",
    snippet: "Docker অ্যাপ্লিকেশনকে container এ রান করে...",
    answer: `Docker হলো containerization টুল যা অ্যাপ্লিকেশন এবং এর dependency একসাথে container এ রাখে। 
    ফলে যেকোনো environment এ একইভাবে কাজ করে। Development, Testing এবং Deployment এ consistency আনে।`,
    answeredBy: "Shamim Reza",
    email: "shamim.devops@gmail.com",
    time: "10 hours ago",
  },
];
