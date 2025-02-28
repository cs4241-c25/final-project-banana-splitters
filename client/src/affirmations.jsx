import React, { useEffect, useState } from "react"
import NavigationBar from "./components/navigationBar.jsx"

const Affirmations = () => {
    const [affirmation, setAffirmation] = useState([])
    const [text, setText] = useState("")
    const [color, setColor] = useState("#AC2B37")

    // Show existing affirmations from local storage
    useEffect(() => {
        const storedAffirmation = JSON.parse(localStorage.getItem("affirmations"))
        if (storedAffirmation) {
            setAffirmation(storedAffirmation)
        }
    }, [])

    // Save affirmations to localStorage
    useEffect(() => {
        localStorage.setItem("affirmations", JSON.stringify(affirmation))
    }, [affirmation])

    // Add a new affirmation (includes text and color of sticky note)
    const addAffirmation = () => {
        if (text.trim()) {
            const newAffirmation = { text, color }
            setAffirmation((prevAffirmation) => [...prevAffirmation, newAffirmation])
            setText("")
        }
    }

    // Delete sticky note
    const deleteAffirmation = (index) => {
        const updatedAffirmation = affirmation.filter((_, i) => i !== index)
        setAffirmation(updatedAffirmation)
    }

    return (
        <>
            <NavigationBar />
            <div style={{
                padding: '2rem',
                backgroundColor: '#F5F5F5',
                minHeight: '100vh',
                paddingTop: '25vh'
            }}>
                <h1 style={{
                    color: '#AC2B37',
                    textAlign: 'center',
                    fontSize: '50px',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    margin: 0
                }}>
                    Affirmations Board
                </h1>

                <div style={{
                    marginBottom: "10px"
                }}>
                    <label style={{
                        marginRight: "10px",
                        fontWeight: "bold"}}>
                        Choose a color:
                    </label>

                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type here..."
                    rows="5"
                    style={{
                        width: "80%",
                        padding: "10px",
                        marginBottom: "10px",
                        borderRadius: "5px",
                        backgroundColor: "#CECFD0",
                        border: "1px solid #CECFD0"
                    }}
                />

                <br/>

                <button
                    onClick={addAffirmation}
                    style={{
                        padding: "8px 12px",
                        background: "#4F1217",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Post Affirmation
                </button>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: "20px",
                        justifyContent: "center",
                    }}
                >
                    {affirmation.map((affirmation, index) => (
                        <div
                            key={index}
                            style={{
                                background: affirmation.color,
                                padding: "20px",
                                margin: "10px",
                                width: "150px",
                                height: "150px",
                                textAlign: "center",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            {affirmation.text}
                            <button
                                onClick={() => deleteAffirmation(index)}
                                style={{
                                    position: "absolute",
                                    top: "5px",
                                    right: "5px",
                                    background: "#34383B",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "5px",
                                }}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Affirmations
