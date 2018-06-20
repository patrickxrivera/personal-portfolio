export default [
  {
    title: 'Newsletter Manager',
    image: {
      src: require('./assets/gmail.jpg'),
      style: {
        width: '50px',
        height: '35px'
      }
    },
    gif: {
      src: require('./assets/newsletter-manager.gif'),
      style: {
        width: '440px',
        height: '250px'
      }
    },
    description:
      'Web app to create Gmail labels and add email addresses to them to keep your inbox organized.',
    stack: ['React', 'Redux', 'Node', 'Express', 'PostgreSQL', 'Gmail API'],
    github: '',
    website: ''
  },
  {
    title: 'Playlist.io',
    image: {
      src: require('./assets/spotify.jpg'),
      style: {
        width: '30px',
        height: '30px'
      }
    },
    gif: {
      src: require('./assets/spotify.gif'),
      style: {
        width: '440px',
        height: '250px'
      }
    },
    description:
      'Web app that generates a Spotify playlist based on a keyword, allows you to save it to Spotify, and plays tracks in the browser with a web player.',
    stack: ['React', 'Redux', 'Node', 'Express', 'MongoDB', 'Spotify Web API/SDK'],
    github: '',
    website: ''
  },
  {
    title: 'Rise Community Bot',
    image: {
      src: require('./assets/telegram.png'),
      style: {
        width: '40px',
        height: '35px'
      }
    },
    gif: {
      src: require('./assets/telegram-bot.gif'),
      style: {
        width: '250px',
        height: '250px'
      }
    },
    description:
      'Telegram bot that takes Google form survey data from 50+ community members and creates a navigable interface for viewing survey data.',
    stack: ['Node.js', 'Express', 'Telegram Bot API'],
    github: 'https://github.com/pxr13/node-telegram-bot',
    website: 'https://t.me/rise_fam_bot'
  },
  {
    title: 'Personal Dashboard',
    image: {
      src: require('./assets/chrome.jpeg'),
      style: {
        width: '30px',
        height: '30px'
      }
    },
    gif: {
      src: require('./assets/personal-dashboard.gif'),
      style: {
        width: '440px',
        height: '250px'
      }
    },
    description:
      'New tab chrome extension that displays the top posts from Hacker News and Product Hunt, a scenic background picture, and a to-do widget.',
    stack: ['React', 'Redux', 'Hacker News API', 'Product Hunt API', 'Unsplash API'],
    github: '',
    website: ''
  },
  {
    title: 'Data Structures TDD',
    image: {
      src: require('./assets/code.jpg'),
      style: {
        width: '35px',
        height: '35px'
      }
    },
    gif: null,
    description:
      'Common data structure implementations such as hash maps, trees, graphs, linked lists, and more using test-driven development.',
    stack: ['JavaScript ES6', 'Jest'],
    github: 'https://github.com/pxr13/leetcode-javascript-es6-solutions',
    website: null
  },
  {
    title: 'Leetcode Challenges',
    image: {
      src: require('./assets/leetcode.png'),
      style: {
        width: '30px',
        height: '30px'
      }
    },
    gif: null,
    description: 'Solutions to 60+ Leetcode data structures and algorithms challenges.',
    stack: ['JavaScript ES6'],
    github: 'https://github.com/pxr13/data-structures-in-javascript-es6',
    website: null
  }
];
