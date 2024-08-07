import Nature from '../assets/images/aboutMe/nature/nature.jpg'
import Nature2 from '../assets/images/aboutMe/nature/nature-2.jpg'
import Nature3 from '../assets/images/aboutMe/nature/nature-3.jpg'
import Nature4 from '../assets/images/aboutMe/nature/nature-4.jpg'
import Nature5 from '../assets/images/aboutMe/nature/nature-5.jpg'
import Nature6 from '../assets/images/aboutMe/nature/nature-6.jpg'

import Project from '../assets/images/aboutMe/projects/project.jpg'
import Project2 from '../assets/images/aboutMe/projects/project-2.jpg'
import Project3 from '../assets/images/aboutMe/projects/project-3.jpg'
import Project4 from '../assets/images/aboutMe/projects/project-4.jpg'
import Project5 from '../assets/images/aboutMe/projects/project-5.jpg'
import Project6 from '../assets/images/aboutMe/projects/project-6.jpg'

import Apartment from '../assets/images/aboutMe/moved/apartment.jpg'
import Apartment2 from '../assets/images/aboutMe/moved/apartment-2.jpg'
import Apartment3 from '../assets/images/aboutMe/moved/apartment-3.jpg'
import Apartment4 from '../assets/images/aboutMe/moved/apartment-4.jpg'
import Apartment5 from '../assets/images/aboutMe/moved/apartment-5.jpg'
import Apartment6 from '../assets/images/aboutMe/moved/apartment-6.jpg'

import Autumn from '../assets/images/aboutMe/autumn/autumn.jpg'
import Autumn2 from '../assets/images/aboutMe/autumn/autumn-2.jpg'
import Autumn3 from '../assets/images/aboutMe/autumn/autumn-3.jpg'
import Autumn4 from '../assets/images/aboutMe/autumn/autumn-4.jpg'
import Autumn5 from '../assets/images/aboutMe/autumn/autumn-5.jpg'
import Autumn6 from '../assets/images/aboutMe/autumn/autumn-6.jpg'


interface AlbumData {
    title: string;
    date: string;
    images: string[];
}
export const albumData: { [key: string]: AlbumData } = {
    'relaxing-in-nature': {
      title: 'Relaxing in nature',
      date: '21.09.2020',
      images: [
        Nature,
        Nature2,
        Nature3,
        Nature4,
        Nature5,
        Nature6 
      ]
    },
    'finalizing-a-complex-project': {
      title: 'Finalizing a complex project',
      date: '15.09.2020',
      images: [
        Project,
        Project2,
        Project3,
        Project4,
        Project5,
        Project6
      ]
    },
    'moved-into-a-new-apartment': {
      title: 'Moved into a new apartment',
      date: '11.09.2020',
      images: [
        Apartment,
        Apartment2,
        Apartment3,
        Apartment4,
        Apartment5,
        Apartment6
      ]
    },
    'autumn-is-here!': {
        title: 'Autumn is here!',
        date: '28.08.2020',
        images: [
        Autumn,
        Autumn2,
        Autumn3,
        Autumn4,
        Autumn5,
        Autumn6
        ]
    }
};