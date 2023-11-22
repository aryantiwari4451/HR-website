import db from '../lib/prisma'

export async function fetchAllUsers() {
    return await db.user.findMany({
        include: {
            center : true,
        }
    });
}

export async function createUser(data) {
    return await db.user.create({
        data,
    });
}

export async function updateUser(id, data) {
    return await db.user.update({
        where: { id: id },
        data,
    })
}

export async function createCenter(data) {
    return await db.center.create({
        data,
    })
}