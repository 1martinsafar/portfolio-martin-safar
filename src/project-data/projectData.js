// Small images for preview
import PISmall1 from '../images/images-portfolio/project2-small.png';
import PISmall2 from '../images/images-portfolio/project3-small.png';
import PISmall3 from '../images/images-portfolio/project4-small.png';
import PISmall4 from '../images/images-portfolio/project5-small.png';
import PISmall5 from '../images/images-portfolio/project6-small.png';
import PISmall6 from '../images/images-portfolio/project7-small.png';
import PISmall7 from '../images/images-portfolio/project8-small.png';
import PISmall8 from '../images/images-portfolio/project9-small.png';
import PISmall9 from '../images/images-portfolio/project10-small.png';
import PISmall10 from '../images/images-portfolio/project11-small.png';
import PISmall11 from '../images/images-portfolio/fullstackjs-project3-small.png';
import PISmall12 from '../images/images-portfolio/fullstackjs-project4-small.png';
import PISmall13 from '../images/images-portfolio/fullstackjs-project5-small.png';
import PISmall14 from '../images/images-portfolio/project-currency-conversion-small.png';
import PISmall15 from '../images/images-portfolio/project-portfolio-small.PNG';
import PISmall16 from '../images/images-portfolio/project-regiojet-small.PNG';

// Large images for zoom
import PILarge1 from '../images/images-portfolio/project2-large.png';
import PILarge2 from '../images/images-portfolio/project3-large.png';
import PILarge3 from '../images/images-portfolio/project4-large.png';
import PILarge4 from '../images/images-portfolio/project5-large.png';
import PILarge5 from '../images/images-portfolio/project6-large.png';
import PILarge6 from '../images/images-portfolio/project7-large.png';
import PILarge7 from '../images/images-portfolio/project8-large.png';
import PILarge8 from '../images/images-portfolio/project9-large.png';
import PILarge9 from '../images/images-portfolio/project10-large.png';
import PILarge10 from '../images/images-portfolio/project11-large.png';
import PILarge11 from '../images/images-portfolio/fullstackjs-project3-large.png';
import PILarge12 from '../images/images-portfolio/fullstackjs-project4-large.png';
import PILarge13 from '../images/images-portfolio/fullstackjs-project5-large.png';
import PILarge14 from '../images/images-portfolio/project-currency-conversion-large.png';
import PILarge15 from '../images/images-portfolio/project-portfolio-large.PNG';
import PILarge16 from '../images/images-portfolio/project-regiojet-large.PNG';

