import * as motion from "motion/react-client"
export default function TransitionAnimation() {
  return (
    <div style={container}>
         <motion.div
            style={ball}
            animate={{ rotate: 180 }}
           whileHover={{ scale: 1.2,
             transition:{
                type: 'spring', velocity: 2
             }
           }}
          
        />
        <motion.path
  animate={{ pathLength: 1 }}
  transition={{ duration: 2, type: "tween" }}
/>
    </div>
  )
}


const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
  };

  const ball = {
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: 'linear-gradient(45deg, #ff0088, #ff8c00)',
}