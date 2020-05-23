const feed_options = {
    title: "Entahlah Blog Feeds",
    description: "Entahlah Blog - Fauzan Feeds",
    id: "https://eenthlh.xyz/",
    link: "https://eenthlh.xyz/",
    image: "https://eenthlh.xyz/img/banner.jpg",
    favicon: "https://eenthlh.xyz/favicon.ico",
    copyright: "All rights reserved 2020, Rizky Fauzan Hanif",
    // updated: new Date(2020, 3, 24), // optional, default = today
    // generator: "Feed for node.js", // optional, default = 'Feed for Node.js'
    feedLinks: {
        json: "https://eenthlh.xyz/json",
        atom: "https://eenthlh.xyz/atom"
    },
    author: {
        name: "Rizky Fauzan Hanif",
        email: "contact@eenthlh.xyz",
        link: "https://eenthlh.xyz/"
    }

};

module.exports = {
    dest: 'public',
    title: 'Entahlah Blog',
    description: 'Blog ini tercipta oleh ketidaksengajaan author nya.',
    themeConfig: {
        nav: [{
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
            }

        ],
        //logo: '/img/logo-name.png'
        title: 'Entahlah Blog'
    },
    head: [
        ['meta', { name: 'keywords', content: "Entahlah blog by Fauzan" }],
        ['meta', { name: 'title', content: "Entahlah blog &bull; Blog yang by Fauzan" }],
        ['meta', { 'http-equiv': 'Content-Type', content: "text/html" }],
        ['link', { rel: 'icon', href: "https://eenthlh.xyz/favicon.ico" }],
        ['link', { rel: 'alternate', hreflang: "id", href: "https://eenthlh.xyz/" }],
        ['meta', { property: 'og:locale', content: "en_id" }],
        ['meta', { property: 'og:type', content: "website" }],
        ['meta', { property: 'og:title', content: "Entahlah blog &bull; Blog by Fauzan" }],
        ['meta', { property: 'og:description', content: "Blog ini tercipta dari ketidaksengajaan author nya" }],
        ['meta', { property: 'og:url', content: "https://eenthlh.xyz" }],
        ['meta', { property: 'og:site_name', content: "Entahlah Blog" }],
        ['meta', { property: 'og:image', content: "https://eenthlh.xyz/img/banner.jpg" }],
        ['meta', { property: 'og:image:secure_url', content: "https://eenthlh.xyz/img/banner.jpg" }],
        ['meta', { property: 'og:image:width', content: "1200" }],
        ['meta', { property: 'og:image:height', content: "630" }],
        ['meta', { property: 'og:profile:first_name', content: "Rizky" }],
        ['meta', { property: 'og:profile:last_name', content: "Fauzan" }],
        ['meta', { property: 'og:profile:username', content: "vzrenggamani" }],
        ['meta', { property: 'article:author', content: "https://facebook.com/fauzannnnh" }],
        ['meta', { name: 'twitter:card', content: "summary_large_image" }],
        ['meta', { name: 'twitter:description', content: "Blog yang dibuat oleh ketidaksengajaan author nya" }],
        ['meta', { name: 'twitter:title', content: "Entahlah blog &bull; Blog by fauzan" }],
        ['meta', { name: 'twitter:site', content: "@eenthlh" }],
        ['meta', { name: 'twitter:creator', content: "Rizky Fauzan Hanif" }],
        ['meta', { name: 'twitter:image', content: "https://eenthlh.xyz/img/banner.jpg" }]
    ],
    plugins: [
        ['@vuepress/google-analytics', { 'ga': 'UA-164440520-1' }],
        ['feed', feed_options ],
        ['sitemap', { hostname: 'https://eenthlh.xyz/'}]
    ]
}
