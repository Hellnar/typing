import Button from "./components/Button"
import { useEffect, useState } from "react"
import Stats from "./components/Stats"

const vocabulary = "abcdefghijklmnopqrstuvwxyz,./; "

function App() {
    const [letter, setLetter] = useState("a")
    const [border, setBorder] = useState("white")
    const [score, setScore] = useState({
        total: 0,
        correct: 0,
        wrong: 0
    })

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
          };
    }, [letter])
    
    function handleKeyPress(e: any) {
        const random = randomLetter()
        setLetter(random)
        let count = {total: 0, correct: 0, wrong: 0}
        console.log(`Event: ${e.key} | Key: ${letter}`)
        count.total += 1
        if(e.key === letter) {
            setBorder("green")
            count.correct += 1
        } else {
            setBorder("red")
            count.wrong += 1
        }
        console.log(border)
        setTimeout(() => {
            setBorder("white")
        }, 300)
        setScore({
            total: score.total + count.total,
            correct: score.correct + count.correct,
            wrong: score.wrong + count.wrong
        })
        console.log(score)
    }

    function randomLetter() {
        return vocabulary[Math.floor(Math.random() * vocabulary.length)]
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center dark:bg-gray-800">
            <div className="flex border-2 rounded-lg border-white my-24">
                <Stats color={"total"} data={score.total} />
                <Stats color={"correct"} data={score.correct} />
                <Stats color={"wrong"} data={score.wrong} />
            </div>
            <Button letter={letter} border={border} />
        </div>
    )
}

export default App
