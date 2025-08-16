import { Project } from "@/app/interfaces/project-interface";

const DUMMY_PROJECTS: Project[] = [
   {
    id: 'digitalisasi',
    title: 'Digitalisasi',
    subtitle: 'Transformasi digital dengan mudah.',
    heroImage: 'https://images.unsplash.com/photo-1717386255785-59c670564341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    services: ['Web Design', 'Backend Development', 'CMS Integration'],
    client: 'Example Client',
    date: 'February 2024',
    description: 'A comprehensive digital solution to help businesses streamline their operations and engage with customers more effectively. We built a custom web application with a robust backend, allowing for easy content management.',
    galleryImages: [
      'https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1651340550839-3b295d930048?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },{
    id: 'e-commerce-startup',
    title: 'E-Commerce Startup',
    subtitle: 'Solusi belanja online yang inovatif.',
    heroImage: 'https://images.unsplash.com/photo-1688561807971-728cd39eb71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    services: ['E-Commerce Platform', 'Payment Gateway Integration', 'SEO & Analytics'],
    client: 'Toko Kawan Lama',
    date: 'January 2024',
    description: 'We developed a modern e-commerce platform with a clean design and user-friendly interface. The project included integrating multiple payment gateways and building a powerful analytics dashboard for the client to track sales and customer behavior. The goal was to provide a scalable solution that could grow with the business.',
    galleryImages: [
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1683313060361-da015696d16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1674027392838-d85710a5121d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 'mobile-app-fintech',
    title: 'Mobile App Fintech',
    subtitle: 'Aplikasi keuangan yang aman dan mudah.',
    heroImage: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    services: ['Mobile App Development', 'API Integration', 'UI/UX Design'],
    client: 'Financie Tech',
    date: 'March 2024',
    description: 'This project involved creating a secure and intuitive mobile application for financial management. We focused on security protocols and a smooth user experience, ensuring that users could manage their finances with confidence. The application features include real-time transaction tracking and personalized financial reports.',
    galleryImages: [
      'https://images.unsplash.com/photo-1726065235158-d9c3f817f331?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1642142784358-21bba9293a79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1494366222322-387658a1a976?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 'company-profile',
    title: 'Company Profile Website',
    subtitle: 'Membangun identitas digital perusahaan.',
    heroImage: '    https://images.unsplash.com/photo-1638683296422-e720cd574654?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    services: ['Website Development', 'Brand Strategy', 'Content Creation'],
    client: 'Sinar Gemilang',
    date: 'February 2024',
    description: 'A bespoke website to showcase the company\'s services, portfolio, and values. The design was crafted to reflect the brand\'s identity, using a modern and professional aesthetic. We optimized the site for performance and search engines to ensure maximum visibility and a strong first impression for potential clients.',
    galleryImages: [
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1531497151418-0519708d443e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1742109369280-bbd22dcc2f9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 'online-learning',
    title: 'Platform Pembelajaran Online',
    subtitle: 'Akses pendidikan dari mana saja.',
    heroImage: 'https://images.unsplash.com/photo-1588912914074-b93851ff14b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    services: ['Platform Development', 'LMS Integration', 'User Management'],
    client: 'EduSmart',
    date: 'April 2024',
    description: 'We created a robust learning management system (LMS) that allows students and instructors to connect seamlessly. The platform supports a variety of content types, including videos, quizzes, and live sessions. We built a scalable backend to handle a large number of users and ensure a smooth learning experience.',
    galleryImages: [
      'https://images.unsplash.com/photo-1632811484536-6f73dc0934a3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1670552509909-9f629dd3296e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
];



export async function getProjectsData(): Promise<Project[]> {
  // const apiProjectUrl = `https://lawu-digital-server-production.up.railway.app/api/services`;

  // try {
  //   const res = await fetch(apiProjectUrl, { next: { revalidate: 3600 } }); 

  //   if (!res.ok) {
  //     if (res.status === 404) {
  //       return null; 
  //     }
  //     throw new Error(`Failed to fetch news article: ${res.statusText}`);
  //   }

  //   const projectsData: Project = await res.json();
  return DUMMY_PROJECTS;
  // } catch (error) {
  //   console.error('Error fetching data:', error);
  //   return null;
  // }
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const project = DUMMY_PROJECTS.find(
    (p: Project) => p.id === id
  );
  return project;
}