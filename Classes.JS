class Subject {
    constructor(name, instructor, time) {
        this.name = name;
        this.instructor = instructor;
        this.time = time;
    }
}

const subjects = [
    new Subject("History", "Angela Cannon", "TR/F | 1:45 PM - 3:00 PM"),
    new Subject("Creative Writing", "Diane Redtree", "M/W | 8:00 AM - 10:50 AM"),
    new Subject("Web App Development", "Tim Newell", "T | 6:00 PM - 8:50 PM"),
    new Subject("Entomology", "Jane Smith", "M/W/F | 12:00 PM - 2:45 PM"),
    new Subject("Arithmetic", "Brad Troyer", "T/TR | 7:45 AM - 9:30 AM")
];