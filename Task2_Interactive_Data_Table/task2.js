$(document).ready(function() {
    const data = [
    { id: 2100030510, name: 'Srikanth', age: 25, course: 'Frontend',marks:50 },
    { id: 2100030023, name: 'Baskar', age: 30, course: 'Backend',marks:49 },
    { id: 2100030022, name: 'Chandhu', age: 28, course: 'Frontend',marks:30 },
    { id: 2100030509, name: 'Dinesh', age: 22, course: 'Frontend',marks:35 },
    { id: 2100080019, name: 'Emmanuel', age: 27, course: 'Frontend',marks:40 },
    { id: 2100030700, name: 'KArthik', age: 26, course: 'Backend',marks:40 },
    { id: 2100030701, name: 'Ganesh', age: 29, course: 'Frontend',marks:35 },
    { id: 2100030050, name: 'Hanumanth', age: 24, course: 'Frontend',marks:40 },
    { id: 2100030845, name: 'Imran', age: 31, course: 'Backend',marks:35 },
    { id: 2100030025, name: 'Jashwanth', age: 23, course: 'Backend',marks:35 },
    { id: 2100030285, name: 'Kavitha', age: 29, course: 'Backend',marks:50 },
    { id: 2100031250, name: 'Lalitha', age: 26, course: 'Frontend',marks:40 },
    { id: 2100030014, name: 'Michael', age: 25, course: 'Backend',marks:35 },
    { id: 2100030027, name: 'Natasha', age: 27, course: 'Frontend Backend',marks:50 },
    { id: 2100030124, name: 'Shindhu', age: 24, course: 'Backend',marks:40 },
    { id: 2100030012, name: 'Pandhu', age: 28, course: 'Frontend',marks:35 },
    { id: 2100030512, name: 'Mahima', age: 22, course: 'Frontend Backend',marks:30 },
    { id: 21000310510, name: 'Rajendra', age: 26, course: 'Frontend',marks:35 },
    { id: 2100030025, name: 'Santhosh', age: 29, course: 'Backend',marks:40 },
    { id: 2100030703, name: 'Tanishq', age: 25, course: 'Frontend',marks:35 }
];
   $(document).ready(function() {
    const table = $('#dt').DataTable({
        data: data,
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'age' },
            { data: 'course' },
            { data: 'marks' }
        ],
        paging: true,
        searching: true,
        ordering: true
    });
    $('#df').submit(function(e) {
        e.preventDefault();
        const id = $('#id').val();
        const name = $('#name').val();
        const age = $('#age').val();
        const course = $('#course').val();
        const marks = $('#marks').val();

        table.row.add({
            id: id,
            name: name,
            age: age,
            course: course,
            marks: marks
        }).draw();
        $('#df')[0].reset();
        alert('Data added!')
    });
});
});