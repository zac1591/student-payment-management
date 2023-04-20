import { Group } from "./types";

export const grupos = [
    {
        id: crypto.randomUUID(),
        groupName: "PEM",
        description: "Some description for this group.",
        price: 250,
        members: ["some-user-id", "another-user-id"],
        startDate:  "3/15/2023",
        endDate:"11/9/2023",
        schedule: "Mie - Vie"
    },
    {
        id: crypto.randomUUID(),
        groupName: "REM",
        description: "Some description for this group.",
        price: 250,
        members: ["some-user-id", "another-user-id"],
        startDate: "9/10/2023",
        endDate: "11/9/2024",
        schedule: "Mie - Vie"
    },
    {
        id: crypto.randomUUID(),
        groupName: "AMLS",
        description: "Some description for this group.",
        price: 250,
        members: ["some-user-id", "another-user-id"],
        startDate: "7/5/2023",
        endDate: "11/9/2023",
        schedule: "Mie - Vie"
    },
    {
        id: crypto.randomUUID(),
        groupName: "TEM",
        description: "Some description for this group.",
        price: 250,
        members: ["some-user-id", "another-user-id"],
        startDate: "7/5/2023",
        endDate: "11/9/2023",
        schedule: "Mie - Vie"
    },
    {
        id: crypto.randomUUID(),
        groupName: "TEM",
        description: "Some description for this group.",
        price: 250,
        members: ["some-user-id", "another-user-id"],
        startDate: "7/5/2023",
        endDate: "11/9/2023",
        schedule: "Mie - Vie"
    },
    {
        id: crypto.randomUUID(),
        groupName: "TECC",
        description: "Some description for this group.",
        price: 100,
        members: ["some-user-id", "another-user-id", "another-user-id", "another-user-id"],
        startDate: "7/5/2023",
        endDate: "11/9/2023",
        schedule: "Mie - Vie"
    },
    {
        id: crypto.randomUUID(),
        groupName: "PHTLS",
        description: "Some description for this group.",
        price: 250,
        members: ["some-user-id", "another-user-id", "another-user-id"],
        startDate: "7/5/2023",
        endDate: "11/9/2023",
        schedule: "Mie - Vie"
    },
    
].reduce((collection, currentGroup)=> {
    collection[currentGroup.id] = currentGroup
    return collection
}, ({} as Record<string, Group>))