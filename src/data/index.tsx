import Github from '@/components/icons/Github'

import { Instagram } from '@/components/icons/Instagram'
import { LinkedIn } from '@/components/icons/LinkedIn'

export const socialLinks = [
  { id: 'github', href: 'https://github.com/manzura94', icon: <Github /> },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/manzura-jabbarova-19066712a/',
    icon: <LinkedIn />,
  },
  { id: 'instagram', href: '#', icon: <Instagram /> },
]

export const jobData = [
  {
    id: 1,
    time: 'Nov 2024 - Present',
    position: 'Frontend Developer - Vosyn AI',
    desc: 'Build and maintain critical components used to construct the frontend for projects, across the whole product. Work closely with cross-functional teams, including developers, designers and product managers, to implement and advocate for best practices in web accessibility',
    techs: ['Javascript', 'NextJS', 'ReduxJS', 'MUI design', 'CSS'],
    link: 'https://vosyn.ai/',
  },
  {
    id: 2,
    time: 'Aug 2022 - January 2023',
    position: 'Frontend Developer - APPX Group',
    desc: 'Build admin panels and dashboards, focusing on building user-friendly interfaces. Collaborate with backend developers and designers to integrate APIs, manage state using Redux Toolkit, and ensure responsive UI designs. Actively participate in code reviews, optimized frontend performance, and implemented best practices for maintainability.',
    techs: [
      'Javascript',
      'TypeScript',
      'ReactJS',
      'NextJS',
      'Ant design',
      'MUI design',
      'CSS',
      'HTML & SCSS',
    ],
    link: 'https://appx.uz/',
  },
]

export const projects = [
  {
    id: 1,
    name: 'GraphQL App',
    picture: '/graphql.jpg',
    desc: 'A lightweight alternative to Postman and GraphiQL, seamlessly integrated into a single application. Built with Next.js, TypeScript, and MUI, it supports multilingual functionality (i18n) with two languages and leverages Firebase for authentication and data management.',
    techniques: ['NextJS', 'ReduxJS', 'Typescript', 'MUI design', 'Firebase'],
    link: 'https://rng-graphiql.vercel.app',
  },
  {
    id: 2,
    name: 'Tejamkor App',
    picture: '/tejamkor.jpg',
    desc: 'A website developed for a finance company, built using Next.js for a fast and dynamic user experience, with SCSS for enhanced styling and maintainability. Developed and maintained 15+ reusable, high-quality frontend components using NextJS, decreasing development time by 15 percent and improving code maintainability.',
    techniques: ['NextJS', 'SCSS'],
    link: 'https://tejamkor.vercel.app/',
  },
  {
    id: 3,
    name: 'Coffee House',
    picture: '/coffee-house.jpg',
    desc: 'A website developed during the frontend development course, built using pure Javascript with SCSS for enhanced styling and maintainability. No Javascript frameworks are not used in this website to enhance experience in JS.',
    techniques: ['Javascript', 'SCSS'],
    link: 'https://manzura94.github.io/coffee-house/',
  },
]
