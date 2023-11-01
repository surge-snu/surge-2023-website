import { cloneElement, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import '../../styles/routes/EntryExit.scss'
import { registerIn } from "../../operations/auth.fetch";
import BlurredSpinner from "../../components/BlurredSpinner/BlurredSpinner";
export default function Entry() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async () => {
        if (name === "" || phone === "" || college === "") {
            alert("PLEASE FILL IN ALL THE FIELDS")
            return;
        }
        setIsLoading(true)
        const data = {
            "name": name,
            "phone": phone,
            "college": college,
            "location": "IN_CAMPUS",
        }
        localStorage.setItem("NAME", name);
        localStorage.setItem("COLLEGE", college);
        localStorage.setItem("PHONE", phone);
        localStorage.setItem("TIME", Date.now())
        const res = await registerIn(data);
        if (res.status === 200) {
            setIsLoading(false)
            router.replace('/entryExit/entryResponse')
        }
        else {
            setIsLoading(false)
            alert("INTERNAL SERVER ERROR");
            window.location.reload()
        }
    }
    return (
        <>
            {isLoading ? <BlurredSpinner /> : <div className="EntryMainContainer">
                <p className="EntryMainContainer__title">IN CAMPUS FORM</p>
                <input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} />
                <input placeholder="Phone Number" type="number" onChange={(e) => setPhone(e.target.value)} />
                <input placeholder="College" type="text" onChange={(e) => setCollege(e.target.value)} />
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="CTA"
                    onClick={() => handleSubmit()}
                >
                    Submit
                </motion.button>
            </div>}

        </>
    )
}