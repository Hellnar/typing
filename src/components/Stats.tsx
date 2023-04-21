interface Stats {
    color: string,
    data: number
}

export default function Stats({color, data}: Stats) {
    const colors: Record<string, string> = {
        total: "p-4 mb-4 text-3xl text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 flex flex-col items-center",
        correct: "p-4 mb-4 text-3xl text-green-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-green-400 flex flex-col items-center",
        wrong: "p-4 mb-4 text-3xl text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400 flex flex-col items-center",
    }
    return (
        <div className={colors[color]}>
            {data}
            <p>{color}</p>
        </div>
    )
}
