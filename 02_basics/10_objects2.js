//code destructure

const course={
    coursename:"Js Course",
    price:"999",
    courseInstructor:"Ashay"
}
//course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor);
//hence this is log way in short we can de construct the name and make it short by {courseInstructor : instructor}
const {courseInstructor:ins}=course
console.log(ins);           // this will give same result as above

