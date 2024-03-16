import * as iconFa from 'react-icons/fa';
import * as iconAi from 'react-icons/ai';
import * as iconBs from 'react-icons/bs';
import * as iconBi from 'react-icons/bi';
import * as iconCi from 'react-icons/ci';
import * as iconDi from 'react-icons/di';
import * as iconFi from 'react-icons/fi';
import * as iconFc from 'react-icons/fc';
import * as iconGi from 'react-icons/gi';
import * as iconGo from 'react-icons/go';
import * as iconGr from 'react-icons/gr';
import * as iconHi from 'react-icons/hi';
import * as iconHi2 from 'react-icons/hi2';
import * as iconIm from 'react-icons/im';
import * as iconIo from 'react-icons/io';
import * as iconIo5 from 'react-icons/io5';
import * as iconMd from 'react-icons/md';
import * as iconRx from 'react-icons/rx';
import * as iconRi from 'react-icons/ri';
import * as iconSi from 'react-icons/si';
import * as iconSl from 'react-icons/sl';
import * as iconTb from 'react-icons/tb';
import * as iconTfi from 'react-icons/tfi';
import * as iconTi from 'react-icons/ti';
import * as iconVsc from 'react-icons/vsc';
import * as iconWi from 'react-icons/wi';
import * as iconCg from 'react-icons/cg';
import React from 'react';

import { renderToStaticMarkup } from 'react-dom/server';

export const emojiMartCustom = [
  {
    id: 'fontAwesome',
    name: 'Font Awesome',
    emojis: Object.keys(iconFa).map((key: string) => {
      const Icon = iconFa[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        group: 'fontAwesome',
        emoticons: [],
        keywords: ['fontAwesome', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'antDesign',
    name: 'Ant Design',
    emojis: Object.keys(iconAi).map((key: string) => {
      const Icon = iconAi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['Ant', 'Design', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    emojis: Object.keys(iconBs).map((key: string) => {
      const Icon = iconBs[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['Bootstrap', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'boxIcons',
    name: 'BoxIcons',
    emojis: Object.keys(iconBi).map((key: string) => {
      const Icon = iconBi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['BoxIcons', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'circum',
    name: 'Circum',
    emojis: Object.keys(iconCi).map((key: string) => {
      const Icon = iconCi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['Circum', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'devicons',
    name: 'Devicons',
    emojis: Object.keys(iconDi).map((key: string) => {
      const Icon = iconDi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['Devicons', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'feather',
    name: 'Feather',
    emojis: Object.keys(iconFi).map((key: string) => {
      const Icon = iconFi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['feather', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'flatColor',
    name: 'Flat Color',
    emojis: Object.keys(iconFc).map((key: string) => {
      const Icon = iconFc[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['flat color', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'game',
    name: 'Games',
    emojis: Object.keys(iconGi).map((key: string) => {
      const Icon = iconGi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['game', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'github',
    name: 'Github',
    emojis: Object.keys(iconGo).map((key: string) => {
      const Icon = iconGo[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['github', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'grommet',
    name: 'Grommet',
    emojis: Object.keys(iconGr).map((key: string) => {
      const Icon = iconGr[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['grommet', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'heroicons',
    name: 'Heroicons',
    emojis: Object.keys(iconHi).map((key: string) => {
      const Icon = iconHi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['heroicons', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'heroicons2',
    name: 'Heroicons 2',
    emojis: Object.keys(iconHi2).map((key: string) => {
      const Icon = iconHi2[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['heroicons2', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'icoMoon',
    name: 'IcoMoon',
    emojis: Object.keys(iconIm).map((key: string) => {
      const Icon = iconIm[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['icoMoon', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'ionicons',
    name: 'Ionicons',
    emojis: Object.keys(iconIo).map((key: string) => {
      const Icon = iconIo[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['ionicons', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'ionicons5',
    name: 'Ionicons',
    emojis: Object.keys(iconIo5).map((key: string) => {
      const Icon = iconIo5[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['ionicons5', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'materialDesign',
    name: 'Material Design',
    emojis: Object.keys(iconMd).map((key: string) => {
      const Icon = iconMd[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['materialDesign', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'radix',
    name: 'Radix',
    emojis: Object.keys(iconRx).map((key: string) => {
      const Icon = iconRx[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['radix', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'remix',
    name: 'Remix',
    emojis: Object.keys(iconRi).map((key: string) => {
      const Icon = iconRi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['remix', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'simple',
    name: 'Simple',
    emojis: Object.keys(iconSi).map((key: string) => {
      const Icon = iconSi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['simple', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'simpleLine',
    name: 'Simple Line',
    emojis: Object.keys(iconSl).map((key: string) => {
      const Icon = iconSl[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['simpleLine', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'tabler',
    name: 'Tabler',
    emojis: Object.keys(iconTb).map((key: string) => {
      const Icon = iconTb[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['tabler', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'themify',
    name: 'Themify',
    emojis: Object.keys(iconTfi).map((key: string) => {
      const Icon = iconTfi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['themify', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'typicons',
    name: 'Typicons',
    emojis: Object.keys(iconTi).map((key: string) => {
      const Icon = iconTi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['typicons', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'vSCode',
    name: 'VS Code',
    emojis: Object.keys(iconVsc).map((key: string) => {
      const Icon = iconVsc[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['vSCode', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'weather',
    name: 'Weather',
    emojis: Object.keys(iconWi).map((key: string) => {
      const Icon = iconWi[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['weather', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
  {
    id: 'ccc-gg',
    name: 'css.gg',
    emojis: Object.keys(iconCg).map((key: string) => {
      const Icon = iconCg[key];
      const svgString = renderToStaticMarkup(<Icon />);
      const encodedSVG = encodeURIComponent(svgString);
      const dataURL = `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
      return {
        id: key,
        name: key,
        colons: `:${key}:`,
        emoticons: [],
        keywords: ['css.gg', key],
        skins: [
          {
            src: dataURL,
          },
        ],
      };
    }),
  },
];
