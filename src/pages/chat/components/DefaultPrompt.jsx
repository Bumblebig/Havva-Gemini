const DefaultPrompt = ({ text }) => {
    return (
        <div className="border border-gray-500 rounded p-4 cursor-pointer w-[360px] max-w-[360px]">
            <p className="leading-snug text-sm">{text}</p>
        </div>
    )
}

export default DefaultPrompt;