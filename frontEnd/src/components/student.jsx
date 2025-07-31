const Student = ({student}) => {
    return ( 
    <section className="student-card">
        <img className="student-img" src={`/images/${student.image}`} alt={student.studentName} />
        <div className="student-info">
            <p><strong>ID:</strong> {student.studentID}</p>
            <p><strong>Name:</strong> {student.studentName}</p>
            <p><strong>Program:</strong> {student.program}</p>
            <p><strong>Year:</strong> {student.year}</p>
        </div>
        
    </section> );
}
 
export default Student;