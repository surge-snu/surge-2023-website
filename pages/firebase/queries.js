import React from "react";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    doc,
    updateDoc,
    where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from './config'
import '../../styles/routes/Query.scss'
const db = getFirestore(app);
import { useRouter } from "next/router";

export default function Queries() {
    const colRef = collection(db, "Queries");
    const [query, setQuery] = useState([])
    const router = useRouter();

    useEffect(() => {
        const tempQuery = [];
        getDocs(colRef).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                tempQuery.push({"data" : doc.data(), "id" : doc.id})
            })
            setQuery(tempQuery);
        })
        console.log(query)
    }, [])
    const handleClick = async (key) => {
        const queryRef = doc(db, "Queries", key)
        try {
            await updateDoc(queryRef, {
                isResolved : true,
            })
            router.reload()
        } catch (error) {
            console.log(error)
        }
        console.log(key)
    }
    return (
        <div style={{"padding" : "2rem"}} className="QueryMainContainer">
            <p style={{"marginBottom" : "1rem", "marginTop" : "1rem"}}>Unsolved Queries</p>
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Email</th>
                        <th>Query</th>
                        <th>Resolved</th>
                    </tr>
                </thead>
                <tbody>
                    {query.map((q,index) => {
                        if (q.data["isResolved"] === false) {
                            return (
                                <tr key={index}>
                                    <td>{q.data["category"]}</td>
                                    <td>{q.data["email"]}</td>
                                    <td>{q.data["description"]}</td>
                                    <td>{<button onClick={() => {handleClick(q.id) }}>Resolved</button>}</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
            <p style={{"marginBottom" : "1rem", "marginTop" : "1rem"}}>Solved Queries</p>
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Email</th>
                        <th>Query</th>
                    </tr>
                </thead>
                <tbody>
                    {query.map((q, index) => {
                        if (q.data["isResolved"] === true) {
                            console.log(q)
                            return (
                                <tr key={index}>
                                    <td>{q.data["category"]}</td>
                                    <td>{q.data["email"]}</td>
                                    <td>{q.data["description"]}</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}