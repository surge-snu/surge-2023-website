import { motion } from "framer-motion";
import ScrollItems from "../ScrollItems/ScrollItems"
import SportsScroll from "../SportsScroll/SportsScroll";
import "./Stats.scss"

function Stats() {
    return (
        <section className="GameStats">
            <ScrollItems heading="Scene in the game" />
            <div className="GameStats__statistics">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0 * 0.15 }}
                    className="GameStats__statistics--card"
                >
                    <h1>109+</h1>
                    <h2>Teams</h2>
                    <h2>Teams</h2>
                    <h2>Teams</h2>
                    <h2>Teams</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1 * 0.15 }}
                    className="GameStats__statistics--card"
                >
                    <h1>18</h1>
                    <h2>Events</h2>
                    <h2>Events</h2>
                    <h2>Events</h2>
                    <h2>Events</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 2 * 0.15 }}
                    className="GameStats__statistics--card"
                >
                    <h1>1500+</h1>
                    <h2>Players</h2>
                    <h2>Players</h2>
                    <h2>Players</h2>
                    <h2>Players</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 3 * 0.15 }}
                    className="GameStats__statistics--card"
                >
                    <h1>15k+</h1>
                    <h2>Footfall</h2>
                    <h2>Footfall</h2>
                    <h2>Footfall</h2>
                    <h2>Footfall</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 4 * 0.15 }}
                    className="GameStats__statistics--card"
                >
                    <h1>∞</h1>
                    <h2>Sweat</h2>
                    <h2>Sweat</h2>
                    <h2>Sweat</h2>
                    <h2>Sweat</h2>
                </motion.div>
            </div>
            <div className="GameStats__sports">
                <SportsScroll />
            </div>
        </section>
    );
}

export default Stats;
