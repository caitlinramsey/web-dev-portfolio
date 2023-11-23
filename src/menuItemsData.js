export const menuItemsData = [
    {
        title: 'Home',
        url: '/home'
    },
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Web Development',
        url: '/webdev',
        submenu: [
            {
                title: 'Projects',
                url: 'webdevprojects',
                submenu: [
                    {
                        title: 'Front-End',
                        url: 'frontend',
                    },
                    {
                        title: 'Back-End',
                        url: 'backend',
                    }
                ]
            },
            {
                title: 'Services',
                url: 'webdevservices'
            }
        ],
    },
    {
        title: 'Graphic Design',
        url: 'graphicdesign',
        submenu: [
            {
                title: 'Projects',
                url: 'graphicdesignprojects'
            },
            {
                title: 'Services',
                url: 'graphicdesignservices'
            }
        ],
    },
    {
        title: 'Contact',
        url: '/contact'
    },
];