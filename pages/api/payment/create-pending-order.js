import { ironOptions } from "../../../lib/ironOptions";
import { withIronSessionApiRoute } from "iron-session/next";
import { CreatePendingOrderDB, updatePaymentStatus } from "../../../services/eventServer";
import { fetchUserData } from "../../../services/userServer";

export default withIronSessionApiRoute(CreatePendingOrder, ironOptions);

async function CreatePendingOrder(req, res) {
    const ISTOptions = { timeZone: 'Asia/Kolkata' }; // 'Asia/Kolkata' is the IANA timezone identifier for IST
    const currentISTTime = new Date().toLocaleString('en-US', ISTOptions);
    const body = await req.body;
    const paySplit = body.paySplit.map((member) => {
        return {
            ...member,
            paymentId: body.paymentId,
            playerOrderId: body.playerOrderId,
            changedStatus: currentISTTime,
        };
    });

    const response = await CreatePendingOrderDB(paySplit);
    let userData = await fetchUserData(req.session.user.email);

    let recordsToUpdate = [];

    userData.Team.forEach((team) => {
        if (team.PaymentDetails.length > 0 && team.paymentStatus === "NOT_PAID") {
            recordsToUpdate.push(team.teamId);
        }
    });

    await updatePaymentStatus(recordsToUpdate);


    res.send({ status: 200, message: JSON.stringify(response) });
}
