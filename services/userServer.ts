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

export async function fetchUserData(email: any) {
    return db.user.findUnique({
        where: {
            email,
        },
        // include: {
        //     Team: {
        //         include: {
        //             Event: {
        //                 select: {
        //                     category: true,
        //                     winnerPrize: true,
        //                     winningTeamPrize: true,
        //                     runnerUpTeamPrize: true,
        //                     runnerUpPrize: true,
        //                     minPlayers: true,
        //                     maxPlayers: true,
        //                     pricePerPlayer: true,
        //                     venue: true,
        //                     location: true,
        //                     eventName: true,
        //                 },
        //             },
        //             TeamMembers: {
        //                 select: {
        //                     id: true,
        //                     teamId: true,
        //                     name: true,
        //                     email: true,
        //                     phone: true,
        //                     eventId: true,
        //                     playerType: true,
        //                 },
        //             },
        //             PaymentDetails: {
        //                 select: {
        //                     id: true,
        //                     teamId: true,
        //                     paymentId: true,
        //                     amount: true,
        //                 },
        //             },
        //         },
        //     },
        // },
    });
}

export async function changeUserPassword(data: { email: any; password: any; }) {
    return db.user.update({
        where: {
            email: data.email,
        },
        data: {
            password: data.password,
        },
    });
}