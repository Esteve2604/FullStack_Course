const SumaEx = ({ course }) => {
    const exer = course.parts.map(exercise => exercise.exercises)
    return ( <>
    <p><strong>total of {exer.reduce(
        (suma, valor) => suma + valor)} exercises</strong></p>
        </>
    )
}

export default SumaEx