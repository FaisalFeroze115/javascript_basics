import {motion} from "framer-motion"


const BUttonTap = () => {
  return (
    <motion.button
        className="bg-blue-500 border p-2 rounded-lg"
        whileTap={{scale: 0.8, rotate: -90, borderRadius: "100%"}}
        whileHover={{scale: 1.2, rotate: 90, borderRadius: "20%", transition: {yoyo: Infinity}}}
    >
        Tap me
    </motion.button>
  )
}

export default BUttonTap