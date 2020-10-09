const feed_options = {
    title: "Entahlah Blog Feeds",
    description: "Entahlah Blog - Fauzan's Feeds",
    id: "https://blog.eenthlh.xyz/",
    link: "https://blog.eenthlh.xyz/",
    image: "https://blog.eenthlh.xyz/img/banner.jpg",
    favicon: "https://blog.eenthlh.xyz/favicon.ico",
    copyright: "All rights reserved 2020, Rizky Fauzan Hanif",
    // updated: new Date(2020, 3, 24), // optional, default = today
    // generator: "Feed for node.js", // optional, default = 'Feed for Node.js'
    feedLinks: {
        json: "https://blog.eenthlh.xyz/json",
        atom: "https://blog.eenthlh.xyz/atom"
    },
    author: {
        name: "Rizky Fauzan Hanif",
        email: "fauzan@eenthlh.xyz",
        link: "https://eenthlh.xyz/"
    }

};

module.exports = {
    dest: 'public',
    title: 'Entahlah Blog',
    description: 'A blog written by Fauzan.',
    themeConfig: {
        nav: [
            {
                text: 'Website',
                link: 'https://eenthlh.xyz'
            },
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Blog',
                link: '/blog/'
            },
            {
                text: 'About',
                link: '/about/'
            },
            {
                text: 'Contact',
                link: '/contact/'
            }

        ],
        //logo: '/img/logo-name.png'
        title: 'Entahlah Blog'
    },
    head: [
        ['meta', { name: 'keywords', content: "Entahlah blog by Fauzan" }],
        ['meta', { name: 'title', content: "Entahlah blog &bull; Blog by Fauzan" }],
        ['meta', { 'http-equiv': 'Content-Type', content: "text/html" }],
        ['link', { rel: 'icon', href: "https://blog.eenthlh.xyz/favicon.ico" }],
        ['link', { rel: 'alternate', hreflang: "id", href: "https://blog.eenthlh.xyz/" }],
        ['meta', { property: 'og:locale', content: "en_id" }],
        ['meta', { property: 'og:type', content: "website" }],
        ['meta', { property: 'og:title', content: "Entahlah blog &bull; Blog by Fauzan" }],
        ['meta', { property: 'og:description', content: "A blog written by Fauzan" }],
        ['meta', { property: 'og:url', content: "https://blog.eenthlh.xyz" }],
        ['meta', { property: 'og:site_name', content: "Entahlah Blog" }],
        ['meta', { property: 'og:image', content: "https://blog.eenthlh.xyz/img/banner.jpg" }],
        ['meta', { property: 'og:image:secure_url', content: "https://blog.eenthlh.xyz/img/banner.jpg" }],
        ['meta', { property: 'og:image:width', content: "1200" }],
        ['meta', { property: 'og:image:height', content: "630" }],
        ['meta', { property: 'og:profile:first_name', content: "Rizky" }],
        ['meta', { property: 'og:profile:last_name', content: "Fauzan" }],
        ['meta', { property: 'og:profile:username', content: "Fauzannnnh" }],
        ['meta', { property: 'article:author', content: "https://facebook.com/fauzannnnh" }],
        ['meta', { name: 'twitter:card', content: "summary_large_image" }],
        ['meta', { name: 'twitter:description', content: "A blog written by Fauzan" }],
        ['meta', { name: 'twitter:title', content: "Entahlah blog &bull; Blog by fauzan" }],
        ['meta', { name: 'twitter:site', content: "@eenthlh" }],
        ['meta', { name: 'twitter:creator', content: "Rizky Fauzan Hanif" }],
        ['meta', { name: 'twitter:image', content: "https://blog.eenthlh.xyz/img/banner.jpg" }]
    ],
    plugins: [
        ['@vuepress/google-analytics', { 'ga': 'UA-164440520-1' }],
        ['feed', feed_options ],
        ['sitemap', { hostname: 'https://blog.eenthlh.xyz/'}]
    ]
}
