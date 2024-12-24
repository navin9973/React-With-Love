import Card from "./card"
function Cards({courses}){
  
  const getcourse = ()=>{   //
    let allCourse=[];
    Object.values(courses).forEach((coursecatogory)=>{
      coursecatogory.forEach((course)=>{
        allCourse.push(course);
      })
    })
return allCourse;
  }
  return(
    <div>
      {
      getcourse().map((course)=>{
  return <Card key={course.id} course={course}/>
      })
    }
    </div>
  )
}
export default Cards;