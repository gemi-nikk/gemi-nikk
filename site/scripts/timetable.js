const section = document.getElementById("making-a-table");

// Timetable course data
const timetableData = [
    { term: "Fall", code: "CSD105", name: "Python", hours: 3 },
    { term: "Fall", code: "CMM115", name: "Communications I", hours: 3 },
    { term: "Fall", code: "CSD120", name: "Introduction to Web Development", hours: 4 },
    { term: "Fall", code: "CSO104", name: "Introduction to Operating Systems and LAN", hours: 4 },
    { term: "Fall", code: "MTH122", name: "Computer Mathematics", hours: 3 },
    { term: "Fall", code: "TNY130", name: "Technology in Society", hours: 2 },
    { term: "Winter", code: "CSA103", name: "Business Applications I", hours: 4 },
    { term: "Winter", code: "CSD102", name: "Programming Using C++", hours: 5 },
    { term: "Winter", code: "CSD212", name: "Web Scripting Languages", hours: 4 },
    { term: "Winter", code: "CSO102", name: "Introduction to Linux", hours: 4 },
    { term: "Winter", code: "CST104", name: "PC Hardware and Networking", hours: 5 }
];

// Function to generate HTML table
function generateTable(data) {
    let html = `
    <h2>Current Courses</h2>
    <table>
      <caption>Table 1. Current Courses</caption>
      <thead>
        <tr>
          <th>Term</th>
          <th>Code</th>
          <th>Course Name</th>
          <th>Hrs/Week</th>
        </tr>
      </thead>
      <tbody>
  `;

    data.forEach(row => {
        html += `
      <tr>
        <td>${row.term}</td>
        <td>${row.code}</td>
        <td>${row.name}</td>
        <td>${row.hours}</td>
      </tr>
    `;
    });

    const totalHours = data.reduce((sum, item) => sum + item.hours, 0);

    html += `
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3">Total</th>
          <td>${totalHours}</td>
        </tr>
      </tfoot>
    </table>
  `;

    return html;
}

// Insert the generated timetable into the section
section.innerHTML = generateTable(timetableData);