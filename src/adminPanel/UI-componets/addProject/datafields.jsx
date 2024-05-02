let box = Array(6).fill().map((_,index) => 
({id:index+1,head:'head',content:'content'}))
export const dataFields = {
    projectName:"ProjectName",
    subTitle:"subtitle",
    box:box, //dy
    projectOverview:`project overview`,
    location:`location`,
    nearbyAttraction:{
        title:'title',
        points:[1] //dy
    }, 
    projectsAmmenities:[{id:1,img:'img',content:'content'}], //dy
    projectsPlan:'project-plan-img',
    faq:[
        {
            id:1,
        question:'question ?',
        answer:`answer`
    }
    ]

}

    // box:[
    //     {
    //         id:1,
    //         head:'head',
    //         content:'content'
    //     },2,3,4,5,6],