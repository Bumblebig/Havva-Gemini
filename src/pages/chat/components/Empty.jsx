import bot from "../../../assets/bot.jpg";
import DefaultPrompt from "./DefaultPrompt";

const Empty = function () {
    return (
        <section className="pt-14 text-gray-900">
            <img src={bot} alt="Havva" className="w-24 rounded-full mx-auto" />
            <h1 className="text-center font-bold text-3xl mt-8 mb-12 text-primary">Havva</h1>
            <div className="flex items-stretch gap-8 max-w-[90%] mx-auto mt-6">
                <DefaultPrompt />
                <DefaultPrompt />
            </div>
            <div className="flex items-stretch gap-8 max-w-[90%] mx-auto mt-6">
                <DefaultPrompt />
                <DefaultPrompt />
            </div>
        </section>
    )
}

export default Empty;