import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { registerTeam } from "../../operations/event.fetch";
import BlurredSpinner from "../BlurredSpinner/BlurredSpinner";
import DashHeader from "../Table/DashHeader/DashHeader";
import DashRow from "../Table/DashRow/DashRow";
import DashTable from "../Table/DashTable/DashTable";
import "./RegistrationSummary.scss";

function RegistrationSummary({ setRegisterStage, user, eventId }) {
    const { tempTeamDetails, setTempTeamDetails } = useAuth();
    useEffect(() => {
        console.log(tempTeamDetails);
        console.log(user);
    })
    const [showBlurredSpinner, setShowBlurredSpinner] = useState(false);
    return (
        <div className="RegistrationSummaryWrapper">
            {showBlurredSpinner && (
                <BlurredSpinner
                    style={{ borderRadius: "7px", border: "1px solid gray" }}
                />
            )}
            <h3>Team Summary</h3>
            <div className="RegistrationSummaryWrapper__table">
                <DashTable>
                    <DashHeader
                        style={{
                            padding: "10px 0 10px 20px",
                            gap: "20px",
                            borderTop: "none",
                        }}
                        headerTitles={[
                            "Name",
                            "Email",
                            "Phone",
                            "Roll Number",
                            "Player Type",
                        ]}
                    />
                    {tempTeamDetails.map((member, index) => (
                        <DashRow
                            key={index}
                            isDropDown={false}
                            style={{
                                gap: "15px",
                                cursor: "default",
                            }}
                            contentCols={[
                                member[`PlayerName`],
                                member[`PlayerEmail`],
                                member[`PlayerPhone`],
                                member[`PlayerID`],
                                member[`playerType`],
                            ]}
                        />
                    ))}
                </DashTable>
            </div>

            <div className="RegistrationSummaryWrapper__note">
                <h2>Note</h2>
                <ul className="markdownBody">
                    <li>Paid cash will not be refunded under any circumstances</li>
                    <li>
                        Details of all members will be checked on arrival to campus and if
                        the details does not match with the player's college ID, The player
                        will not be allowed to play.
                    </li>
                </ul>
            </div>
            <div className="RegistrationSummaryWrapper__actions">
                <button className="RegForm__form--buttons__add" onClick={() => setRegisterStage("Details")}>
                    Edit details
                </button>
                <button
                    className="RegForm__form--buttons__add"
                    onClick={async () => {
                        const teamMembers = tempTeamDetails.map((member, index) => {
                            return {
                                name: member[`PlayerName`],
                                email: member[`PlayerEmail`],
                                phone: member[`PlayerPhone`],
                                rollNumber: member[`PlayerID`],
                                playerType: member.playerType,
                                eventId: member.eventId,
                            };
                        });

                        setShowBlurredSpinner(true);
                        await registerTeam({
                            teamDetails: {
                                registeredById: user.id,
                                eventId: eventId,
                                email: user.email,
                            },
                            teamMembers: teamMembers,
                        }).then((res) => {
                            setShowBlurredSpinner(false);
                            if (res.status === 200) {
                                console.log("hello yeah yeah")
                                // setTempTeamDetails(null);
                                setRegisterStage("Success");
                            }
                        });
                    }}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default RegistrationSummary;
