import { hashSync } from "bcrypt";
import { ironOptions } from "../../../lib/ironOptions";
import { createUser, fetchUser } from "../../../services/userServer";
import { withIronSessionApiRoute } from "iron-session/next";
import { withSessionRoute } from "../../../lib/ironOptions";
export default withSessionRoute(Register);

async function Register(req, res) {
    const body = await req.body;
    const response = await createUser({
        name: body.friendlyName,
        email: body.email,
        phone: body.phone,
        college: "",
        password: hashSync(body.password, 10),
    });

    const user = await fetchUser(body.email);
    req.session.user = user;
    await req.session.save();
    res.send({ status: 200, message: JSON.stringify(response) });
}
