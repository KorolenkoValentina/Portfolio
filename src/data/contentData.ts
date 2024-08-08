import AboutMeFirst from '../assets/images/aboutMe/aboutme-1.png';
import AboutMeSecond from '../assets/images/aboutMe/aboutme-2.png';
import AboutMeThird from '../assets/images/aboutMe/aboutme-3.png';
import AboutMeForth from '../assets/images/aboutMe/aboutme-4.png';
import Baner from '../assets/images/baner.jpg';
import Baner3 from '../assets/images/baner-3.jpg';

import MyWorkImage1 from '../assets/images/my-work.jpg'
import MyWorkImage2 from '../assets/images/my-work-2.jpg';


interface AboutMeItem {
  src: string;
  title: string;
  subtitle: string;
}

interface ContentSectionData {
  title: string;
  subtitle: string;
  moreText: string;
  date: string;
  category: string;
}

interface BannerData {
  src: string;
  alt: string;
}
export interface ReadingItemProps {
  title: string;
  date: string;
  link: string;
  
}
interface WorkItem {
  imageSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  tags: string[];
  linkText: string;
}
export const aboutMeItems: AboutMeItem[] = [
  { src: AboutMeFirst, title: 'Relaxing in nature', subtitle: '21.09.2020'},
  { src: AboutMeSecond, title: 'Finalizing a complex project', subtitle: '15.09.2020'  },
  { src: AboutMeThird, title: 'Moved into a new apartment', subtitle: '11.09.2020' },
  { src: AboutMeForth, title: 'Autumn is here!', subtitle: '28.08.2020'}
];

  
export const contentSections:ContentSectionData[] = [
    {
      title: "How to write code quickly and painlessly?",
      subtitle: "To write code quickly and painlessly, start by planning your approach before diving into the actual coding. Utilizing code snippets and templates can save you time, and leveraging libraries and frameworks helps avoid reinventing the wheel. Ensure your code is readable and maintainable with meaningful variable names and comments, as this reduces debugging time. Automate repetitive tasks with build tools and formatters to streamline your workflow. Improve your typing speed and learn editor shortcuts to boost efficiency.",
      moreText: "Break down tasks into smaller pieces to stay focused and track progress easily. Utilize debugging tools to identify and fix issues swiftly. Don’t hesitate to collaborate and share knowledge with others, as code reviews and pair programming can be extremely helpful. Finally, keep learning about new tools and best practices to continuously enhance your coding efficiency.",
      date: "21.06.2020",
      category: "website creation"
    },
    {
      title: "How I went to FrontEnd Conf 2021.",
      subtitle: "In 2021, I had the exciting opportunity to attend FrontEnd Conf, an event renowned for its focus on front-end development trends and best practices. The conference offered a rich program with insightful talks, workshops, and networking opportunities.",
      moreText: "I learned a great deal about emerging technologies, improved my skills in front-end development, and connected with industry experts and fellow developers. The experience was both inspiring and invaluable, giving me fresh perspectives to apply to my projects.",
      date: "21.06.2020",
      category: "video promotion"
    }
];
  
export const banners:BannerData[] = [
    { src: Baner, alt: "baner" },
    { src: Baner3, alt: "baner" }
];


export const subtitles = [
    {
      mainSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
      secondarySubtitle: "21.06.2020"
    }
];

export   const readingItems:ReadingItemProps[] = [
  { title: "How I went to FrontEnd Conf 2021.", date: "21.06.2020", link: "#conference" },
  { title: "How to write code quickly and ...", date: "21.06.2020", link: "#conference" },
  { title: "Bought a new laptop for 150,000 ", date: "21.06.2020", link: "#video-blog" },
  { title: "How to write code quickly and painlessly?", date: "21.06.2020", link: "#writing" }
];
export const articleContent = [
  {
    title: "How to create websites easily",
    date: "21.06.2020",
    category: "website creation",
    content: [
      "Creating websites easily involves a blend of using the right tools and following effective practices. Start by choosing a user-friendly website builder or content management system (CMS) like WordPress, Wix, or Squarespace. These platforms offer intuitive drag-and-drop interfaces that simplify the design and development process. For more control and customization, consider using a framework like Bootstrap or a front-end library such as React, which can help streamline your development workflow.",
      "Begin by selecting a template or theme that closely aligns with your vision. Customize it to fit your needs by modifying colors, fonts, and layout elements. This approach allows you to focus on content creation rather than starting from scratch. Make use of pre-built components and plugins to add functionalities without extensive coding.",
      "When adding content, keep it organized and visually appealing. Use high-quality images and clear, concise text to engage your audience. Ensure your website is responsive, meaning it looks and functions well on various devices, including desktops, tablets, and smartphones. Testing is crucial to ensure that your website works correctly across different browsers and devices. Utilize browser developer tools and online testing platforms to identify and fix any issues. Finally, publish your website with a reliable hosting provider and set up analytics to track its performance. Regularly update your content and monitor user feedback to make continuous improvements."
    ]
  }
];

export const workItems: WorkItem[] = [
  {
    imageSrc: MyWorkImage1,
    altText: 'my-work-1',
    title: 'altermono.com',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    tags: ['design', 'website development', 'SMM'],
    linkText: 'Go to site'
  },
  {
    imageSrc: MyWorkImage2,
    altText: 'my-work-2',
    title: 'codedoco.com',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.',
    tags: ['design', 'website development', 'SMM'],
    linkText: 'Go to site'
  }
];