import DashTable from "../../components/Table/DashTable/DashTable";
import { fetchUserData } from "../../services/userServer";
import '../../styles/routes/My/My.scss'
import QRCode from "react-qr-code";
import DashRow from "../../components/Table/DashRow/DashRow";
import { useState } from "react";
import { useRouter } from "next/router";
import BlurredSpinner from "../../components/BlurredSpinner/BlurredSpinner";
import GInput from "../../components/GInput/GInput"
import { updateCollegeName, updatePhone } from "../../operations/auth.fetch";
import useForm from "../../hooks/useForm";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
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
    console.log(userData);
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

    function validate(formValues) {
        const errs = {};

        if (formValues.phone && !isPhone(formValues.phone)) {
            errs.phone = "Phone number should only contain 10 digits";
        }

        return errs;
    }

    const { onChange, handleSubmit, errors } = useForm({
        validate,
        initialValues: { phone: "" },
        onSubmit: async (formData) => {
            if (Object.keys(errors).length !== 0) return;

            setPhoneLoader(true);
            await updatePhone({
                phone: formData.phone,
                email: user.email,
            }).then((res) => {
                setPhoneLoader(false);
                console.log(res);
                if (res.status === 200) {
                    router.reload();
                }
            });
        },
    });
    return (
        <div className="MyHome">
            {/* <Sidebar user={user} /> */}

            {/* <div className="MyHome__QrBox">
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
            </div> */}
            <DashTable title="Personal information">
                <DashRow
                    isDropDown={false}
                    contentCols={[<span key={'name'}>Name</span>, <span key={'name2'}>{user.name}</span>]}
                />
                <DashRow
                    isDropDown={user.college === ""}
                    dropdownIndex={personalIndex}
                    setDropdownIndex={setPersonalIndex}
                    index={0}
                    contentCols={[
                        <span key={'College'}>College</span>,
                        <span key={'college-data'}>
                            {user.college === "" ? (
                                <>
                                    <img alt="Error" src="/Images/Utils/RedExclamation.svg" height={14} />{" "}
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
                <DashRow
                    isDropDown={user.phone === ""}
                    dropdownIndex={personalIndex}
                    setDropdownIndex={setPersonalIndex}
                    index={1}
                    contentCols={[
                        <span key={'phone'}>Phone</span>,
                        <span key={'phoneData'}>
                            {user.phone === "" ? (
                                <>
                                    <img alt="Error" src="/Img/Red Exclamation.svg" height={14} />{" "}
                                    Data Needed
                                </>
                            ) : (
                                user.phone
                            )}
                        </span>,
                    ]}
                >
                    <form
                        className="MyHome__collegeDropdownContent"
                        onSubmit={handleSubmit}
                    >
                        {phoneLoader && <BlurredSpinner />}
                        <i>
                            *Please enter correct, 10 digit phone number as it cannot be
                            changed later*
                        </i>
                        <i>*eg: 8526750301*</i>
                        <GInput
                            id="phone"
                            label=""
                            setValue={(e) => onChange("phone", e)}
                        />
                        {errors.phone !== "" && (
                            <span className="MyHome__collegeDropdownContent--error">
                                {errors.phone}
                            </span>
                        )}
                        <button
                            className="MyHome__collegeDropdownContent--update"
                            type="submit"
                        >
                            Update
                        </button>
                    </form>
                </DashRow>
            </DashTable>
            <DashTable title="Account Settings">
                <DashRow
                    isDropDown={false}
                    contentCols={[<span key={'email'}>Email</span>, <span key={'email2'}>{user.email}</span>]}
                />
                <DashRow
                    dropdownIndex={accountIndex}
                    setDropdownIndex={setAccountIndex}
                    index={0}
                    contentCols={[
                        <span key={'changePassword'}>Change Password</span>,
                        <span key={'hide'}>************</span>,
                    ]}
                >
                    <Link href="#reset-password">
                        <p className="MyHome__collegeDropdownContent--update" type="submit">
                            Change Password
                        </p>
                    </Link>
                </DashRow>
            </DashTable>
        </div>
    )
}

MyHome.getLayout = function getLayout(page) {
    return (
        <div className="MyLayout">
            {/* <Navbar
                isSmall={true}
            /> */}
            <Sidebar />
            <div className="MyLayout__page">{page}</div>
        </div>
    );
};