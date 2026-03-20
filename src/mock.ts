import { Group } from "./types";

export const grupos = [
    {
        id: 1,
        course: 'PEM',
        groupName: "PEM Sabado mañana",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "8:00AM - 12:00PM",
        professor: 'Edward Batres',
        duration: 24,
        cap: 18
    },
    {
        id: 2,
        course: 'REM',
        groupName: "REM Miercoles Tarde",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "1:00PM - 5:00PM",
        professor: 'Xavier Hernandez',
        duration: 5,
        cap: 25
    },
    {
        id: 3,
        course: 'AMLS',
        groupName: "AMLS Lun Mie Vie tarde",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "1:00PM - 5:00PM",
        professor: 'Xavier Hernandez',
        duration: 12,
        cap: 20
    },
    {
        id: 4,
        course: 'TEM',
        groupName: "TEM Viernes",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "8:00AM - 5:00PM",
        professor: 'David Hernandez',
        duration: 24,
        cap: 18
    },
    {
        id: 5,
        course: 'TEM',
        groupName: "TEM Miercoles",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "8:00AM - 4:00PM",
        professor: 'Oscar Hernandez',
        duration: 24,
        cap: 25
    },
    {
        id: 6,
        course: 'TECC',
        groupName: "TECC martes matutino",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id", "another-user-id", "another-user-id"],
        schedule: "8:00AM - 12:00PM",
        professor: 'Xavier Hernandez',
        duration: 3,
        cap: 20
    },
    {
        id: 7,
        course: 'PHTLS',
        groupName: "PHTLS Jueves",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id", "another-user-id"],
        schedule: "8:00AM - 4:00PM",
        professor: 'Abraham Hernandez',
        duration: 6,
        cap: 20
    },

].reduce((collection, currentGroup) => {
    collection[currentGroup.id] = currentGroup
    return collection
}, ({} as Record<number, Group>))


/*
.reduce((collection, currentGroup) => {
    collection[currentGroup.id] = currentGroup
    return collection
}, ({} as Record<string, Group>))

The original id was an uuid (string), therefore inside the Record utility was defined as string
*/