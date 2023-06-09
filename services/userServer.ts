import db from '../lib/prisma'

export async function fetchUser(email: any) {
    return (db).user.findUnique({
        where: {
            email,
        },
    });
}

export async function createUser(data: any) {
    return db.user.create({
        data,
    });
}