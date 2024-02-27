import SSTR1 from '@/assets/Projects/6.png';
import Daiwo1 from '@/assets/Projects/5.png';
import Knebel1 from '@/assets/Projects/2.png';
import Uwe1 from '@/assets/Projects/saborarte.png';
import Yesor1 from '@/assets/Projects/1.png';
import Yoti1 from '@/assets/Projects/4.png';


export const imagesList = {
    'daiwo': [Daiwo1],
    'knebel': [Knebel1],
    'uwe-hub': [Uwe1],
    'yes-or': [Yesor1],
    'yoti': [Yoti1],
    'sstr': [SSTR1],
}

export const projects = [
    {
        id: 'yes-or',
        'card-title': 'BlackLabs Strategies',
        title: 'YesOR: Corporate Website',
        description: {
            concept: "Sitio web para asesoria Financiera y de Trading.",
        },
        tags: ['Frontend WEB'],
        images: [imagesList['yes-or']],
        link: 'https://backlab-strategies.vercel.app/home'
    },
    {
        id: 'yoti',
        'card-title': 'Libreria Online',
        title: 'Yoti: E-Commerce Business Branding',
        description: {
            concept: "Libreria de Programacion y Trading Online.",
        },
        tags: ['Frontend Web',],
        images: [imagesList.yoti],
    },
    {
        id: 'knebel',
        'card-title': 'CryptoS',
        title: 'Knebel: E-Commerce Development',
        description: {
            concept: "Web informativa de criptomonedas.",
        },
        tags: ['Frontend WEB'],
        images: [imagesList.knebel]
    },
    {
        id: 'uwe-hub',
        'card-title': 'SaborArte',
        title: 'Uwehub: Educational Website',
        description: {
            concept: "Restaurante de muestra de Frontend.",
        },
        tags: ['Frontend Web'],
        images: [imagesList['uwe-hub']],
    },
    {
        id: 'sstr',
        'card-title': 'Dashboard',
        title: 'SSTR: Branding & Pitch-Deck Design',
        description: {
            concept: "Dashboard completa.",
        },
        tags: ['Full Stack Web',],
        images: [imagesList.sstr],
    },
    {
        id: 'd-a-i-wo',
        'card-title': 'ShopLine',
        title: 'D.A.I.Wo: Branding & Web3 Development',
        description: {
            concept: "Tienda Electronica Online utilizando Firebase.",
        },
        tags: ['Full Stack Web'
        ],
        images: [imagesList['daiwo']],
    },
]



