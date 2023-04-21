interface Key {
    letter: string,
    border: string
}

export default function Button({letter, border}: Key) {
    const colors: Record<string, string> = {
        white: "w-48 h-48 border-2 border-white rounded-lg flex justify-center items-center",
        green: "w-48 h-48 border-2 border-green-500 rounded-lg flex justify-center items-center",
        red: "w-48 h-48 border-2 border-red-500 rounded-lg flex justify-center items-center"
    }
    return (
        <div className={colors[border]}> 
            <p className="text-8xl font-bold dark:text-white">{letter.toUpperCase()}</p>
        </div>
    )
}
