// Ordered for the homepage: the first 3 show in the hero on mobile, so clients go first.
// `image` and `linkedin` are optional — without an image, initials are shown.
// `projects` lists slugs from staticdata/projects.js this person can vouch for.
const testimonials = [
    {
        "name": "Ujwal Joshi",
        "title": "Founder at BagAChat.com",
        "testimonial": "Darshan worked with us at BagAChat in 2023, while he was still in his third year of college. He is a quick learner! He worked on a large legacy React codebase for one of our premium clients and built Node.js integrations for one of our products. Even then, he understood that rewriting a big live codebase would risk breaking things the client depended on, so he learned how it worked and made careful, targeted changes. He was easy to work with, and it’s been good to see him grow since. He also is proactive to give suggestions and discuss ideas during the work.",
        "linkedin": "https://www.linkedin.com/in/ujwal-joshi-6a487519/",
        "image": "/testimonials/ujwal.jpeg",
        "projects": ["bagachat"]
    },
    {
        "name": "Aditya Deole",
        "title": "Mechanical Engineer · Oil & Gas, FEA, Design",
        "testimonial": "I had the pleasure of working with Darshan during the development of BendTester, a new machine for which he was responsible for both frontend and backend development. Darshan is technically skilled, knowledgeable, and highly dependable. What impressed me most was his commitment to quality and delivering work on time. He is punctual, takes ownership of his responsibilities, and consistently meets agreed timelines. Despite being early in his career, Darshan demonstrates maturity in his communication, with a clear and practical approach to problem-solving. He is also flexible, adaptable, and always willing to accommodate changing project requirements. Darshan was an absolute pleasure to work with, and I would highly recommend him to anyone looking for a capable and committed developer.",
        "linkedin": "https://www.linkedin.com/in/adityamech/",
        "image": "/testimonials/aditya.png",
        "projects": ["bendtester"]
    },
    {
        "name": "Deepak Kumar Subramaniam",
        "title": "Group VP Operations & Manufacturing · Ex-Indian Navy Officer · IIM-Calcutta",
        "testimonial": "I must place on record that when I was at my most stretched thin phase, Darshan was the only person who wanted to see the Smart Tutor product I developed and understood the full functioning. Then, despite me giving a very small spec, he expanded his scope to help the website for MirSolutions.in and spotted the pitfalls that would have occurred when we went operational. That is the hallmark of a true professional and beautiful human being who, despite not being told, went out of his way and got it done to standards.",
        "linkedin": "https://www.linkedin.com/in/deepak-kumar-subramaniam/",
        "image": "/testimonials/deepak.jpeg",
        "projects": ["smart-tutor"]
    },
    {
        "name": "Pankaj Dhamane",
        "title": "Founder @ Hexanovate",
        "testimonial": "Darshan is quite dependable on his development work, especially in frontend. Working with him has been fluent. Darshan has showcased a remarkable proficiency in developing marketing websites, fintech products, and performance marketing landing pages using Next.js. He has consistently delivered high-quality work that not only meets but often exceeds project requirements. His expertise of Next.js, coupled with a strong foundation in web development, has been instrumental in the success of our projects. He is just a message away when working with him on various projects.",
        "linkedin": "https://www.linkedin.com/in/pankaj-dhamane-027ba2147/",
        "image": "/testimonials/pankaj.jpeg",
        "projects": ["tredzy", "clear-claim", "sfdi"]
    },
    {
        "name": "Kaivalya Mendki",
        "title": "MTS-III at Nutanix · Ex-Thoughtworks · UI Developer",
        "testimonial": "I highly recommend Darshan for Frontend Developer. Darshan is wonderful to work with and he possesses a great skillset when it comes to frontend development. He always strives to go above and beyond while achieving the team's goals and this has helped him to scale up quickly into any new project that he is assigned with. Darshan has a long way ahead in his career and I am sure he will excel wherever he goes.",
        "linkedin": "https://www.linkedin.com/in/kaivalya-mendki/",
        "image": "/testimonials/kaivalya.jpeg",
        "projects": ["tredzy"]
    },
    {
        "name": "Esha Mane",
        "title": "Mid-QA Engineer",
        "testimonial": "I tested Darshan’s Salesforce work when we were on the same team at Koncero back in 2021. Whenever I flagged an issue, he understood it quickly and turned the fix around promptly. Testing his work was always smooth, thanks to his responsiveness and collaborative approach. He was quick to understand the root cause of issues, communicate clearly, and make the necessary changes. I appreciated his willingness to address feedback and work closely with QA to ensure things were functioning as expected. His technical understanding and ownership made the overall testing process efficient and straightforward. It was a positive experience working with him, and I’d be happy to recommend him as a dependable and collaborative professional to work with.",
        "linkedin": "https://www.linkedin.com/in/esha-mane-86a0a018/",
        "image": "/testimonials/esha.png",
        "projects": ["rocketloans"]
    },
    {
        "name": "Vibhanshu Rathod",
        "title": "Client",
        "testimonial": "I’ve known Darshan for 3 years and highly recommend him as a Fullstack Developer. He is skilled, reliable, and consistently delivers top-notch work. His expertise would be a great asset to any team.",
        "linkedin": "https://www.linkedin.com/in/heyvibhanshu/",
        "image": "/testimonials/vibhanshu.png",
        "projects": ["crazico"]
    },
    {
        "name": "Poonam Patil",
        "title": "Software Developer",
        "testimonial": "I had the pleasure of working with him and was impressed by his Salesforce development skills and technical knowledge. He has a good understanding of Salesforce customization, problem-solving, and developing solutions to meet business requirements. He is a dedicated and reliable professional who works well with the team. I would highly recommend him for Salesforce development roles.",
        "linkedin": "https://www.linkedin.com/in/poonam-patil-942673a6/",
        "image": "/testimonials/poonam.jpeg",
        "projects": ["rocketloans"]
    },
    {
        "name": "Jesus Mejia",
        "title": "Client",
        "testimonial": "Darshan is a very skilled and professional full stack developer. I am very impressed with his ability to listen to my requirements and walk me through the possibilities. I am very happy with Darshan's work and plan on using him in future projects. He covered all the requirements within the timeline he proposed. You will be impressed as well!",
        "linkedin": "https://www.linkedin.com/in/jesus-m-b06739103/",
        "image": "/testimonials/jesus.jpeg",
        "projects": ["air3x3"]
    },
    {
        "name": "Harshkumar Pasi",
        "title": "Building · Schbang AI Labs",
        "testimonial": "I have known Darshan for 6 years. Since school, he has been very disciplined and has always been interested in what inspires him. His commerce-to-computer science transition shows confidence and willingness to take risks. Over the past year, his love for designing software that can contribute to society has made his work unique and creative. He has contributed to many open-source projects and has his own great portfolio of projects covering games, applications, and more. Therefore, when working with front-end or back-end applications, I prefer Darshan. Undoubtedly, Darshan will be a great asset for any organization with which he works. In the future, we hope to work together on very good software.",
        "linkedin": "https://www.linkedin.com/in/hkp19/",
        "image": "/testimonials/harsh.png",
        "projects": ["uncodez"]
    },
    {
        "name": "LooYee NG",
        "title": "Client",
        "testimonial": "Darshan was very enthusiastic and gave some useful solution for the project. The communication was smooth and work were delivered as required.",
        "linkedin": "https://www.linkedin.com/in/looyee-ng/",
        "image": "/testimonials/looyee.jpeg",
        "projects": ["babydojo"]
    }
]

export default testimonials;
