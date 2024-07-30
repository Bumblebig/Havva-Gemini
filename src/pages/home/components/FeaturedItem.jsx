export default function FeaturedItem({ headline, desc }) {
    return (
        <div className="mb-5 text-center lg:text-left lg:pt-12 lg:pr-8 xl:pt-20">
            <h2 className="text-xl font-semibold mb-3 leading-snug lg:text-2xl">{headline}</h2>
            <p className="lg:text-lg">{desc}</p>
        </div>
    )
}