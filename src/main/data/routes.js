export const routes = [
    {
        name:'Home',
        path:'/'
    },
    // {
    //     name:'Product',
    //     path:'/product'
    // },
    {
        name:'About',
        path:'/about'
    },
    {
        name:'Projects',
        // path:'/product'
        dropdown: true
    },
    {
        name:'LIP Infra',
        path:'/infra'
    },
    {
        name:'Gallery',
        path:'/gallery'
    },
    
    {
        name:'Contact Us',
        path:'/contact'
    },
   
    {
        name:'Logins',
        // path:'/login'
        dropdown: true,
        paths:[
            {
                name:"Registration",
                path:"registration"
            },
            {
                name:"Vendorlogin",
                path:"vendorlogin"
            },
            {
                name:'Login',
                path:'login'
            }
        ],
    },
]


// registratio


// vendorlogin