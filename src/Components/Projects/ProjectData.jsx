import React from 'react'
import ProjectDisplay from './ProjectDisplay'

const ProjectData = () => {
    const data = ["projects","features","todos"]
  return (
    <>
    {data.map((item)=>{
        return(
            <ProjectDisplay item={item}/>
        )
    })}
    </>
  )
}

export default ProjectData