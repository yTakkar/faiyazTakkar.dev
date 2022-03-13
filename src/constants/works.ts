import ESPN from 'public/images/logos/espn.jpeg'
import OwnStore from 'public/images/logos/ownstore.jpeg'
import ProximityLabs from 'public/images/logos/proximity-labs.jpeg'
import DeltaExchange from 'public/images/logos/delta-exchange.jpeg'
import PeopleInteractive from 'public/images/logos/people-interactive.jpeg'
import OpenSource from 'public/images/logos/github.png'
import ShifaFashion from 'public/images/logos/jeans.jpeg'

const workConfig = [
  {
    role: 'Independent Consultant',
    company: {
      name: 'ESPN',
      logo: ESPN,
      urls: [
        {
          label: 'ESPNcricinfo',
          href: 'https://espncricinfo.com',
        },
        {
          label: 'ESPN',
          href: 'https://espn.com',
        },
      ],
    },
    location: 'Remote',
    experience: {
      from: 'Nov 2020',
      to: 'Present',
      total: '',
    },
    highlights: [
      `Parent organization of the world's largest cricket platform.`,
      `Joined ESPN as an independent consultant for ESPNcricinfo.`,
      `Worked with ESPN, Disney and Hotstar teams globally.`,
      `Core contributor to ESPNcricinfo from development to deployment.`,
      `Took ownership of legacy codebases too.`,
    ],
  },
  {
    role: 'Author',
    company: {
      name: 'OwnStore',
      logo: OwnStore,
      urls: [
        {
          label: 'OwnStore',
          href: 'https://ownstore.dev',
        },
        {
          label: 'Demo',
          href: 'https://own-store-demo.vercel.app/',
        },
      ],
    },
    location: 'Remote',
    experience: {
      from: 'Feb 2021',
      to: 'Dec 2021',
      total: '11 mos',
    },
    highlights: [
      `Developed as a side project.`,
      `Worked end-to-end from ideation, data design, UI design, development, testing, deployment, marketing to analytics.`,
      `Completely open-sourced now!`,
    ],
  },
  {
    role: 'Lead Full-Stack Consultant',
    company: {
      name: 'Proximity Labs',
      logo: ProximityLabs,
      urls: [
        {
          label: 'Proximity',
          href: 'https://proximity.tech',
        },
        {
          label: 'ESPNcricinfo',
          href: 'https://espncricinfo.com',
        },
      ],
    },
    location: 'Remote',
    experience: {
      from: 'Jan 2020',
      to: 'Oct 2020',
      total: '10 mos',
    },
    highlights: [
      `Proximity's first employee.`,
      `Joined to help rewrite ESPNcricinfo from the ground up.`,
      `Lead core development of ESPNcricinfo.`,
    ],
  },
  {
    role: 'Software Consultant',
    company: {
      name: 'Delta Exchange',
      logo: DeltaExchange,
      urls: [
        {
          label: 'Delta Exchange',
          href: 'https://delta.exchange',
        },
      ],
    },
    location: 'Remote',
    experience: {
      from: 'August 2019',
      to: 'Jan 2020',
      total: '6 mos',
    },
    highlights: [
      `Worked on all things front-end for DeltaExchange.`,
      `We re-architected the entire project to the new stack for realtime performance issues.`,
    ],
  },
  {
    role: 'Software Engineer',
    company: {
      name: 'People Interactive',
      logo: PeopleInteractive,
      urls: [
        {
          label: 'Sangam',
          href: 'https://sangam.com',
        },
        {
          label: 'Shaadi',
          href: 'https://shaadi.com',
        },
      ],
    },
    location: 'Mumbai',
    experience: {
      from: 'June 2018',
      to: 'July 2019',
      total: '1 yr 2 mos',
    },
    highlights: [
      `Youngest engineer (19y)`,
      `Parent organization of the world's largest matrimonial platform.`,
      `Initially worked on Shaadi.com's vernacular project.`,
      `Was part of Sangam.com's core front-end team.`,
      `Helped migrate all legacy pages to the new stack.`,
      `Worked on features end-to-end from FE to BE.`,
      `Also developed testing tools for QA.`,
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: {
      name: 'Open-Source',
      logo: OpenSource,
      urls: [
        {
          label: 'Repositories',
          href: 'https://github.com/yTakkar',
        },
      ],
    },
    location: 'Remote',
    experience: {
      from: 'Jul 2016',
      to: 'June 2018',
      total: '2 yrs',
    },
    highlights: [
      `Worked primary on open-source projects. Can be found on my GitHub profile.`,
      `Built various projects with different tech stack for learning.`,
    ],
  },
  {
    role: 'Factory Boy',
    company: {
      name: 'Shifa Fashion',
      logo: ShifaFashion,
      urls: [],
    },
    location: 'Dharavi, Mumbai',
    experience: {
      from: 'Jan 2016',
      to: 'Oct 2016',
      total: '10 mos',
    },
    highlights: [
      `Worked part-time as a factory boy at a Jeans producing company.`,
      `Was primarily working to bundle stack of jeans properly before transporting to the exporter.`,
    ],
  },
]

export default workConfig
