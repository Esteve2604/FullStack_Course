import SumaEx from "./SumaEx"

const Course = ({ course }) => {
    return (<>
        <h2>{course.name}</h2>
        {course.parts.map(parte => (<p key={parte.id} >{parte.name} {parte.exercises}</p>))}
        <SumaEx course={course} />
    </>)
}
export default Course