import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Navbar/Navbar";
import MySidebar from "../../components/Sidebar/Sidebar";
import DashHeader from "../../components/Table/DashHeader/DashHeader";
import DashRow from "../../components/Table/DashRow/DashRow";
import DashTable from "../../components/Table/DashTable/DashTable";
import { fetchUserData } from "../../services/userServer";
import "../../styles/routes/My/My.scss";
import { Cashify } from "../../utils/Cashify";
import Sidebar from "../../components/Sidebar/Sidebar";

export async function getServerSideProps(context) {
    if (context.req.session.user === undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/my",
            },
        };
    }

    const userData = await fetchUserData(context.req.session.user.email);

    return {
        props: { user: userData },
    };
}
export default function MyEvents({ user }) {
    const [paidDropdownIndex, setPaidDropdownIndex] = useState(null);
    const [unpaidDropdownIndex, setUnpaidDropdownIndex] = useState(null);

    return (
        <main className="MyEvents">
            {user.Team.filter((item) => item.paymentStatus === "PAID").length > 0 && (
                <DashTable title="Paid Events">
                    <DashHeader headerTitles={["Game", "Payment Status"]} />
                    {user.Team.filter((item) => item.paymentStatus === "PAID").map(
                        (team, index) => (
                            <DashRow
                                key={team.teamId}
                                setDropdownIndex={setPaidDropdownIndex}
                                dropdownIndex={paidDropdownIndex}
                                index={index}
                                style={{ padding: "0 20px" }}
                                contentCols={[
                                    <span key={'eventName'}>{team.Event.eventName}</span>,
                                    <span key={'paymentStatus'}>
                                        {team.paymentStatus === "PAID" ? (
                                            <img
                                                alt="Success"
                                                src="/Img/Green Tick.svg"
                                                height={14}
                                            />
                                        ) : (
                                            <img
                                                alt="Error"
                                                src="/Img/RedExclamation.svg"
                                                height={14}
                                            />
                                        )}
                                        <p>{team.paymentStatus === "PAID" ? "Paid" : "Not Paid"}</p>
                                    </span>,
                                ]}
                            >
                                <hr />

                                <span>Team ID: {team.teamId}</span>
                                <span>Number of players: {team.TeamMembers.length}</span>
                                <h4>Team Members</h4>
                                <ul>
                                    {team.TeamMembers.map((member, index) => (
                                        <li key={index}>
                                            {member.name} ({member.playerType})
                                        </li>
                                    ))}
                                </ul>

                                <h3>
                                    Cash Paid:{" "}
                                    {Cashify(
                                        team.TeamMembers.reduce((acc, _) => {
                                            return acc + team.Event.pricePerPlayer;
                                        }, 0)
                                    )}
                                </h3>
                                {/* <button className="MyHome__greenButton">
                  Download Invoice
                </button> */}
                            </DashRow>
                        )
                    )}
                </DashTable>
            )}
            {user.Team.filter((item) => item.paymentStatus === "PENDING").length >
                0 && (
                    <DashTable title="Pending Confirmations">
                        <DashHeader headerTitles={["Game", "Payment Status"]} />
                        {user.Team.filter((item) => item.paymentStatus === "PENDING").map(
                            (team, index) => (
                                <DashRow
                                    key={team.teamId}
                                    setDropdownIndex={setUnpaidDropdownIndex}
                                    dropdownIndex={unpaidDropdownIndex}
                                    index={index}
                                    style={{ padding: "0 20px" }}
                                    contentCols={[
                                        <span key={'eventName'}>{team.Event.eventName}</span>,
                                        <span key={'paymentStatus'}>
                                            {team.paymentStatus === "PAID" ? (
                                                <img
                                                    alt="Success"
                                                    src="/Images/Utils/Green Tick.svg"
                                                    height={14}
                                                />
                                            ) : (
                                                <img
                                                    alt="Error"
                                                    src="/Images/Utils/RedExclamation.svg"
                                                    height={14}
                                                />
                                            )}
                                            <p>
                                                {team.paymentStatus === "PENDING"
                                                    ? "Confirmation Pending"
                                                    : team.paymentStatus}
                                            </p>
                                        </span>,
                                    ]}
                                >
                                    <hr />

                                    <span>Team ID: {team.teamId}</span>
                                    <span>Number of players: {team.TeamMembers.length}</span>
                                    <h4>Team Members</h4>
                                    <ul>
                                        {team.TeamMembers.map((member, index) => (
                                            <li key={index}>
                                                {member.name} ({member.playerType})
                                            </li>
                                        ))}
                                    </ul>

                                    <h3>
                                        Cash Paid:{" "}
                                        {Cashify(
                                            team.TeamMembers.reduce((acc, _) => {
                                                return acc + team.Event.pricePerPlayer;
                                            }, 0)
                                        )}
                                    </h3>
                                    <Link href="/my/cart">
                                        <p
                                            className="MyHome__greenButton"
                                            aria-label="Go to cart and Pay now"
                                        >
                                            Pay now
                                        </p>
                                    </Link>
                                </DashRow>
                            )
                        )}
                    </DashTable>
                )}
            <DashTable title="Un-Paid Events">
                <DashHeader headerTitles={["Game", "Payment Status"]} />
                {user.Team.filter((item) => item.paymentStatus === "NOT_PAID").length > 0 ?
                    <>
                        {user.Team.filter((item) => item.paymentStatus === "NOT_PAID").map(
                            (team, index) => (
                                <DashRow
                                    key={team.teamId}
                                    setDropdownIndex={setUnpaidDropdownIndex}
                                    dropdownIndex={unpaidDropdownIndex}
                                    index={index}
                                    style={{ padding: "0 20px" }}
                                    contentCols={[
                                        <span key={'eventName'}>{team.Event.eventName}</span>,
                                        <span key={'paymentStatus'}>
                                            {team.paymentStatus === "PAID" ? (
                                                <img
                                                    alt="Success"
                                                    src="/Images/Utils/Green Tick.svg"
                                                    height={14}
                                                />
                                            ) : (
                                                <img
                                                    alt="Error"
                                                    src="/Images/Utils/RedExclamation.svg"
                                                    height={14}
                                                />
                                            )}
                                            <p>
                                                {team.paymentStatus === "PENDING"
                                                    ? "Confirmation Pending"
                                                    : team.paymentStatus}
                                            </p>
                                        </span>,
                                    ]}
                                >
                                    <hr />

                                    <span>Team ID: {team.teamId}</span>
                                    <span>Number of players: {team.TeamMembers.length}</span>
                                    <h4>Team Members</h4>
                                    <ul>
                                        {team.TeamMembers.map((member, index) => (
                                            <li key={index}>
                                                {member.name} ({member.playerType})
                                            </li>
                                        ))}
                                    </ul>

                                    <h3>
                                        Cash Paid:{" "}
                                        {Cashify(
                                            team.TeamMembers.reduce((acc, _) => {
                                                return acc + team.Event.pricePerPlayer;
                                            }, 0)
                                        )}
                                    </h3>
                                    <Link href="/my/cart">
                                        <p
                                            className="MyHome__greenButton"
                                            aria-label="Go to cart and Pay now"
                                        >
                                            Pay now
                                        </p>
                                    </Link>
                                </DashRow>
                            )
                        )}
                    </>
                    :
                    <>
                        <DashRow
                            isDropDown={false}
                            index={0}
                            style={{
                                gridTemplateColumns: "auto",
                                justifyContent: "center",
                                height: "fit-content",
                                padding: "10px 20px 20px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                            parentStyle={{
                                height: "fit-content",
                            }}
                            contentCols={[
                                <h3 key={'register'}>Register Teams in the Events page</h3>,
                                <Link key={'eventLinks'} href="/events">
                                    <p className="MyCart__cartSection--link">Events</p>
                                </Link>,
                            ]}
                        />
                    </>}
            </DashTable>
        </main>
    );
}

MyEvents.getLayout = function getLayout(page) {
    return (
        <div className="MyLayout">
            <Sidebar />
            <div className="MyLayout__page">{page}</div>
        </div>
    );
};
