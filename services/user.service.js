import db from '../lib/prisma'

// Select * from User
export async function fetchAllUsers() {
    return await db.user.findMany();
}

// Insert into User () values ()
export async function createUser(data) {
    return await db.user.create({
        data,
    });
}

// Update 
export async function updateUser(id, data) {
    return await db.user.update({
        where: { id: id },
        data,
    })
}