import {motion} from "framer-motion"

const TextMotion = () => {

  const msg = "Hello, Framer Motion!"

  const wordArray = msg.split(" ")


  return (
    <div className="text=2xl font-bold text-center m-4">
      {
        wordArray.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
          >
            {word} {' '}
          </motion.span>
        ))
      }
    </div>
  )
}

export default TextMotion