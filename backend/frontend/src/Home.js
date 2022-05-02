import React from "react";
import LoginHooks from "./LoginHooks";

const Home = () => {
    return (
        <div> 
            <div>
            <p style={styles.headline}> Welcome to our website! Please sign in below </p>
            </div>
            < LoginHooks />
        </div>
    )
}
const styles = {
    headline: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        color:"white",
        fontSize: 22,
        marginTop: 0,
      }
}

export default Home;