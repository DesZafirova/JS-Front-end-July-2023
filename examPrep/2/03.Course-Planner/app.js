const tasksUrl = `http://localhost:3030/jsonstore/tasks`;
const loadButtonElement = document.getElementById("load-course");

const courseTypes = [
    "Long",
    "Medium",
    "Short",
]
const courseListElement = document.getElementById("list");

const titleCourseElement = document.getElementById("course-name");
const typeCourseElement = document.getElementById("course-type");
const descriptionCourseElement = document.getElementById("description");

const teacherCourseElement = document.getElementById("teacher-name");
loadButtonElement.addEventListener("click", loadCourses);

const addButtonElement = document.getElementById("add-course");
addButtonElement.addEventListener("click", addCourse);

const editButtonElement = document.getElementById("edit-course");
editButtonElement.addEventListener("click", editCourse);


let  currentCourseId = "";

async function editCourse(e){
    e.preventDefault();
    const title = titleCourseElement.value;
    const type = typeCourseElement.value;
    const description = descriptionCourseElement.value;
    const teacher = teacherCourseElement.value;

    if (!courseTypes.includes(type)) {
        return;
    }
    const course = {
        title,
        type,
        description,
        teacher,
    }
    await fetch(`${tasksUrl}/${currentCourseId}`,{
        method: "PUT",
        body: JSON.stringify(course),
    });
    titleCourseElement.value = "";
    typeCourseElement.value = "";
    descriptionCourseElement.value = "";
    teacherCourseElement.value = "";

    addButtonElement.disabled = false;
    editButtonElement.disabled = true;

    await loadCourses()

}
async function addCourse(e) {
    e.preventDefault();
    const title = titleCourseElement.value;
    const type = typeCourseElement.value;
    const description = descriptionCourseElement.value;
    const teacher = teacherCourseElement.value;

    if (!courseTypes.includes(type)) {
        return;
    }
    const course = {
        title,
        type,
        description,
        teacher,
    }

    fetch(tasksUrl, {
        method: "POST",
        body: JSON.stringify(course),
    });

    titleCourseElement.value = "";
    typeCourseElement.value = "";
    descriptionCourseElement.value = "";
    teacherCourseElement.value = "";

    await loadCourses();
}


async function loadCourses() {
    const response = await fetch(tasksUrl);
    const data = await response.json();

    courseListElement.innerHTML = "";

    const courses = Object.keys(data)
        .map(key => ({_id: key, ...data[key]}));


    // const coursesFragment = document.createDocumentFragment();
    //
    // courses
    //     .map(course => renderCourse(course)) //.map(renderCourse)
    //     .forEach(c => coursesFragment //.forEach(courseFragment.appendChild);
    //         .appendChild(c));
    //
    // courseListElement.appendChild(coursesFragment);

    for (const course of courses) {
        const courseElement = renderCourse(course);
        courseListElement.appendChild(courseElement);
        courseElement.setAttribute("data-course-id",course._id) ;
    }

}

function renderCourse(course) {
    const headingElement = document.createElement("h2");
    headingElement.textContent = course.title;

    const authorElement = document.createElement("h3");
    authorElement.textContent = course.teacher;

    const typeElement = document.createElement("h3");
    typeElement.textContent = course.type;

    const descriptionElement = document.createElement("h4");
    descriptionElement.textContent = course.description;

    const editBtnElement = document.createElement("button");
    editBtnElement.className = "edit-btn";
    // editBtnElement.setAttribute("disabled", true);
    // editBtnElement.disabled = true;
    editBtnElement.textContent = "Edit Course";


    const finishBtnElement = document.createElement("button");
    finishBtnElement.className = "finish-btn";
    finishBtnElement.textContent = "Finish Course";

    const courseContainer = document.createElement("div");
    courseContainer.className = "container";

    courseContainer.appendChild(headingElement);
    courseContainer.appendChild(authorElement);
    courseContainer.appendChild(typeElement);
    courseContainer.appendChild(descriptionElement);
    courseContainer.appendChild(editBtnElement);
    courseContainer.appendChild(finishBtnElement);

    editBtnElement.addEventListener("click", () => {

        titleCourseElement.value = course.title;
        typeCourseElement.value = course.type;
        descriptionCourseElement.value = course.description;
        teacherCourseElement.value = course.teacher;

        currentCourseId = courseContainer.getAttribute("data-course-id");
        courseContainer.remove();

        addButtonElement.disabled = true;
        editButtonElement.disabled = false;

    });

    finishBtnElement.addEventListener("click", async() =>{

        await fetch(`${tasksUrl}/${course._id}`, {
            method: "DELETE",

        });
        await loadCourses();

    });
    return courseContainer;

}
