import DashTable from "../../components/Table/DashTable/DashTable";
import { fetchUserData } from "../../services/userServer";
import '../../styles/routes/My/My.scss'
import QRCode from "react-qr-code";
import DashRow from "../../components/Table/DashRow/DashRow";
import { useState } from "react";
import { useRouter } from "next/router";
import BlurredSpinner from "../../components/BlurredSpinner/BlurredSpinner";
import GInput from "../../components/GInput/GInput"

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

export default function MyHome({ user }) {
    const [personalIndex, setPersonalIndex] = useState(null);
    const [accountIndex, setAccountIndex] = useState(null);
    const router = useRouter();

    const [collegeName, setCollegeName] = useState("");
    const [collegeLoader, setCollegeLoader] = useState(false);
    const [collegeError, setCollegeError] = useState("");

    const [phoneLoader, setPhoneLoader] = useState(false);
    return (
        <div className="MyHome">
            <div className="MyHome__QrBox">
                <div className="MyHome__QrBox--left">
                    <div className="MyHome__QrBox--leftTop">
                        <h2>Proof of participation</h2>
                        <p>
                            Upon arrival on campus, this QR code will be used to check the
                            legitimacy of your college's participation in Surge 2022.
                        </p>
                        <p>
                            Each player is required to produce this QR on every entry and exit
                            of campus so make sure all the team members have a copy of this QR
                            code.
                        </p>
                    </div>
                    <div className="MyHome__QrBox--leftBottom">
                        <button
                            onClick={() => {
                                const svg = document.getElementById("QRCode");
                                const svgData = new XMLSerializer().serializeToString(svg);
                                const canvas = document.createElement("canvas");
                                const ctx = canvas.getContext("2d");
                                const img = new Image();
                                img.onload = () => {
                                    canvas.width = img.width;
                                    canvas.height = img.height;
                                    ctx.drawImage(img, 0, 0);
                                    const pngFile = canvas.toDataURL("image/png");
                                    const downloadLink = document.createElement("a");
                                    downloadLink.download = `${user.name} QR Code`;
                                    downloadLink.href = `${pngFile}`;
                                    downloadLink.click();
                                };
                                img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
                            }}
                        >
                            Download QR
                        </button>
                    </div>
                </div>
                <div className="MyHome__QrBox--right">
                    <QRCode
                        id="QRCode"
                        value={user.id}
                        bgColor="#0f1621"
                        fgColor="#cafa0a"
                        style={{
                            borderRadius: "4px",
                        }}
                        size="218"
                    />
                </div>
            </div>
            <DashTable title="Personal information">
                <DashRow
                    isDropDown={false}
                    contentCols={[<span>Name</span>, <span>{user.name}</span>]}
                />
                <DashRow
                    isDropDown={user.college === ""}
                    dropdownIndex={personalIndex}
                    setDropdownIndex={setPersonalIndex}
                    index={0}
                    contentCols={[
                        <span>College</span>,
                        <span>
                            {user.college === "" ? (
                                <>
                                    <img alt="Error" src="/Img/Red Exclamation.svg" height={14} />{" "}
                                    Data Needed
                                </>
                            ) : (
                                user.college
                            )}
                        </span>,
                    ]}
                >
                    <form
                        className="MyHome__collegeDropdownContent"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setCollegeLoader(true);
                            await updateCollegeName({
                                college: collegeName,
                                email: user.email,
                            }).then((res) => {
                                setCollegeLoader(false);
                                if (res.status === 200) {
                                    setCollegeError("");
                                    window.location.reload();
                                } else {
                                    setCollegeError(res.message);
                                }
                            });
                        }}
                    >
                        {collegeLoader && <BlurredSpinner />}
                        <i>*Please enter the College name given in your College ID card*</i>
                        <i>*No Abbreviations*</i>
                        <GInput
                            id="college"
                            label=""
                            setValue={(e) => setCollegeName(e.target.value)}
                            pattern="[a-zA-Z ]{3,50}$"
                        />
                        <button
                            className="MyHome__collegeDropdownContent--update"
                            type="submit"
                        >
                            Update
                        </button>
                        {collegeError !== "" && (
                            <span className="MyHome__collegeDropdownContent--error">
                                {collegeError}
                            </span>
                        )}
                    </form>
                </DashRow>
            </DashTable>
        </div>
    )
}