const projectData = [
    {
        image: PISmall1,
        heading: 'Responsive Layout',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-2/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-2',
        skills: `HTML, CSS`,
        description: `Building a responsive, mobile-first layout using HTML and CSS. Practicing the understanding of responsive design by adjusting
           to accommodate small, medium, and large screen sizes.`,
    },
    {
        image: PISmall2,
        heading: 'Online Registration Form',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-3/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-3',
        skills: `HTML, CSS`,
        description: `Building a responsive, mobile-friendly registration form
        using a wide variety of HTML form input types and attributes.`,
    },
    {
        image: PISmall3,
        heading: 'Interactive Photo Gallery',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-4/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-4',
        skills: `HTML, CSS, JavaScript, jQuery, jQuery Plugin`,
        description: `Creating an interactive, searchable gallery of photos. I implemented a jQuery plugin for a lightbox
        functionality and wrote my own JavaScript for the search/content filtering feature.`,
    },
    {
        image: PISmall4,
        heading: 'Circles UI Kit',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-5/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-5',
        skills: `HTML, CSS, Sass, BEM`,
        description: `Creating a style guide (micro-framework) using Sass BEM style classes to quickly prototype
        and apply a consistent look across multiple pages of a site.
        Using partials, variables, extends, and mixins.`,
    },
    {
        image: PISmall5,
        heading: 'Interactive Video Player',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-6/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-6',
        skills: `HTML, CSS, JavaScript, jQuery, HTML5 Video API (MediaElement.js)`,
        description: `Building an interactive HTML5 video player using JavaScript and the HTML5 Video API.
        The video player synchronizes the video and the transcript. The transcript highlights
        as the video progresses. When users clicks any part of the transcript it takes them to
        the appropriate place in the video. Custom styling is applied the the player as well.
        NOTE: You need to enable JavaScript for the video to work.`,
    },
    {
        image: PISmall6,
        heading: 'Wheel of Success',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-7/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-7',
        skills: `HTML, CSS, JavaScript`,
        description: `Creating a browser version of “Wheel of Success”, a word guessing game where
        players will click letters from an onscreen keyboard to try to guess a random phrase.`,
    },
    {
        image: PISmall7,
        heading: 'Pembroke Welsh Corgis',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-8/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-8',
        skills: `HTML, CSS, SVG`,
        description: `Modernizing the user interface of a web page by adding, styling and optimizing SVG graphics.
        Animating SVG with CSS animation, keyframe, transitions and transforms.`,
    },
    {
        image: PISmall8,
        heading: 'Web App Dashboard',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-9/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-9',
        skills: `HTML, CSS, JavaScript, Web Storage API, Chart.js Library`,
        description: `Building an interactive dashboard for a web application.
        The project involves creating JavaScript-driven charts and graphs, graphics and other
        user interface components in a manner that promotes interactivity and usability.
        There is an "autocomplete" feature for the "Search for User" box,
        listing names that match the search term. Also, when the page is reloaded the settings are remembered.
        I utilized chart.js library for this project and an awesomplete library for a beautiful search styling.
        These projects don't have any backend or database functionality.`,
    },
    {
        image: PISmall9,
        heading: 'Employee Directory',
        linkCheck: null,
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-10',
        skills: `HTML, CSS, JavaScript, jQuery, AJAX, Third-party API`,
        description: `Creating an employee directory by communicating with a third-party API.
        Requesting a JSON object from the API and parsing the data so that employees
        are listed in a grid with their thumbnail image and main info.
        Clicking the employee will open a modal window with more detailed
        information.`,
    },
    {
        image: PISmall10,
        heading: 'React Flickr Gallery',
        linkCheck: 'https://1martinsafar.github.io/techdegree-project-11/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-project-11',
        skills: `HTML, CSS, React, React Router, Create-react-app Tool, Third-party API, Data Fetching with React, Axios`,
        description: `Creating an image gallery using React and the Flickr API.
        Building the gallery components, writing the CSS and setting up routing.
        The project uses a create-react-app, Axios Tool and React component lifecycle method.
        There is a loading indicator that displays each time the app fetches new data,
        a 404-like error route that displays when a URL path does not match a route and
        if no matches are found by the search, a message appears telling the user there are no matches.`,
    },
    {
        image: PISmall11,
        heading: 'Form and (dynamic) Validation',
        linkCheck: 'https://1martinsafar.github.io/techdegree-fsjs-project-3/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-fsjs-project-3',
        skills: `HTML, CSS, JavaScript`,
        description: `Creating an interactive registration form for "FullStack Conf."
        Using JavaScript to enhance the form by adding interactivity.
        Making the form user-friendly by providing helpful error messages
        when the user enters valid/invalid information into the form fields.
        Dynamic validation is used as well (while the user is filling out the form).`,
    },
    {
        image: PISmall12,
        heading: 'Tic Tac Toe',
        linkCheck: 'https://1martinsafar.github.io/techdegree-fsjs-project-4/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-fsjs-project-4',
        skills: `HTML, CSS, JavaScript, JavaScript Objects (ES6 Classes), Module Pattern (a single self-invoking function)`,
        description: `Two-person Tic Tac Toe game. Users can type in their name/nickname. If they don't, it defaults to player1/player2.
        The game dynamically highlights the player when it's his turn. If a player wins, his name is shown in the winning screen.
        Otherwise a draw screen is shown. The users can restart the game, the player who started second gets to make the first move this time.
        Hovering over an empty field shows an outline of that player's symbol in that location.`,
    },
    {
        image: PISmall13,
        heading: 'Web Content Scraper',
        linkCheck: 'https://1martinsafar.github.io/techdegree-fsjs-project-5/',
        linkFiles: 'https://github.com/1martinsafar/techdegree-fsjs-project-5',
        skills: `JavaScript, npm content scraping package: scrape-it, npm csv file creating package: json2csv, package.json`,
        description: `A command-line application to read a web page, extract information, and store the data in an CSV file
        to be possibly stored in a database.
        The column headers in the CSV need to be in a certain order to be correctly entered into a database.
        The columns are: Title, Price, ImageURL, URL, and Time.
        If an error occurs, it is logged to a .log file with a time stamp.
        The scraper visits the website http://shirts4mike.com and uses http://shirts4mike.com/shirts.php as single entry point
        to scrape information for all the t-shirts from the site, without using any hard-coded urls like http://www.shirts4mike.com/shirt.php?id=101.
        The scraper gets the price, title, url and image url from the product page and saves this information into an CSV file.
        It also stores the current time for better database use.
        The CSV file is named for the date it was created, e.g. 2018-4-21.csv.
        The program runs when you type 'npm start' or 'node scraper.js'.`,
    },
    {
        image: PISmall14,
        heading: 'Currency Conversion API & React App',
        linkCheck: null,
        linkFiles: 'https://github.com/1martinsafar/currency-conversion',
        skills: `Node.js, Express.js, React, JavaScript, HTML, CSS, Axios, Third-party API, Local File as Database, Bootstrap 4, REST`,
        description: `A simple currency conversion React web app with
        Node.js backend custom API. User will input amount, currency and
        destination currency. The app will show the converted amount as well as statistics about the
        most popular destination currency users search for, the total amount converted in USD and
        the number of requests that have been made by users. All the stats displayed and updated
        dynamically.`,
    },
    {
        image: PISmall15,
        heading: 'Online Portfolio',
        linkCheck: 'https://1martinsafar.github.io/',
        linkFiles: 'https://github.com/1martinsafar/1martinsafar.github.io',
        skills: `React, CSS Modules`,
        description: `This Online Portfolio React App. Thank you for visiting!`,
    },
    {
        image: PISmall16,
        heading: 'Regiojet Reservation System',
        linkCheck: 'https://shop.regiojet.cz/',
        linkFiles: null,
        skills: `React, Redux, Next.js, Flow.js, React-intl, Axios, REST, Lodash.js, many other JS libraries`,
        description: `The new reservation system for Regiojet trains/buses (Student Agency). More information in the About section.`,
    },
];

export default projectData;
