import { Group } from "./types";

export const grupos = [
    {
        id: crypto.randomUUID(),
        course: 'PEM',
        groupName: "PEM Sabado mañana",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "8:00AM - 12:00PM",
        professor: 'Edward Batres',
        duration: 24,
        capacity: 18
    },
    {
        id: crypto.randomUUID(),
        course: 'REM',
        groupName: "REM Miercoles Tarde",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "1:00PM - 5:00PM",
        professor: 'Xavier Hernandez',
        duration: 5,
        capacity: 25
    },
    {
        id: crypto.randomUUID(),
        course: 'AMLS',
        groupName: "AMLS Lun Mie Vie tarde",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "1:00PM - 5:00PM",
        professor: 'Xavier Hernandez',
        duration: 12,
        capacity: 20
    },
    {
        id: crypto.randomUUID(),
        course: 'TEM',
        groupName: "TEM Viernes",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "8:00AM - 5:00PM",
        professor: 'David Hernandez',
        duration: 24,
        capacity: 18
    },
    {
        id: crypto.randomUUID(),
        course: 'TEM',
        groupName: "TEM Miercoles",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id"],
        schedule: "8:00AM - 4:00PM",
        professor: 'Oscar Hernandez',
        duration: 24,
        capacity: 25
    },
    {
        id: crypto.randomUUID(),
        course: 'TECC',
        groupName: "TECC martes matutino",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id", "another-user-id", "another-user-id"],
        schedule: "8:00AM - 12:00PM",
        professor: 'Xavier Hernandez',
        duration: 3,
        capacity: 20
    },
    {
        id: crypto.randomUUID(),
        course: 'PHTLS',
        groupName: "PHTLS Jueves",
        description: "Some description for this group.",
        members: ["some-user-id", "another-user-id", "another-user-id"],
        schedule: "8:00AM - 4:00PM",
        professor: 'Abraham Hernandez',
        duration: 6,
        capacity: 20
    },

].reduce((collection, currentGroup) => {
    collection[currentGroup.id] = currentGroup
    return collection
}, ({} as Record<string, Group>))