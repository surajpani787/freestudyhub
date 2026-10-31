// lib/data.tsx

export interface ResourceItem {
    title: string;
    description: string;
    link: string;
    image: string;
}

export const resources: Record<string, ResourceItem[]> = {

    // Angular------------------------------------------
    Angular: [
        {
            title: "Angular 19 Step-by-Step Course (Complete Playlist)",
            description: "Beginner-friendly Angular 19 playlist with a step-by-step tutorial roadmap.",
            link: "https://www.youtube.com/playlist?list=PL7JmcZV0UQtVNlr8JrjNWzLPtVMjGH_Z2",
            image: "https://img.youtube.com/vi/ksablkcwKB0/hqdefault.jpg",
        },
        {
            title: "Angular 19 Tutorial | Full Angular Course In One Video",
            description: "One-video Angular 19 full course—learn from scratch in a single session.",
            link: "https://www.youtube.com/watch?v=jYV2enNmplM",
            image: "https://img.youtube.com/vi/jYV2enNmplM/hqdefault.jpg",
        },
        {
            title: "Angular Full Course 2025 | Angular Tutorial for Beginners",
            description: "Comprehensive full-stack Angular tutorial for beginners.",
            link: "https://www.youtube.com/watch?v=muVjufQBK7M",
            image: "https://img.youtube.com/vi/muVjufQBK7M/hqdefault.jpg",
        },
        {
            title: "Angular Signals Crash Course | Build Full CRUD app (2025)",
            description: "Hands-on Angular Signals and CRUD operations in a modern Angular app.",
            link: "https://www.youtube.com/watch?v=8cdtNWtjADM",
            image: "https://img.youtube.com/vi/8cdtNWtjADM/hqdefault.jpg",
        },
        {
            title: "Angular with NgRx CRUD – Complete Tutorial for Beginners (2025)",
            description: "Build a full Angular app using NgRx state management.",
            link: "https://www.youtube.com/watch?v=97RYIl86g5o",
            image: "https://img.youtube.com/vi/97RYIl86g5o/hqdefault.jpg",
        },
        {
            title: "Angular 20 Tutorial for Beginners | Setup Environment & Install",
            description: "Guide to installing Angular v20 and environment setup (2025).",
            link: "https://www.youtube.com/watch?v=oInuPuLVB6Y",
            image: "https://img.youtube.com/vi/oInuPuLVB6Y/hqdefault.jpg",
        },
        {
            title: "MASTER Angular in 90 Minutes with This Crash Course",
            description: "Fast-paced Angular crash course to cover essentials quickly.",
            link: "https://www.youtube.com/watch?v=oUmVFHlwZsI",
            image: "https://img.youtube.com/vi/oUmVFHlwZsI/hqdefault.jpg",
        },
        {
            title: "Angular tutorial for beginners in English 2025 (Session-30)",
            description: "Deep dive into Angular lifecycle hooks like afterRender().",
            link: "https://www.youtube.com/watch?v=rbb7bp4zBvo",
            image: "https://img.youtube.com/vi/rbb7bp4zBvo/hqdefault.jpg",
        },
        {
            title: "Official Angular Tutorials",
            description: "Interactive and in-browser tutorials straight from angular.dev.",
            link: "https://angular.dev/tutorials",
            image: "https://img.youtube.com/vi/jYV2enNmplM/hqdefault.jpg",
        },
        {
            title: "Next Steps – Angular Learning Path",
            description: "Advanced guides and interactive playground for Angular v20.",
            link: "https://angular.dev/essentials/next-steps",
            image: "https://img.youtube.com/vi/ksablkcwKB0/hqdefault.jpg",
        },
        {
            title: "Angular 20 Step-by-Step Tutorial Series",
            description: "Comprehensive Angular 20 playlist covering setup, components, forms, APIs, and more.",
            link: "https://www.youtube.com/playlist?list=PL7JmcZV0UQtV2QuJXflBHWsS1pgYDyuC0",
            image: "https://img.youtube.com/vi/YppMdlDe1WQ/hqdefault.jpg",
        },
        {
            title: "Chapter 1: How to Install Angular 20 Step-by-Step",
            description: "Begin your Angular 20 journey with this detailed installation guide.",
            link: "https://www.youtube.com/watch?v=YppMdlDe1WQ",
            image: "https://img.youtube.com/vi/YppMdlDe1WQ/hqdefault.jpg",
        },
        {
            title: "Angular 20 Tutorial: What Is Component?",
            description: "Learn the fundamentals of Angular components in this beginner-friendly video.",
            link: "https://www.youtube.com/watch?v=5-oYLEA9sLo",
            image: "https://img.youtube.com/vi/5-oYLEA9sLo/hqdefault.jpg",
        },
        {
            title: "Angular 20 Tutorial: Reactive Form in Angular (#12)",
            description: "Step-by-step guide on creating and using Reactive Forms with CRUD operations.",
            link: "https://www.youtube.com/watch?v=D8JO8pTGbcI",
            image: "https://img.youtube.com/vi/D8JO8pTGbcI/hqdefault.jpg",
        },
        {
            title: "Angular 20 Tutorial: GET API Call Integration",
            description: "Implement GET API calls in Angular 20—perfect for beginners picking up real-world integrations.",
            link: "https://www.youtube.com/watch?v=FTEo---NobQ",
            image: "https://img.youtube.com/vi/FTEo---NobQ/hqdefault.jpg",
        },
        {
            title: "Angular 20 Tutorial: PUT & DELETE API (#11)",
            description: "Build full CRUD functionality with PUT and DELETE API calls in Angular 20.",
            link: "https://www.youtube.com/watch?v=jx-Y2O-TReo",
            image: "https://img.youtube.com/vi/jx-Y2O-TReo/hqdefault.jpg",
        },
        {
            title: "Angular 20 Just Made Dynamic Components Way Easier!",
            description: "Harness the power of dynamic components—Angular 20’s intuitive updates explored.",
            link: "https://www.youtube.com/watch?v=jCGsVZsqFGU",
            image: "https://img.youtube.com/vi/jCGsVZsqFGU/hqdefault.jpg",
        },
        {
            title: "Angular 20 Tutorial for Beginners | Resource API",
            description: "Discover how to leverage the Resource API in Angular 20 in this hands-on video.",
            link: "https://www.youtube.com/watch?v=LtlbIaFmUu0",
            image: "https://img.youtube.com/vi/LtlbIaFmUu0/hqdefault.jpg",
        },
        {
            title: "Angular 20 Full Course: Beginner to Advanced (with TypeScript)",
            description: "End-to-end Angular 20 course using TypeScript—covers fundamentals to advanced topics.",
            link: "https://www.youtube.com/watch?v=k5E2AVpwsko",
            image: "https://img.youtube.com/vi/k5E2AVpwsko/hqdefault.jpg",
        },
        {
            title: "Official Angular Developer Channel: Angular v20 Event",
            description: "Explore Angular v20 developer insights and best practices, straight from the Angular team.",
            link: "https://www.youtube.com/angular",
            image: "https://img.youtube.com/vi/jYV2enNmplM/hqdefault.jpg",
        },
    ],

    // C Language -------------------------------------------------
    C: [
        {
            title: "Learn C Programming",
            description: "Intro to C Programming | Setup | Examples | Updated 2025 (English)",
            link: "https://www.youtube.com/playlist?list=PLSwH4ViBDl2TKQFweCXHJKjsyv2RcAtAW",
            image: "https://img.youtube.com/vi/WmHm1JPLcmc/hqdefault.jpg",
        },
        {
            title: "C programming full course for beginners 2025",
            description: "Step-by-step, practical examples, for absolute beginners in C (English)",
            link: "https://www.youtube.com/playlist?list=PL4R2aZ46RiMyNFjqZBSkyXCDoOW33IIA9",
            image: "https://img.youtube.com/vi/Bz4MxDeEM6k/hqdefault.jpg",
        },
        {
            title: "C Programming 2025: Core2web Lectures",
            description: "Full lecture series by Core2web, latest topics in C (English)",
            link: "https://www.youtube.com/playlist?list=PLQI9GijW7SErHlFRZmtJZBrnQjQnycFsy",
            image: "https://img.youtube.com/vi/r96id26vnqk/hqdefault.jpg",
        },
        {
            title: "C tutorial for beginners (2025)",
            description: "Start C programming in 15 minutes, then variables, operators etc. (English)",
            link: "https://www.youtube.com/playlist?list=PLZPZq0r_RZOOzY_vR4zJM32SqsSInGMwe",
            image: "https://img.youtube.com/vi/2ciUcosJFBc/hqdefault.jpg",
        },
        {
            title: "C Programming All-in-One Tutorial Series",
            description: "Comprehensive multiple-hour series covering C from scratch (English)",
            link: "https://www.youtube.com/playlist?list=PL_c9BZzLwBRKKqOc9TJz1pP0ASrxLMtp2",
            image: "https://img.youtube.com/vi/Bz4MxDeEM6k/hqdefault.jpg",
        },
    ],

    // C++ --------------------------------------------------------
    C_plus_plus: [
        {
            title: "C++ Tutorials In Hindi",
            description: "Full C++ course for beginners, explained in Hindi (2025)",
            link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
            image: "https://img.youtube.com/vi/j8nAHeVKL08/hqdefault.jpg",
        },
        {
            title: "COMPLETE C++ Basic to ADVANCE | HINDI",
            description: "From basics to advanced topics in C++ (Hindi, 2025)",
            link: "https://www.youtube.com/playlist?list=PLXSkStXql1F6mu7mJp0P4wjSq5FpUqwfW",
            image: "https://img.youtube.com/vi/-OvgbZE5WGw/hqdefault.jpg",
        },
        {
            title: "C++ Tutorials in Hindi (Beginners Full Course)",
            description: "Beginner-friendly Hindi C++ full course (2024-2025)",
            link: "https://www.youtube.com/playlist?list=PLFD-frM9CeFt73vQRQU3B_VdwdBwSUQNN",
            image: "https://img.youtube.com/vi/-Hmro6V9rMs/hqdefault.jpg",
        },
        {
            title: "C++ Tutorials in Hindi | Full Course",
            description: "Long playlist covering fundamentals of C++ in Hindi (English subtitles often)",
            link: "https://www.youtube.com/playlist?list=PLduM7bkxBdOeSDRyDC0T3PvBJ9KwPqvbV",
            image: "https://img.youtube.com/vi/fwssJKaJjeM/hqdefault.jpg",
        },
    ],

    // Data structure----------------------------------------
    DSA: [
        {
            title: "DSA Full Course in C++ by CodeHelp",
            description: "Beginner to Advanced DSA using C++ by Love Babbar (Hindi).",
            link: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
            image: "https://img.youtube.com/vi/WQoB2z67hvY/hqdefault.jpg",
        },
        {
            title: "DSA Full Course in Java by Apna College",
            description: "Complete Data Structures & Algorithms using Java (Hindi).",
            link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
            image: "https://img.youtube.com/vi/VTLCoHnyACE/hqdefault.jpg",
        },
        {
            title: "Striver’s A2Z DSA Sheet",
            description: "A2Z DSA Course with Sheet + Solutions (English).",
            link: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
            image: "https://img.youtube.com/vi/0bHoB32fuj0/hqdefault.jpg",
        },
        {
            title: "Data Structures Full Course – GFG",
            description: "DSA explained in-depth by GeeksforGeeks (English).",
            link: "https://www.youtube.com/playlist?list=PLqM7alHXFySEaZgcg7uRYJFBnYMLti-nh",
            image: "https://img.youtube.com/vi/gTsoyORhqkg/hqdefault.jpg",
        },
        {
            title: "DSA with Python – MySirG",
            description: "Learn DSA in Python (Hindi).",
            link: "https://youtube.com/playlist?list=PL7ersPsTyYt1HnCgrT6Up-pan4yLBpyFs",
            image: "https://img.youtube.com/vi/a8KNpJYToKE/hqdefault.jpg",
        },
        {
            title: "The Ultimate DSA Course for 2025 (Python)",
            description: "Build data structures from scratch and think through complex algorithms — full course (2025).",
            link: "https://www.youtube.com/watch?v=DMeD8trbj6A",
            image: "https://img.youtube.com/vi/DMeD8trbj6A/hqdefault.jpg",
        },
        {
            title: "Data Structures and Algorithms in Java Full Course (2025)",
            description: "Intellipaat’s comprehensive Java DSA full course (English).",
            link: "https://www.youtube.com/watch?v=66FvmFe7EUY",
            image: "https://img.youtube.com/vi/66FvmFe7EUY/hqdefault.jpg",
        },
        {
            title: "DSA in Python Full Course in 20 Hours (Beginners to Pro)",
            description: "In-depth DSA with Python — full course released last year.",
            link: "https://www.youtube.com/watch?v=mGJusQ7iBwc",
            image: "https://img.youtube.com/vi/mGJusQ7iBwc/hqdefault.jpg",
        },
        {
            title: "Simplilearn Data Structures Full Course 2025",
            description: "DSA full course (English) by Simplilearn — just 2 months old.",
            link: "https://www.youtube.com/watch?v=07aY-yki8EA",
            image: "https://img.youtube.com/vi/07aY-yki8EA/hqdefault.jpg",
        },
        {
            title: "DSA Mastery 2025: Learn Data Structures & Algorithms (Hindi/Urdu)",
            description: "Complete DSA in Java series by Techzeen (Hindi/Urdu).",
            link: "https://www.youtube.com/playlist?list=PL5OhSdfH4uDvFpMTyHurVoyCsW85PVS_C",
            image: "https://img.youtube.com/vi/DC8BqZ72m-8/hqdefault.jpg",
        },
    ],

    // React-----------------
    React: [
        {
            title: "React Tutorial Full Course (React 19, 2025)",
            description: "A complete beginner-friendly course building modern websites with React.",
            link: "https://www.youtube.com/watch?v=bMknfKXIFA8",
            image: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg",
        },
        {
            title: "React Course for Beginners w/ Tailwind CSS [2025]",
            description: "Learn modern frontend development using React and Tailwind CSS.",
            link: "https://www.youtube.com/watch?v=IJ85kCdqWao",
            image: "https://img.youtube.com/vi/IJ85kCdqWao/hqdefault.jpg",
        },
        {
            title: "ReactJS Full Course: The Complete Beginner's Guide 2025",
            description: "Edureka’s React JS tutorial for beginners (4 months old).",
            link: "https://www.youtube.com/watch?v=w69pnQVj01M",
            image: "https://img.youtube.com/vi/w69pnQVj01M/hqdefault.jpg",
        },
        {
            title: "Learn React JS - Full Beginner's Tutorial & Practice Projects",
            description: "Scrimba’s practical React tutorial (8 months old).",
            link: "https://www.youtube.com/watch?v=x4rFhThSX04",
            image: "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg",
        },
        {
            title: "React JS 19 Full Course 2025 | Build an App and Master ...",
            description: "Hands-on crash course—basic to advanced hooks and app building.",
            link: "https://www.youtube.com/watch?v=dCLhUialKPQ",
            image: "https://img.youtube.com/vi/dCLhUialKPQ/hqdefault.jpg",
        },
        {
            title: "Learn Modern React.js In 2025 - Full Course!",
            description: "Updated course covering props, state, hooks and more.",
            link: "https://www.youtube.com/playlist?list=PLYXp821z9yw687QYidfKjkUfFfdd7K57I",
            image: "https://img.youtube.com/vi/CkfVCZhAYJw/hqdefault.jpg",
        },
        {
            title: "React Complete Course (2025)",
            description: "Comprehensive 'Master React' playlist within a full-stack curriculum.",
            link: "https://www.youtube.com/playlist?list=PLLUjkbOx5di7i1ki4zYcLrg2oahYrcIev",
            image: "https://img.youtube.com/vi/2h8uj0vZRKQ/hqdefault.jpg",
        },
        {
            title: "React JS Tutorials 2025",
            description: "Series of React tutorials, including React Hooks explained easily.",
            link: "https://www.youtube.com/playlist?list=PLv5b4PMqJw6FGW_HEoStA4U-apz2RfOFq",
            image: "https://img.youtube.com/vi/Uz35Qiia84g/hqdefault.jpg",
        },
        {
            title: "ReactJS Beginner Course 2025 | Learn React By Building a Website",
            description: "Hands-on learning by building a practical website (3 months old).",
            link: "https://m.youtube.com/watch?v=3OqiKTyH4r0",
            image: "https://img.youtube.com/vi/3OqiKTyH4r0/hqdefault.jpg",
        },
        {
            title: "React JS Projects Tutorial For Beginners 2025",
            description: "Build practical projects like Gemini clone using React JS.",
            link: "https://www.youtube.com/playlist?list=PLjwm_8O3suyMMs7kfDD-p-yIhlmEgJkDj",
            image: "https://img.youtube.com/vi/0yboGn8errU/hqdefault.jpg",
        },
    ],

    // Next-------------------------
    Next: [
        {
            title: "Official Next.js Learn (by Vercel)",
            description: "Interactive learning path directly from the creators—build a full demo app.",
            link: "https://nextjs.org/learn",
            image: "https://img.youtube.com/vi/COZjeh1_B-k/hqdefault.jpg",
        },
        {
            title: "NEXT.js Full Course 2025 | Become A Professional",
            description: "Comprehensive Next.js course (5 days old)—covers routing, layouts, templates.",
            link: "https://www.youtube.com/watch?v=COZjeh1_B-k",
            image: "https://img.youtube.com/vi/COZjeh1_B-k/hqdefault.jpg",
        },
        {
            title: "Next.js Tutorial 2025 – Start Your Next.js Journey Here",
            description: "Fresh beginner-focused tutorial on Next.js fundamentals (last month).",
            link: "https://www.youtube.com/watch?v=KAQCHfu_3jw",
            image: "https://img.youtube.com/vi/KAQCHfu_3jw/hqdefault.jpg",
        },
        {
            title: "NextJS 15 Full Course 2025 | Become a NextJS Pro in 1.5 Hours",
            description: "Quick dive into Next.js 15—beginner-friendly and fast-paced (2 months old).",
            link: "https://www.youtube.com/watch?v=6jQdZcYY8OY",
            image: "https://img.youtube.com/vi/6jQdZcYY8OY/hqdefault.jpg",
        },
        {
            title: "Master Next.js 15 in 7 Hours! Full Beginner's Course (2025)",
            description: "Deep 7-hour walkthrough of Next.js 15, ideal for serious beginners (6 months old).",
            link: "https://www.youtube.com/watch?v=3qGQ4dGA42o",
            image: "https://img.youtube.com/vi/3qGQ4dGA42o/hqdefault.jpg",
        },
        {
            title: "Next JS Full Course for Beginners — Mini eCommerce App (2025)",
            description: "Project-based course building a mini eCommerce app with Next.js (6 months old).",
            link: "https://www.youtube.com/watch?v=tSLCnixOU7w",
            image: "https://img.youtube.com/vi/tSLCnixOU7w/hqdefault.jpg",
        },
        {
            title: "Next.js 15 Full Course 2025 | Drizzle, Better Auth, Postgres, TypeScript",
            description: "Build real apps using Next.js 15 with modern stack (2 months old, Hindi/English).",
            link: "https://www.youtube.com/watch?v=oxEmHmx4jm4",
            image: "https://img.youtube.com/vi/oxEmHmx4jm4/hqdefault.jpg",
        },
        {
            title: "NextJS Tutorials Series (2025)",
            description: "Playlist covering routing, data fetching, SSR/SSG in Next.js (recent playlist).",
            link: "https://www.youtube.com/playlist?list=PLpPqplz6dKxWBD36B5FKdYOiaOBYJBUt2",
            image: "https://img.youtube.com/vi/tsmaQdgidKg/hqdefault.jpg",
        },
        {
            title: "Next Js Full Course 2025 [Playlist]",
            description: "Step-by-step full course on Next.js fundamentals via playlist.",
            link: "https://www.youtube.com/playlist?list=PLidl7_qEMHZMgVzHrxR6gIKec7_VJIQ6z",
            image: "https://img.youtube.com/vi/Laz3nQVS-E4/hqdefault.jpg",
        },
        {
            title: "Next.js 15 Full Tutorial – Beginner to Advanced",
            description: "A well-rounded beginner-to-advanced Next.js 15 tutorial (5 months old).",
            link: "https://www.youtube.com/watch?v=k7o9R6eaSes",
            image: "https://img.youtube.com/vi/k7o9R6eaSes/hqdefault.jpg",
        },
    ],

    // Javascript ----------------------------------------------------------------
    Javascript: [
        {
            title: "JavaScript Full Course (2025) – freeCodeCamp",
            description: "Comprehensive beginner-to-advanced course on JavaScript (14 hours).",
            link: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbnGQoa3vFjeRbRADAOC9drk",
            image: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
        },
        {
            title: "Modern JavaScript From Scratch – Traversy Media",
            description: "Learn modern ES6+ JavaScript with practical projects.",
            link: "https://www.youtube.com/playlist?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv",
            image: "https://img.youtube.com/vi/hdI2bqOjy3c/hqdefault.jpg",
        },
        {
            title: "JavaScript Tutorials for Beginners – Programming with Mosh",
            description: "Clear, concise JavaScript tutorials perfect for complete beginners.",
            link: "https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax",
            image: "https://img.youtube.com/vi/W6NZfCO5SIk/hqdefault.jpg",
        },
        {
            title: "JavaScript30 – 30 Days Vanilla JS Challenge – Wes Bos",
            description: "Build 30 things in 30 days with pure JavaScript.",
            link: "https://www.youtube.com/playlist?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH",
            image: "https://img.youtube.com/vi/3PHXvlpOkf4/hqdefault.jpg",
        },
        {
            title: "JavaScript Basics – The Net Ninja",
            description: "Beginner-friendly tutorials with examples and exercises.",
            link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
            image: "https://img.youtube.com/vi/FhguwBJeqWs/hqdefault.jpg",
        },
        {
            title: "Core JavaScript in Hindi – Geeky Shows",
            description: "Step-by-step JavaScript tutorials in Hindi for beginners.",
            link: "https://www.youtube.com/playlist?list=PLbGui_ZYuhiiaQjuOfvgx_-gzVBlCxrk0",
            image: "https://img.youtube.com/vi/3qti7Vof_7Q/hqdefault.jpg",
        },
        {
            title: "JavaScript Tutorial for Beginners in Hindi – CodeWithHarry",
            description: "Fast-paced JavaScript tutorials in Hindi with examples.",
            link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwhGJz3khgY9nV0dI2lNpj",
            image: "https://img.youtube.com/vi/ER9SspLe4Hg/hqdefault.jpg",
        },
        {
            title: "JavaScript Full Course in Hindi – Thapa Technical",
            description: "Complete JavaScript course in Hindi for beginners.",
            link: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0",
            image: "https://img.youtube.com/vi/uGRZ2CzkFUo/hqdefault.jpg",
        },
    ],

    // Spring Boot----------------------------------
    SpringBoot: [
        {
            title: "Spring Boot Tutorial for Beginners | Full Course 2025",
            description: "Hands-on crash course building real-world backend apps (3 months old).",
            link: "https://www.youtube.com/watch?v=Cw0J6jYJtzw",
            image: "https://img.youtube.com/vi/Cw0J6jYJtzw/hqdefault.jpg",
        },
        {
            title: "Spring Boot 3 Full Course (15 Hours) – 2025",
            description: "Comprehensive Spring Boot 3 tutorial with projects (8 months old).",
            link: "https://www.youtube.com/watch?v=Kq-DRboTVrc",
            image: "https://img.youtube.com/vi/Kq-DRboTVrc/hqdefault.jpg",
        },
        {
            title: "Hands On Spring Boot Project 2025 | Beginner Friendly",
            description: "Project-based Spring Boot tutorial, very beginner-friendly (4 months old).",
            link: "https://www.youtube.com/watch?v=d6gu5wZtj2c",
            image: "https://img.youtube.com/vi/d6gu5wZtj2c/hqdefault.jpg",
        },
        {
            title: "The Ultimate Spring Boot Roadmap for Java Developers",
            description: "Roadmap video mapping how to master Spring Boot in 2025 (3 months old).",
            link: "https://www.youtube.com/watch?v=tmL2IniRgCo",
            image: "https://img.youtube.com/vi/tmL2IniRgCo/hqdefault.jpg",
        },
        {
            title: "Spring Core & Boot in One Shot | 2025",
            description: "Core concepts of Spring and Spring Boot explained concisely (8 months old).",
            link: "https://www.youtube.com/watch?v=zEGC-Pyiv_s",
            image: "https://img.youtube.com/vi/zEGC-Pyiv_s/hqdefault.jpg",
        },
        {
            title: "Full 2025 Backend Dev Crash Course with Spring",
            description: "Full-stack backend crash course using Spring (4 months old).",
            link: "https://www.youtube.com/watch?v=tXC9DQRWHUQ",
            image: "https://img.youtube.com/vi/tXC9DQRWHUQ/hqdefault.jpg",
        },
        {
            title: "Latest Spring Boot Tutorial for Beginners & Intermediate 2025",
            description: "Playlist covering setup, structure, and implementation basics.",
            link: "https://www.youtube.com/playlist?list=PLS3bLSAwEluyyfKYyKhJ7qW6jYzCZhV1L",
            image: "https://img.youtube.com/vi/rkRIyRmbJ2o/hqdefault.jpg",
        },
        {
            title: "Spring Boot Tutorial: From Basic to Advance (2025 Playlist)",
            description: "Step-by-step Spring Boot learning path from basics to advanced topics.",
            link: "https://www.youtube.com/playlist?list=PLq0IPBF63Mw3YcG-yfr159cZUcMrEffZA",
            image: "https://img.youtube.com/vi/b4b-ykZxhS0/hqdefault.jpg",
        },
        {
            title: "Complete Spring Boot Tutorial for Beginners [2025]",
            description: "Beginner's guide playlist covering all fundamental aspects of Spring Boot.",
            link: "https://www.youtube.com/playlist?list=PLUcsbZa0qzu0gVRFlVfscqjD84TqMssOt",
            image: "https://img.youtube.com/vi/y0T1jf0K_bI/hqdefault.jpg",
        },
        {
            title: "Master Spring Boot 2025 | Complete Series | Beginner Friendly",
            description: "A concise and structured beginner series released recently.",
            link: "https://www.youtube.com/watch?v=y0T1jf0K_bI",
            image: "https://img.youtube.com/vi/y0T1jf0K_bI/hqdefault.jpg",
        },
    ],

    // Java FullStack --------------------------------------------------
    "Java-Full-Stack": [
        {
            title: "Full Stack Java Developer Full Course 2025",
            description: "End-to-end Java Full Stack development (Spring + frontend) — just released.",
            link: "https://www.youtube.com/watch?v=TXhIPNX47PY",
            image: "https://img.youtube.com/vi/TXhIPNX47PY/hqdefault.jpg",
        },
        {
            title: "Full Stack Java Developer Tutorial for Beginners – Simplilearn",
            description: "Beginner-friendly full stack Java tutorial (4 months old).",
            link: "https://www.youtube.com/watch?v=tFyl_RNLwnE",
            image: "https://img.youtube.com/vi/tFyl_RNLwnE/hqdefault.jpg",
        },
        {
            title: "Full Stack Developer Course 2025 | Simplilearn",
            description: "Comprehensive roadmap for full-stack Java dev (7 months old).",
            link: "https://www.youtube.com/watch?v=09Je_ZqxuUs",
            image: "https://img.youtube.com/vi/09Je_ZqxuUs/hqdefault.jpg",
        },
        {
            title: "JAVA Developer Series [Full Stack Course]",
            description: "Step-by-step full-stack Java developer roadmap playlist.",
            link: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw",
            image: "https://img.youtube.com/vi/fMMz9UUjFY8/hqdefault.jpg",
        },
        {
            title: "Full Stack Java Developer Course Playlist – 50 Days",
            description: "Become a full-stack Java developer in 50 days (structured playlist).",
            link: "https://www.youtube.com/playlist?list=PLU2wpJsXyAjnmTQPc4KM7kP1dq2lnkQ5O",
            image: "https://img.youtube.com/vi/r4EqfjMsP48/hqdefault.jpg",
        },
        {
            title: "Java Full Course for Free (2025)",
            description: "12-hour Java tutorial (great foundation for full-stack).",
            link: "https://www.youtube.com/watch?v=xTtL8E4LzTQ",
            image: "https://img.youtube.com/vi/xTtL8E4LzTQ/hqdefault.jpg",
        },
        {
            title: "Java Guides (Java + Spring Boot + React) Learning Path",
            description: "Learning paths covering Java, Spring Boot, and full-stack topics.",
            link: "https://www.youtube.com/@JavaGuides",
            image: "https://img.youtube.com/vi/YbSC1OsLp20/hqdefault.jpg",
        },
        {
            title: "Java Backend Developer Complete Course 2025",
            description: "Backend-focused full-stack learning for Java developers.",
            link: "https://www.youtube.com/playlist?list=PLq0IPBF63Mw3fI4qcB6OwAJ50viUQoR9y",
            image: "https://img.youtube.com/vi/rIzUe-Bb1c8/hqdefault.jpg",
        },
        {
            title: "Java Full Stack Developer Full Course by Simplilearn",
            description: "Complete 2025 full-stack Java developer series.",
            link: "https://www.youtube.com/watch?v=ZoqDCMEkIYs",
            image: "https://img.youtube.com/vi/ZoqDCMEkIYs/hqdefault.jpg",
        },
        {
            title: "Ultimate Full Stack Java Developer Roadmap 2025",
            description: "Visual roadmap for learning Java full-stack dev in 2025.",
            link: "https://www.youtube.com/watch?v=9nFanfJ5nFc",
            image: "https://img.youtube.com/vi/9nFanfJ5nFc/hqdefault.jpg",
        },
    ],

    // Python ------------------------------------------------------
    Python: [
        {
            title: "Python Full Course for Beginners [2025] (2.75 hrs)",
            description: "All-in-one Python tutorial covering basics to advanced in under 3 hours.",
            link: "https://www.youtube.com/watch?v=TmYxUCYHPEs",
            image: "https://img.youtube.com/vi/TmYxUCYHPEs/hqdefault.jpg",
        },
        {
            title: "Python Full Course for Beginners [2025]",
            description: "Full Python course for beginners — clear and practical.",
            link: "https://www.youtube.com/watch?v=K5KVEU3aaeQ",
            image: "https://img.youtube.com/vi/K5KVEU3aaeQ/hqdefault.jpg",
        },
        {
            title: "Python Full Course 2025 | Python Programming Tutorial For Beginners",
            description: "In-depth Python programming tutorial — updated for 2025.",
            link: "https://www.youtube.com/watch?v=QL1Gcyi-j28",
            image: "https://img.youtube.com/vi/QL1Gcyi-j28/hqdefault.jpg",
        },
        {
            title: "Learn Python Fundamentals in 10 Hours – Full Course (2025)",
            description: "Ten-hour comprehensive Python fundamentals course — great for serious learners.",
            link: "https://www.youtube.com/watch?v=7W-yRNQS1qY",
            image: "https://img.youtube.com/vi/7W-yRNQS1qY/hqdefault.jpg",
        },
        {
            title: "Learn Python in 1 Hour | Full Python Crash Course for Beginners (2025)",
            description: "Quick crash-course in Python — perfect for fast learners or a refresh.",
            link: "https://www.youtube.com/watch?v=fHn_NM9K470",
            image: "https://img.youtube.com/vi/fHn_NM9K470/hqdefault.jpg",
        },
        {
            title: "FastAPI Crash Course 2025: Python Tutorial for Absolute Beginners",
            description: "Learn FastAPI — modern Python backend framework, just published.",
            link: "https://www.youtube.com/watch?v=nWWPlEO0he8",
            image: "https://img.youtube.com/vi/nWWPlEO0he8/hqdefault.jpg",
        },
        {
            title: "Python Tutorial with Gen AI for 2025",
            description: "Leveraging AI in Python — fun and forward-looking tutorial.",
            link: "https://www.youtube.com/watch?v=-65r_3r-nN4",
            image: "https://img.youtube.com/vi/-65r_3r-nN4/hqdefault.jpg",
        },
        {
            title: "Python Tutorial for Beginners | Learn Python in 2025",
            description: "Friendly beginner Python guide — just under a year old.",
            link: "https://www.youtube.com/watch?v=BMgwQtZZ9lk",
            image: "https://img.youtube.com/vi/BMgwQtZZ9lk/hqdefault.jpg",
        },
        {
            title: "Python Full Course 2025 | Python Programming | Tutorial",
            description: "Simplilearn’s full Python course updated for 2025.",
            link: "https://www.youtube.com/watch?v=Qb9UQ0J7puI",
            image: "https://img.youtube.com/vi/Qb9UQ0J7puI/hqdefault.jpg",
        },
        {
            title: "Python Full Course for Beginners [2025 Edition]",
            description: "Complete Python tutorial — fresh and clear for 2025 learners.",
            link: "https://www.youtube.com/watch?v=EK_HYyZeGAI",
            image: "https://img.youtube.com/vi/EK_HYyZeGAI/hqdefault.jpg",
        },
    ],

    // Django--------------------------------------------------
    Django: [
        {
            title: "Very Academy – Learn Django (coursetutorial series)",
            description: "Beginner to advanced Django content from Very Academy.",
            link: "https://www.youtube.com/playlist?list=PLOLrQ9Pn6cazTA2QyG2R2UT7MQCAOK3W4",
            image: "https://img.youtube.com/vi/CgRutpdGmBo/hqdefault.jpg",
        },
        {
            title: "Django ORM Workshop – Very Academy",
            description: "Recent 2025 ORM query workshop by Very Academy.",
            link: "https://www.youtube.com/watch?v=aZtGhe_X0t0",
            image: "https://img.youtube.com/vi/aZtGhe_X0t0/hqdefault.jpg",
        },
        {
            title: "Try Django 3.2 – CodingEntrepreneurs",
            description: "Step-by-step Django 3.2 project tutorial series.",
            link: "https://www.youtube.com/playlist?list=PLEsfXFp6DpzTD1BD1aWNxS2Ep06vIkaeW",
            image: "https://img.youtube.com/vi/SlHBNXW1rTk/hqdefault.jpg",
        },
        {
            title: "Corey Schafer – Django Tutorial Series",
            description: "Feature-rich Django tutorials by Corey Schafer.",
            link: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU",
            image: "https://img.youtube.com/vi/CqvZ3vGoGs0/hqdefault.jpg",
        },
        {
            title: "Net Ninja – Django Blog Tutorial",
            description: "Build a blog with Django tutorial by Net Ninja.",
            link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jQeDH6xYhmO-db2mhoTSrT",
            image: "https://img.youtube.com/vi/UmljXZIypDc/hqdefault.jpg",
        },
        {
            title: "JustDjango – Full Stack Django Projects",
            description: "Advanced full-stack project tutorials by JustDjango.",
            link: "https://www.youtube.com/c/JustDjango/videos",
            image: "https://img.youtube.com/vi/NEz4TPwDZsc/hqdefault.jpg",
        },
        {
            title: "Build a Blog with Django (2025)",
            description: "Brand-new Django blog app walkthrough (2025).",
            link: "https://www.youtube.com/watch?v=SQbe13IF3eM",
            image: "https://img.youtube.com/vi/SQbe13IF3eM/hqdefault.jpg",
        },
        {
            title: "Django Tutorial (Full Web App 2025)",
            description: "Create a full web app using Django, recently published.",
            link: "https://www.youtube.com/watch?v=l0QEGvAX8rU",
            image: "https://img.youtube.com/vi/l0QEGvAX8rU/hqdefault.jpg",
        },
        {
            title: "Python Django Full Course for Beginners – 3 Hours",
            description: "Quick crash course for Django beginners.",
            link: "https://www.youtube.com/watch?v=Rp5vd34d-z4",
            image: "https://img.youtube.com/vi/Rp5vd34d-z4/hqdefault.jpg",
        },
        {
            title: "Django 5.0 Full Course 2025",
            description: "Latest Django 5.0 fundamentals course (2025).",
            link: "https://www.youtube.com/watch?v=hw3Cttc9qZQ",
            image: "https://img.youtube.com/vi/hw3Cttc9qZQ/hqdefault.jpg",
        },
    ],

    // MERN Stack-------------------------------------------------
    "MERN Stack": [
        {
            title: "MERN Stack Tutorial for Beginners with Deployment (2025)",
            description: "Comprehensive tutorial taking beginners from zero to deployment.",
            link: "https://www.youtube.com/watch?v=F9gB5b4jgOI",
            image: "https://img.youtube.com/vi/F9gB5b4jgOI/hqdefault.jpg",
        },
        {
            title: "Build and Deploy a Full Stack Social Media App (2025)",
            description: "Create a deployable social media app using React, Node.js, and MongoDB.",
            link: "https://www.youtube.com/watch?v=7oKFzriZt0A",
            image: "https://img.youtube.com/vi/7oKFzriZt0A/hqdefault.jpg",
        },
        {
            title: "Build Full Stack LMS Website using MERN Stack (2025)",
            description: "End-to-end MERN stack project: Learning Management System.",
            link: "https://www.youtube.com/watch?v=XZj4hmbNdSE",
            image: "https://img.youtube.com/vi/XZj4hmbNdSE/hqdefault.jpg",
        },
        {
            title: "Build a SECURE MERN Auth System with JWT & Context API (2025)",
            description: "Secure login/signup system using JWT in MERN app.",
            link: "https://www.youtube.com/watch?v=OJ0BlM7QqRM",
            image: "https://img.youtube.com/vi/OJ0BlM7QqRM/hqdefault.jpg",
        },
        {
            title: "Is MERN Stack Dead? (right full-stack path for 2025)",
            description: "Insightful analysis on MERN’s relevance and future in 2025.",
            link: "https://www.youtube.com/watch?v=AjRoGrZXGPY",
            image: "https://img.youtube.com/vi/AjRoGrZXGPY/hqdefault.jpg",
        },
        {
            title: "Becoming a MERN Developer – Works in 2025 (The Truth)",
            description: "MERN roadmap and real-world advice for becoming a developer.",
            link: "https://www.youtube.com/watch?v=n3yvlEKTTVo",
            image: "https://img.youtube.com/vi/n3yvlEKTTVo/hqdefault.jpg",
        },
        {
            title: "7 Ultimate MERN Stack Projects for 2025",
            description: "Build 7 projects to level up your MERN skills.",
            link: "https://www.youtube.com/watch?v=1qJwD6mDp48",
            image: "https://img.youtube.com/vi/1qJwD6mDp48/hqdefault.jpg",
        },
        {
            title: "MERN Stack Tutorial for Beginners – Deployment Included (2025)",
            description: "Beginner MERN tutorial with deployment using modern techniques.",
            link: "https://www.youtube.com/watch?v=Ea9rrRj9e0Y",
            image: "https://img.youtube.com/vi/Ea9rrRj9e0Y/hqdefault.jpg",
        },
        {
            title: "MERN Stack Tutorial with Deployment – Beginner's Course (2025)",
            description: "Comprehensive beginner's MERN course guiding deployment steps.",
            link: "https://www.youtube.com/watch?v=O3BUHwfHf84",
            image: "https://img.youtube.com/vi/O3BUHwfHf84/hqdefault.jpg",
        },
    ],

    // MEAN Stack --------------------------------------------------
    "MEAN Stack": [
        {
            title: "Angular 20 - MEAN Stack Insert Update Delete / CRUD with Image (2025)",
            description: "Build a full MEAN CRUD app (Angular 20 + Node + Express + MongoDB) with image upload — very recent, project-based.",
            link: "https://www.youtube.com/watch?v=DpqcLXFyBuk",
            image: "https://img.youtube.com/vi/DpqcLXFyBuk/hqdefault.jpg",
        },
        {
            title: "Angular 20 CRUD Operation with Signals + JSON API (2025)",
            description: "Modern Angular 20 CRUD using signals and connecting to a Node/Express + MongoDB backend (very recent).",
            link: "https://www.youtube.com/watch?v=rIqr2V8CGUY",
            image: "https://img.youtube.com/vi/rIqr2V8CGUY/hqdefault.jpg",
        },
        {
            title: "Build app using Angular, Node Express JS and MongoDB (MEAN) — Full Project (2025)",
            description: "End-to-end MEAN project — Angular frontend, Node/Express backend, MongoDB (recent and hands-on).",
            link: "https://www.youtube.com/watch?v=JUwYy-WwHuQ",
            image: "https://img.youtube.com/vi/JUwYy-WwHuQ/hqdefault.jpg",
        },
        {
            title: "MEAN Stack CRUD App — Part 2: Read & Display Data in Angular (2025 series)",
            description: "Part of a fresh MEAN CRUD series focusing on frontend data display & API integration (recent week(s)).",
            link: "https://www.youtube.com/watch?v=B1fiem43aPk",
            image: "https://img.youtube.com/vi/B1fiem43aPk/hqdefault.jpg",
        },
        {
            title: "Node.js Express API with Image Upload (MongoDB & Multer) — Backend for MEAN (2025)",
            description: "Recent tutorial for building the Node/Express + MongoDB image-upload API used in MEAN apps — plug into any Angular frontend.",
            link: "https://www.youtube.com/watch?v=nTQXQPxjm3E",
            image: "https://img.youtube.com/vi/nTQXQPxjm3E/hqdefault.jpg",
        },
        {
            title: "Angular 20 — Auth / Login Flow (useful for MEAN apps) (2025)",
            description: "Recent Angular 20 login/auth flow tutorial — add this to your MEAN app for authentication.",
            link: "https://www.youtube.com/watch?v=XzpcDmqCkwg",
            image: "https://img.youtube.com/vi/XzpcDmqCkwg/hqdefault.jpg",
        },
        {
            title: "Build a MEAN Stack E-Commerce App (2025)",
            description: "Project-based MEAN e-commerce tutorial updated within the last 12 months — product pages, cart, backend APIs.",
            link: "https://www.youtube.com/watch?v=EJDPdbRfx5k",
            image: "https://img.youtube.com/vi/EJDPdbRfx5k/hqdefault.jpg",
        },
        {
            title: "MEAN Stack Full Project (Hindi) — recent series (2025)",
            description: "Hindi-language MEAN full-project series (recent parts published within the last year) — great for Hindi learners.",
            link: "https://www.youtube.com/watch?v=2Pxf4iglAIw",
            image: "https://img.youtube.com/vi/2Pxf4iglAIw/hqdefault.jpg",
        },
        {
            title: "MEAN Stack Roadmap (Angular 20) — what to learn & build in 2025",
            description: "Short, recent roadmap video that shows practical MEAN projects and priorities for 2025 (helpful before starting projects).",
            link: "https://www.youtube.com/watch?v=XD2N3ADPJ48",
            image: "https://img.youtube.com/vi/XD2N3ADPJ48/hqdefault.jpg",
        },
        {
            title: "Angular 20 + Node + Express + MongoDB — Quick CRUD crash (2025)",
            description: "Recent quick-build that ties Angular 20 frontend with Node/Express + MongoDB backend for a fast MEAN overview and starter template.",
            link: "https://www.youtube.com/watch?v=gYkxU1eBEYk",
            image: "https://img.youtube.com/vi/gYkxU1eBEYk/hqdefault.jpg",
        },
    ],

    // DevOps ------------------------------------------------------------------
    DevOps: [
        {
            title: "DevOps Full Course 2025 | DevOps Tutorial for Beginners",
            description: "Comprehensive DevOps full course covering CI/CD, Docker, Kubernetes, Jenkins, Terraform, AWS DevOps (published 5 months ago).",
            link: "https://www.youtube.com/watch?v=QameL1KtnmI",
            image: "https://img.youtube.com/vi/QameL1KtnmI/hqdefault.jpg",
        },
        {
            title: "DevOps Full Course for Beginners (2025) | Intellipaat",
            description: "End-to-end DevOps path from basics to advanced tools by Intellipaat (published 2 weeks ago).",
            link: "https://www.youtube.com/watch?v=MzJsjDRFRgU",
            image: "https://img.youtube.com/vi/MzJsjDRFRgU/hqdefault.jpg",
        },
        {
            title: "Azure DevOps Full Course in 8 Hours [2025]",
            description: "Live-streamed Azure DevOps tutorial for beginners by Edureka (published today).",
            link: "https://www.youtube.com/watch?v=CdgyHrpv_CI",
            image: "https://img.youtube.com/vi/CdgyHrpv_CI/hqdefault.jpg",
        },
        {
            title: "BEST DevOps Course For Beginners | Intellipaat",
            description: "Step-by-step DevOps course covering the latest tools and concepts (published today).",
            link: "https://www.youtube.com/watch?v=0_gLhHQm9cg",
            image: "https://img.youtube.com/vi/0_gLhHQm9cg/hqdefault.jpg",
        },
        {
            title: "DevOps 2025 Roadmap by Abhishek Veeramalla [Updated]",
            description: "Recent roadmap walkthrough (published 7 months ago) teaching incremental DevOps learning stages.",
            link: "https://www.youtube.com/watch?v=lVLcM-GTDUU",
            image: "https://img.youtube.com/vi/lVLcM-GTDUU/hqdefault.jpg",
        },
        {
            title: "Complete DevOps Roadmap 2025 – Master these 4 Levels!",
            description: "DevOps learning stages from beginner to expert by TechWorld with Nana (published 7 months ago).",
            link: "https://www.youtube.com/watch?v=1J2YOV6LcwY",
            image: "https://img.youtube.com/vi/1J2YOV6LcwY/hqdefault.jpg",
        },
        {
            title: "How to Learn DevOps in 2025 | Roadmap for DevOps",
            description: "Beginner-to-expert roadmap walkthrough (published 7 months ago).",
            link: "https://www.youtube.com/watch?v=mKwM5dAmi8g",
            image: "https://img.youtube.com/vi/mKwM5dAmi8g/hqdefault.jpg",
        },
        {
            title: "DevOps Full Course 2025 | Simplilearn",
            description: "Structured full course including Jenkins, Kubernetes, Docker, AWS DevOps (published 6 months ago).",
            link: "https://www.youtube.com/watch?v=k7FawyMT9wI",
            image: "https://img.youtube.com/vi/k7FawyMT9wI/hqdefault.jpg",
        },
        {
            title: "DevOps Tutorial for Beginners | Edureka",
            description: "Fresh DevOps full tutorial by Edureka (published 5 months ago).",
            link: "https://www.youtube.com/watch?v=JVhyEcwypqc",
            image: "https://img.youtube.com/vi/JVhyEcwypqc/hqdefault.jpg",
        },
        {
            title: "DevOps Full Course (2025) | Intellipaat",
            description: "Latest DevOps full course released just this week by Intellipaat.",
            link: "https://www.youtube.com/watch?v=-2X15hPWjsg",
            image: "https://img.youtube.com/vi/-2X15hPWjsg/hqdefault.jpg",
        },
    ],

    // Data Analytics -------------------------------------------------------------
    "Data-Analytics": [
        {
            title: "Data Analysis with Python Course (NumPy, Pandas, Matplotlib)",
            description: "Complete hands-on beginner course cleaning, analyzing, and visualizing datasets.",
            link: "https://www.youtube.com/watch?v=r-uOLxNrNk8",
            image: "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg",
        },
        {
            title: "Power BI Full Course – Learn Power BI in 4 Hours",
            description: "End-to-end Power BI tutorial creating interactive business dashboards and DAX formulas.",
            link: "https://www.youtube.com/watch?v=3u7UDms_JvQ",
            image: "https://img.youtube.com/vi/3u7UDms_JvQ/hqdefault.jpg",
        },
        {
            title: "SQL for Data Analytics Full Course",
            description: "Master window functions, CTEs, aggregation, and subqueries for data analysts.",
            link: "https://www.youtube.com/watch?v=7mz73uXD9DA",
            image: "https://img.youtube.com/vi/7mz73uXD9DA/hqdefault.jpg",
        },
        {
            title: "Tableau Full Course – Learn Tableau in 6 Hours",
            description: "Master business intelligence visual design and data storyboarding with Tableau.",
            link: "https://www.youtube.com/watch?v=aHaOIvR00So",
            image: "https://img.youtube.com/vi/aHaOIvR00So/hqdefault.jpg",
        },
    ],

    // Figma Design -----------------------------------------------------------
    Figma: [
        {
            title: "Figma Tutorial for Beginners (2024): Website Design",
            description: "Beginner-friendly crash course focusing on web design using Figma.",
            link: "https://www.youtube.com/watch?v=clSHs94hNNc",
            image: "https://img.youtube.com/vi/clSHs94hNNc/hqdefault.jpg",
        },
        {
            title: "2024 UI/UX Design Crash Course in Figma",
            description: "In-depth crash course covering UI/UX design principles using Figma.",
            link: "https://www.youtube.com/watch?v=dYtdv--qd_U",
            image: "https://img.youtube.com/vi/dYtdv--qd_U/hqdefault.jpg",
        },
        {
            title: "Figma UI Design Course: A Beginners Tutorial (UX/UI 2024)",
            description: "Comprehensive tutorial for beginners to learn UI design using Figma.",
            link: "https://www.youtube.com/watch?v=P5epIoOJnzU",
            image: "https://img.youtube.com/vi/P5epIoOJnzU/hqdefault.jpg",
        },
        {
            title: "The Ultimate Figma Tutorial for 2024 [Step by Step]",
            description: "Detailed step-by-step guide to mastering Figma in 2024.",
            link: "https://www.youtube.com/watch?v=5nABKXmyKZ8",
            image: "https://img.youtube.com/vi/5nABKXmyKZ8/hqdefault.jpg",
        },
        {
            title: "Figma Crash Course 2024 – Full Website in 60 Minutes",
            description: "Fast-paced crash course teaching how to design a full website in Figma within an hour.",
            link: "https://www.youtube.com/watch?v=ZkiqyA0N71U",
            image: "https://img.youtube.com/vi/ZkiqyA0N71U/hqdefault.jpg",
        },
    ],

    // CyberSecurity ------------------------------------------------------------------
    "Cyber-security": [
        {
            title: "Cybersecurity Full Course 2025 | Cyber Security Tutorial for Beginners",
            description: "Comprehensive introduction to cybersecurity concepts, tools, and practices.",
            link: "https://www.youtube.com/watch?v=-n7iaQVF88A",
            image: "https://img.youtube.com/vi/-n7iaQVF88A/hqdefault.jpg",
        },
        {
            title: "Ethical Hacking Full Course 2025",
            description: "Learn ethical hacking from scratch with hands-on labs and real-world examples.",
            link: "https://www.youtube.com/watch?v=sZHDTaeWVto",
            image: "https://img.youtube.com/vi/sZHDTaeWVto/hqdefault.jpg",
        },
        {
            title: "Penetration Testing Full Course in 10 Hours (2025)",
            description: "Step-by-step penetration testing tutorial for beginners.",
            link: "https://www.youtube.com/watch?v=18hyoV15hys",
            image: "https://img.youtube.com/vi/18hyoV15hys/hqdefault.jpg",
        },
        {
            title: "Cybersecurity Fundamentals 2025 | Complete Guide for Today's Threats",
            description: "Detailed overview of cybersecurity principles and tools.",
            link: "https://www.youtube.com/watch?v=7Y9ooJPUbjY",
            image: "https://img.youtube.com/vi/7Y9ooJPUbjY/hqdefault.jpg",
        },
        {
            title: "Cyber Security Course FREE | Intellipaat",
            description: "Free comprehensive cybersecurity course covering various topics.",
            link: "https://www.youtube.com/watch?v=h3PNK1pq2OA",
            image: "https://img.youtube.com/vi/h3PNK1pq2OA/hqdefault.jpg",
        },
        {
            title: "Ethical Hacking Full Course for Beginners | 2025 Edition",
            description: "Master the fundamentals of ethical hacking with the CEH v13 course.",
            link: "https://www.youtube.com/watch?v=2gK788ZrPRw",
            image: "https://img.youtube.com/vi/2gK788ZrPRw/hqdefault.jpg",
        },
        {
            title: "Advanced Network Security Crash Course 2025",
            description: "Learn networking and advanced security concepts in this crash course.",
            link: "https://www.youtube.com/watch?v=qFkfm_Jvg8g",
            image: "https://img.youtube.com/vi/qFkfm_Jvg8g/hqdefault.jpg",
        },
        {
            title: "Penetration Testing Full Course 2025",
            description: "Comprehensive guide to penetration testing techniques and tools.",
            link: "https://www.youtube.com/watch?v=smuBRTv966I",
            image: "https://img.youtube.com/vi/smuBRTv966I/hqdefault.jpg",
        },
        {
            title: "Cyber Security Full Course 2025 | Cybersecurity Tutorial",
            description: "Structured full course including various cybersecurity topics.",
            link: "https://www.youtube.com/watch?v=j7-MY2xzhoU",
            image: "https://img.youtube.com/vi/j7-MY2xzhoU/hqdefault.jpg",
        },
        {
            title: "Ethical Hacking Course for Beginners | Edureka",
            description: "Ethical hacking full course covering various tools and techniques.",
            link: "https://www.youtube.com/watch?v=V7Lnm8FQ_GI",
            image: "https://img.youtube.com/vi/V7Lnm8FQ_GI/hqdefault.jpg",
        },
    ],

    // 3D Modeling -------------------------------------------------
    "3DModeling": [
        {
            title: "Blender Beginner Tutorial (2025) – Model & Animate Your First 3D Robot",
            description: "A comprehensive beginner-friendly tutorial guiding you through modeling and animating a 3D robot in Blender.",
            link: "https://www.youtube.com/watch?v=-gbCSnkvwNo",
            image: "https://img.youtube.com/vi/-gbCSnkvwNo/hqdefault.jpg",
        },
        {
            title: "Autodesk Maya 2025 – Basic Skills for Beginners",
            description: "An introductory course covering the fundamental skills required for 3D modeling in Autodesk Maya 2025.",
            link: "https://www.youtube.com/watch?v=i6BNEgmHu1M",
            image: "https://img.youtube.com/vi/i6BNEgmHu1M/hqdefault.jpg",
        },
        {
            title: "Maya 2025 Tutorial: 3D Sword Made Purely from Imagination",
            description: "A creative tutorial demonstrating the process of modeling a 3D sword in Autodesk Maya 2025.",
            link: "https://www.youtube.com/watch?v=19Q1hDjdcyY",
            image: "https://img.youtube.com/vi/19Q1hDjdcyY/hqdefault.jpg",
        },
        {
            title: "Full Blender 4 Course for Complete Beginners 2025",
            description: "An in-depth course covering all the core concepts of Blender 4, tailored for complete beginners.",
            link: "https://www.youtube.com/watch?v=r6ZQil-zd5Y",
            image: "https://img.youtube.com/vi/r6ZQil-zd5Y/hqdefault.jpg",
        },
        {
            title: "Autodesk Maya – 3D Tutorials Playlist",
            description: "A comprehensive playlist offering various 3D modeling tutorials in Autodesk Maya, including modeling a well and other projects.",
            link: "https://www.youtube.com/playlist?list=PLG2BOxUbCnV781_3y3PxDV2zPF7-A9_oi",
            image: "https://img.youtube.com/vi/oS9_Se7UAM4/hqdefault.jpg",
        },
    ],

    // MySql ---------------------------------------------------
    MySQL: [
        {
            title: "MySQL Full Course for Free – Learn MySQL in 2025 and Become a MASTER",
            description: "Comprehensive MySQL course covering fundamentals to advanced topics.",
            link: "https://www.youtube.com/watch?v=-T2R1uMdWd4",
            image: "https://img.youtube.com/vi/-T2R1uMdWd4/hqdefault.jpg",
        },
        {
            title: "Complete MySQL Course 2025",
            description: "Detailed SQL basics, DDL, DML, DCL, and TCL explained.",
            link: "https://www.youtube.com/playlist?list=PLA3GkZPtsafZj87jyyITew3oySyECQ4tS",
            image: "https://img.youtube.com/vi/Z32Pudaao6g/hqdefault.jpg",
        },
        {
            title: "MySQL Tutorial for Beginners (2025) | Zero to Hero",
            description: "Step-by-step guide to learn MySQL from scratch.",
            link: "https://www.youtube.com/playlist?list=PLm8sgxwSZofeurFyw2O0Ig5wR1ea7I0kh",
            image: "https://img.youtube.com/vi/Z32Pudaao6g/hqdefault.jpg",
        },
        {
            title: "Installing MySQL on Windows - 2025 Full Tutorial",
            description: "Complete guide to installing MySQL on Windows.",
            link: "https://www.youtube.com/watch?v=50CQoMs4vRo",
            image: "https://img.youtube.com/vi/50CQoMs4vRo/hqdefault.jpg",
        },
        {
            title: "Installing MySQL on Mac - Full Tutorial for 2025",
            description: "Comprehensive tutorial for installing MySQL on macOS.",
            link: "https://www.youtube.com/watch?v=wpGnJHb2R58",
            image: "https://img.youtube.com/vi/wpGnJHb2R58/hqdefault.jpg",
        },
        {
            title: "Learn SQL in 2025 with MySQL Database using MySQL Workbench",
            description: "Introductory course to SQL using MySQL Workbench.",
            link: "https://www.youtube.com/watch?v=ICtmfdSSos0",
            image: "https://img.youtube.com/vi/ICtmfdSSos0/hqdefault.jpg",
        },
        {
            title: "MySQL: From Beginner to Monster Level (4-Hour Complete Course)",
            description: "Intensive course to master MySQL in 4 hours.",
            link: "https://www.youtube.com/watch?v=h4R-nJbM_ac",
            image: "https://img.youtube.com/vi/h4R-nJbM_ac/hqdefault.jpg",
        },
        {
            title: "Installing MySQL and Creating Databases | MySQL for Beginners",
            description: "Beginner-friendly guide to installing MySQL and creating databases.",
            link: "https://www.youtube.com/watch?v=wgRwITQHszU",
            image: "https://img.youtube.com/vi/wgRwITQHszU/hqdefault.jpg",
        },
        {
            title: "SQL Full Course 2025 | Complete SQL Course For Beginners",
            description: "Comprehensive SQL course covering essential topics.",
            link: "https://www.youtube.com/playlist?list=PL-pnFFAm42szX2P_RzetfQDxIfI86Zq4i",
            image: "https://img.youtube.com/vi/vxX0BFPnxhQ/hqdefault.jpg",
        },
        {
            title: "Practical SQL Hands-On Masterclass with MySQL",
            description: "Hands-on masterclass to practice SQL with MySQL.",
            link: "https://www.youtube.com/watch?v=Zk23ruZgs3w",
            image: "https://img.youtube.com/vi/Zk23ruZgs3w/hqdefault.jpg",
        },
    ],

    // MongoDB ---------------------------------------------------------------
    MongoDB: [
        {
            title: "Complete MongoDB(Version 8) Course 2025: Zero to Hero",
            description: "Comprehensive playlist covering MongoDB basics to advanced topics.",
            link: "https://youtube.com/playlist?list=PL1BztTYDF-QPwd9Qg-nxQk1UYtorhzXLc",
            image: "https://img.youtube.com/vi/Puc2EjkdycU/hqdefault.jpg",
        },
        {
            title: "MongoDB Tutorial in 1 Hour (2024)",
            description: "Concise tutorial covering essentials of MongoDB in just one hour.",
            link: "https://www.youtube.com/watch?v=J6mDkcqU_ZE",
            image: "https://img.youtube.com/vi/J6mDkcqU_ZE/hqdefault.jpg",
        },
        {
            title: "MongoDB Tutorial for Beginners 2024",
            description: "Full beginner course with around 50 labs starting from basics.",
            link: "https://www.youtube.com/watch?v=hO8K9IkSFaE",
            image: "https://img.youtube.com/vi/hO8K9IkSFaE/hqdefault.jpg",
        },
        {
            title: "MongoDB Compass Complete Tutorial - 2024",
            description: "Guide to using MongoDB Compass, including CRUD operations.",
            link: "https://www.youtube.com/watch?v=acNe9i2pJC4",
            image: "https://img.youtube.com/vi/acNe9i2pJC4/hqdefault.jpg",
        },
        {
            title: "MongoDB Full Course | Intellipaat",
            description: "In-depth course on MongoDB fundamentals and advanced features.",
            link: "https://www.youtube.com/watch?v=aDd4HiGQSIU",
            image: "https://img.youtube.com/vi/aDd4HiGQSIU/hqdefault.jpg",
        },
    ],

    // Ruby ----------------------------------------------------------------
    Ruby: [
        {
            title: "Ruby Programming Crash Course",
            description: "A complete Ruby tutorial under 2 hours, ideal for beginners.",
            link: "https://www.youtube.com/watch?v=w9yNsTAp-Mg",
            image: "https://img.youtube.com/vi/w9yNsTAp-Mg/hqdefault.jpg",
        },
        {
            title: "Ruby Tutorial for Absolute Beginners",
            description: "Comprehensive course covering Ruby programming from scratch.",
            link: "https://www.youtube.com/watch?v=0JR2R9ZKDPA",
            image: "https://img.youtube.com/vi/0JR2R9ZKDPA/hqdefault.jpg",
        },
        {
            title: "Ruby on Rails 7 2024 - Airbnb Clone - Part 2",
            description: "Learn to create a Rails project with PostgreSQL in this tutorial.",
            link: "https://www.youtube.com/watch?v=MBzHmwf3MUE",
            image: "https://img.youtube.com/vi/MBzHmwf3MUE/hqdefault.jpg",
        },
        {
            title: "Ruby on Rails Tutorial for Beginners [Updated 2024]",
            description: "An updated tutorial for beginners to learn Ruby on Rails.",
            link: "https://www.youtube.com/watch?v=tl1-vf92z9c",
            image: "https://img.youtube.com/vi/tl1-vf92z9c/hqdefault.jpg",
        },
        {
            title: "Ruby on Rails 7 - Full Course",
            description: "A complete course on Ruby on Rails 7, building a Linktree clone.",
            link: "https://www.youtube.com/watch?v=Ei4Aa6RJTyo",
            image: "https://img.youtube.com/vi/Ei4Aa6RJTyo/hqdefault.jpg",
        },
        {
            title: "Getting Started with Ruby on Rails in 2024",
            description: "A guide to setting up the development environment for Rails.",
            link: "https://www.youtube.com/watch?v=YY3OO3QUrN4",
            image: "https://img.youtube.com/vi/YY3OO3QUrN4/hqdefault.jpg",
        },
        {
            title: "Build a Web Application with Ruby on Rails Framework",
            description: "Learn to build a web application using Ruby on Rails.",
            link: "https://www.youtube.com/watch?v=gK34qIHdwmk",
            image: "https://img.youtube.com/vi/gK34qIHdwmk/hqdefault.jpg",
        },
        {
            title: "Demystifying Some of the Magic Behind Rails",
            description: "An in-depth look at the inner workings of Ruby on Rails.",
            link: "https://www.youtube.com/watch?v=DuPQYYWlhAY",
            image: "https://img.youtube.com/vi/DuPQYYWlhAY/hqdefault.jpg",
        },
        {
            title: "Should You Use Ruby on Rails in 2024?",
            description: "A discussion on the relevance of Ruby on Rails in 2024.",
            link: "https://www.youtube.com/watch?v=w7UzwO673Gg",
            image: "https://img.youtube.com/vi/w7UzwO673Gg/hqdefault.jpg",
        },
        {
            title: "Ruby on Rails Beginner's Guide 2024",
            description: "A beginner's guide to getting started with Ruby on Rails.",
            link: "https://www.youtube.com/watch?v=MBzHmwf3MUE",
            image: "https://img.youtube.com/vi/MBzHmwf3MUE/hqdefault.jpg",
        },
    ],

    // Flask --------------------------------------------------------
    Flask: [
        {
            title: "Flask Tutorial for Beginners - Full Course [2024]",
            description: "Comprehensive Flask crash course covering REST APIs, authentication, and deployment.",
            link: "https://www.youtube.com/watch?v=Z1RJmh_OqeA",
            image: "https://img.youtube.com/vi/Z1RJmh_OqeA/hqdefault.jpg",
        },
        {
            title: "Build a Flask REST API - Full Tutorial [2024]",
            description: "Step-by-step guide to creating REST APIs with Flask and Flask-RESTful.",
            link: "https://www.youtube.com/watch?v=GMppyAPbLYk",
            image: "https://img.youtube.com/vi/GMppyAPbLYk/hqdefault.jpg",
        },
        {
            title: "Flask Web Development Tutorial - Python [2024]",
            description: "Detailed Flask web app development tutorial including templates and database.",
            link: "https://www.youtube.com/watch?v=MwZwr5Tvyxo",
            image: "https://img.youtube.com/vi/MwZwr5Tvyxo/hqdefault.jpg",
        },
        {
            title: "Flask Authentication Tutorial [2024]",
            description: "Implement user authentication in Flask using Flask-Login and JWT.",
            link: "https://www.youtube.com/watch?v=71wSzpLyW9k",
            image: "https://img.youtube.com/vi/71wSzpLyW9k/hqdefault.jpg",
        },
        {
            title: "Deploy Flask App on Heroku - 2024 Guide",
            description: "Learn how to deploy your Flask app on Heroku step-by-step.",
            link: "https://www.youtube.com/watch?v=71wSzpLyW9k",
            image: "https://img.youtube.com/vi/71wSzpLyW9k/hqdefault.jpg",
        },
        {
            title: "Flask API with SQLAlchemy Tutorial [2024]",
            description: "Build a Flask REST API integrated with SQLAlchemy ORM.",
            link: "https://www.youtube.com/watch?v=QnDWIZuWYW0",
            image: "https://img.youtube.com/vi/QnDWIZuWYW0/hqdefault.jpg",
        },
        {
            title: "Flask + React Fullstack Tutorial [2024]",
            description: "Learn how to build a fullstack app with Flask backend and React frontend.",
            link: "https://www.youtube.com/watch?v=VfGW0Qiy2I0",
            image: "https://img.youtube.com/vi/VfGW0Qiy2I0/hqdefault.jpg",
        },
    ],

    // React-Native -----------------------------------------------------------------
    ReactNative: [
        {
            title: "React Native Full Course - Build Real Projects (2024)",
            description: "Complete beginner to advanced course with projects using React Native CLI.",
            link: "https://www.youtube.com/watch?v=ZBCUegTZF7M",
            image: "https://img.youtube.com/vi/ZBCUegTZF7M/hqdefault.jpg",
        },
        {
            title: "React Native Firebase Authentication: Login & Registration Tutorial",
            description: "Implement Firebase Authentication in React Native apps step-by-step.",
            link: "https://www.youtube.com/watch?v=LRLhEtwtNBA",
            image: "https://img.youtube.com/vi/LRLhEtwtNBA/hqdefault.jpg",
        },
        {
            title: "React Native Navigation for Beginners [2024]",
            description: "Master React Navigation v6 in React Native for app routing.",
            link: "https://www.youtube.com/watch?v=pzw66kpmCL8",
            image: "https://img.youtube.com/vi/pzw66kpmCL8/hqdefault.jpg",
        },
        {
            title: "Master Redux in React Native: Complete Tutorial for Beginners (2024)",
            description: "State management using Redux Toolkit in React Native apps.",
            link: "https://www.youtube.com/watch?v=XXfC0VwCTyQ",
            image: "https://img.youtube.com/vi/XXfC0VwCTyQ/hqdefault.jpg",
        },
        {
            title: "Introduction to React Native Animations with Reanimated [2024]",
            description: "Learn to create interactive and dynamic UIs using Reanimated.",
            link: "https://www.youtube.com/watch?v=KUeKsMqIiuQ",
            image: "https://img.youtube.com/vi/KUeKsMqIiuQ/hqdefault.jpg",
        },
        {
            title: "React Native Expo Firebase Authentication Google Sign In Login Auth",
            description: "Integrate Google Sign-In with Firebase Authentication in React Native Expo.",
            link: "https://www.youtube.com/watch?v=abCryO_tr30",
            image: "https://img.youtube.com/vi/abCryO_tr30/hqdefault.jpg",
        },
        {
            title: "React Native Tutorial #44: Bottom Tab Navigation in React Navigation",
            description: "Implement Bottom Tab Navigation in React Native with React Navigation.",
            link: "https://www.youtube.com/watch?v=-bIVh-PDNb0",
            image: "https://img.youtube.com/vi/-bIVh-PDNb0/hqdefault.jpg",
        },
        {
            title: "React Native Expo: Redux Counter Example Tutorial",
            description: "Learn Redux integration with React Native using Expo.",
            link: "https://www.youtube.com/watch?v=9ShLJTcCj_0",
            image: "https://img.youtube.com/vi/9ShLJTcCj_0/hqdefault.jpg",
        },
        {
            title: "React Native Firebase Setup Tutorial",
            description: "Guide to setting up Firebase in React Native projects.",
            link: "https://www.youtube.com/watch?v=kC7B9RH-aA8",
            image: "https://img.youtube.com/vi/kC7B9RH-aA8/hqdefault.jpg",
        },
        {
            title: "React Native Tutorial 2024 | Bottom Tabs Navigation",
            description: "Learn to implement Bottom Tabs Navigation in React Native.",
            link: "https://www.youtube.com/watch?v=CvRceByKJa8",
            image: "https://img.youtube.com/vi/CvRceByKJa8/hqdefault.jpg",
        },
    ],

    // Swift ----------------------------------------------------------------------------
    Swift: [
        {
            title: "Swift Programming Tutorial for Beginners – Full Course (2024)",
            description: "A comprehensive tutorial covering Swift programming fundamentals for beginners.",
            link: "https://www.youtube.com/watch?v=JEiENT6b44Y",
            image: "https://img.youtube.com/vi/JEiENT6b44Y/hqdefault.jpg",
        },
        {
            title: "Build iOS App Full Course | Rick & Morty App | 2023 | Swift",
            description: "Learn to build a complete iOS app using Swift in this detailed course.",
            link: "https://www.youtube.com/watch?v=fTGA8cjbf5Y",
            image: "https://img.youtube.com/vi/fTGA8cjbf5Y/hqdefault.jpg",
        },
        {
            title: "Swift Programming Tutorial | FULL COURSE | Absolute Beginner",
            description: "An in-depth course designed for absolute beginners to learn Swift programming.",
            link: "https://www.youtube.com/watch?v=CwA1VWP0Ldw",
            image: "https://img.youtube.com/vi/CwA1VWP0Ldw/hqdefault.jpg",
        },
        {
            title: "SwiftUI Fundamentals | FULL COURSE | Beginner Friendly",
            description: "A beginner-friendly course focusing on SwiftUI fundamentals for building iOS applications.",
            link: "https://www.youtube.com/watch?v=b1oC7sLIgpI",
            image: "https://img.youtube.com/vi/b1oC7sLIgpI/hqdefault.jpg",
        },
    ],

    // Flutter ------------------------------------------------------------------
    Flutter: [
        {
            title: "Flutter Tutorial for Beginners - Full Course (2024)",
            description: "Complete Flutter course covering basics to advanced UI and app development.",
            link: "https://www.youtube.com/watch?v=VPvVD8t02U8",
            image: "https://img.youtube.com/vi/VPvVD8t02U8/hqdefault.jpg",
        },
        {
            title: "Build a Complete Flutter App from Scratch (2023)",
            description: "Step-by-step guide to building a real Flutter app with state management.",
            link: "https://www.youtube.com/watch?v=GLSG_Wh_YWc",
            image: "https://img.youtube.com/vi/GLSG_Wh_YWc/hqdefault.jpg",
        },
        {
            title: "Flutter & Dart - The Complete Guide (2024)",
            description: "Comprehensive course covering Flutter and Dart programming in detail.",
            link: "https://www.youtube.com/watch?v=x0uinJvhNxI",
            image: "https://img.youtube.com/vi/x0uinJvhNxI/hqdefault.jpg",
        },
        {
            title: "Flutter State Management Tutorial (Provider) (2023)",
            description: "Learn state management in Flutter using the Provider package.",
            link: "https://www.youtube.com/watch?v=d_m5csmrf7I",
            image: "https://img.youtube.com/vi/d_m5csmrf7I/hqdefault.jpg",
        },
        {
            title: "Flutter Animations Tutorial for Beginners (2023)",
            description: "Create smooth animations in Flutter apps with simple examples.",
            link: "https://www.youtube.com/watch?v=1gDhl4leEzA",
            image: "https://img.youtube.com/vi/1gDhl4leEzA/hqdefault.jpg",
        },
        {
            title: "Flutter REST API Integration Tutorial (2023)",
            description: "Learn how to connect your Flutter app to REST APIs.",
            link: "https://www.youtube.com/watch?v=pTJJsmejUOQ",
            image: "https://img.youtube.com/vi/pTJJsmejUOQ/hqdefault.jpg",
        },
        {
            title: "Flutter Layouts and Widgets Tutorial (2023)",
            description: "Understand Flutter’s layout system and widgets deeply.",
            link: "https://www.youtube.com/watch?v=lkF0TQJO0bA",
            image: "https://img.youtube.com/vi/lkF0TQJO0bA/hqdefault.jpg",
        },
    ],

    // Generative AI -----------------------------------------------------------------
    GenerativeAI: [
        {
            title: "Generative AI Full Course - Learn AI with Hands-On Projects (2024)",
            description: "Comprehensive generative AI course covering GANs, VAEs, Diffusion Models and practical projects.",
            link: "https://www.youtube.com/playlist?list=PLkDaE6sCZn6F6wUI9tvS_Gw1vaFAx6rd6",
            image: "https://img.youtube.com/vi/_i3aqgKVNQI/hqdefault.jpg",
        },
        {
            title: "Intro to Generative AI with Python | GANs and More (2023)",
            description: "Learn generative AI fundamentals and build GANs from scratch in Python.",
            link: "https://www.youtube.com/watch?v=8L11aMN5KY8",
            image: "https://img.youtube.com/vi/8L11aMN5KY8/hqdefault.jpg",
        },
        {
            title: "Build Your Own GAN - Generative Adversarial Network Tutorial (2023)",
            description: "Step-by-step tutorial to build and train a GAN using TensorFlow.",
            link: "https://www.youtube.com/watch?v=8L11aMN5KY8",
            image: "https://img.youtube.com/vi/8L11aMN5KY8/hqdefault.jpg",
        },
        {
            title: "Transformers & Generative AI Explained | NLP and Deep Learning (2024)",
            description: "Understanding transformer models powering generative AI systems.",
            link: "https://www.youtube.com/watch?v=4Bdc55j80l8",
            image: "https://img.youtube.com/vi/4Bdc55j80l8/hqdefault.jpg",
        },
        {
            title: "Deep Learning for Generative AI - GANs and Autoencoders (2023)",
            description: "Deep dive into autoencoders and GAN architectures for generative AI.",
            link: "https://www.youtube.com/watch?v=9zhrxE5PQgY",
            image: "https://img.youtube.com/vi/9zhrxE5PQgY/hqdefault.jpg",
        },
    ],

    // AI Agents-----------------------------------------------------------
    AIAgents: [
        {
            title: "How to Build AI Agents: Ultimate Beginner's Guide",
            description: "Learn how to build AI Agents from scratch with this ultimate guide for complete beginners.",
            link: "https://www.youtube.com/watch?v=a8NA0WGI9OI",
            image: "https://img.youtube.com/vi/a8NA0WGI9OI/hqdefault.jpg",
        },
        {
            title: "Learn AI Agents - How they Work & Build Your Own",
            description: "Understand the fundamentals of AI agents and how to build your own.",
            link: "https://www.youtube.com/watch?v=Wgo_NVYSsJc",
            image: "https://img.youtube.com/vi/Wgo_NVYSsJc/hqdefault.jpg",
        },
        {
            title: "Full Course (Lessons 1-10) AI Agents for Beginners",
            description: "A comprehensive course covering AI agents from basics to advanced topics.",
            link: "https://www.youtube.com/watch?v=OhI005_aJkA",
            image: "https://img.youtube.com/vi/OhI005_aJkA/hqdefault.jpg",
        },
        {
            title: "Complete Beginner's Guide On Building Your First AI Agent (No Code)",
            description: "A step-by-step guide to building your first AI agent without any coding.",
            link: "https://www.youtube.com/watch?v=y-Dt2ztHwMY",
            image: "https://img.youtube.com/vi/y-Dt2ztHwMY/hqdefault.jpg",
        },
        {
            title: "Building Your First AI Agent | Introduction to Voiceflow 2024",
            description: "Learn how to build your first AI agent using Voiceflow in 2024.",
            link: "https://www.youtube.com/watch?v=qg1fBEp4ijY",
            image: "https://img.youtube.com/vi/qg1fBEp4ijY/hqdefault.jpg",
        },
        {
            title: "Build and Deploy a SaaS AI Agent Platform | Full Course 2025",
            description: "Learn how to build and deploy a SaaS AI agent platform in 2025.",
            link: "https://www.youtube.com/watch?v=xEDCEmqyvC8",
            image: "https://img.youtube.com/vi/xEDCEmqyvC8/hqdefault.jpg",
        },
        {
            title: "5 simple AI Agents you must have - beginners guide",
            description: "Discover five simple AI agents that every beginner should know about.",
            link: "https://www.youtube.com/watch?v=WLvQCIUWebs",
            image: "https://img.youtube.com/vi/WLvQCIUWebs/hqdefault.jpg",
        },
        {
            title: "How to Make AI Agents Without Coding Full Course (n8n + OpenAI)",
            description: "A full course on creating AI agents without coding using n8n and OpenAI.",
            link: "https://www.youtube.com/watch?v=V4nxbrJ6MFo",
            image: "https://img.youtube.com/vi/V4nxbrJ6MFo/hqdefault.jpg",
        },
        {
            title: "Building AI Agents: A Step-by-Step Guide",
            description: "A detailed step-by-step guide to building AI agents.",
            link: "https://www.youtube.com/watch?v=8QQjOSB0ERo",
            image: "https://img.youtube.com/vi/8QQjOSB0ERo/hqdefault.jpg",
        },
        {
            title: "n8n AI Agent Tutorial | Building Multi Agent Workflows",
            description: "Learn how to build multi-agent workflows using n8n.",
            link: "https://www.youtube.com/watch?v=o2Pubq36Pao",
            image: "https://img.youtube.com/vi/o2Pubq36Pao/hqdefault.jpg",
        },
    ],
};