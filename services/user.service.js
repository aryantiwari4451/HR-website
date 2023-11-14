import db from '../lib/prisma'

export async function fetchAllUsers() {
    return await db.user.findMany();
}

export async function fetchUser(email) {
    return await (db).user.findUnique({
        where: {
            email,
        },
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