import db from '../lib/prisma'

export async function fetchAllInterviews() {
    return await db.interview.findMany();
}

export async function createInterview(data) {
    return await db.interview.create({
        data,
    });
}

export async function updateInterview(id, data) {
    return await db.interview.update({
        where: { id: id },
        data,
    })
}