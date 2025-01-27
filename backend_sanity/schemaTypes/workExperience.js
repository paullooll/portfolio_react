import {defineField, defineType} from 'sanity'

export const workExperienceType = defineType({
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {
               name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'project',
                title:'Project',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            }
    ]
})
