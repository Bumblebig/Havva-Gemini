import { FeaturedItem } from ".";

export default function Features() {
    return (
        <section className="py-12 px-4 w-full mx-auto max-w-7xl md:w-4/5 md:mx-auto lg:w-11/12 lg:py-16">
            <h1 className="text-center font-semibold text-secondary xl:text-lg">Features</h1>

            <div className="mt-12 flex flex-col gap-16 lg:gap-32 lg:mt-20">
                <figure className="lg:flex lg:gap-8 lg:flex-row xl:gap-14">
                    <FeaturedItem
                        key='1'
                        headline="Real-time Monitoring"
                        desc="Instant readings of pulse rate, temperature, and blood pressure ensure you're always up-to-date on your health status"
                    />
                    <img src="https://navarro-medical.com/images/blood-pressure-monitoring-at-home.jpg" alt="lady-checks-bp" className="block w-11/12 mx-auto md:w-3/4 lg:w-1/2 xl:h-custom xl:w-custom object-cover" />
                </figure>

                <figure className="lg:flex lg:gap-8 lg:flex-row xl:gap-14">
                    <div className="lg:order-2 lg:w-2/5">
                        <FeaturedItem
                            key='2'
                            headline="Multi-User Profiles Perfect for Families"
                            desc="Create and manage up to five individual profiles under one account, keeping personal health data separate and secure."
                        />
                    </div>
                    <img src="https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="family-profiles" className="block w-11/12 mx-auto md:w-3/4 lg:w-1/2 lg:order-1 xl:h-custom xl:w-custom object-cover" />
                </figure>

                <figure className="lg:flex lg:gap-8 lg:flex-row xl:gap-14">
                    <FeaturedItem
                        key='3'
                        headline="Emergency Alerts"
                        desc="Quickly alert up to five emergency contacts with a single tap, ensuring help is always within reach."
                    />
                    <img src="https://images.pexels.com/photos/6034782/pexels-photo-6034782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="emergency" className="block w-11/12 mx-auto md:w-3/4 lg:w-1/2 xl:h-custom xl:w-custom object-cover" />
                </figure>

                <figure className="lg:flex lg:gap-8 lg:flex-row xl:gap-14">
                    <div className="lg:order-2 lg:w-2/5">
                        <FeaturedItem
                            key='4'
                            headline="Data Sharing"
                            desc="Securely share your vital sign readings with healthcare providers or family members for better communication and support."
                        />
                    </div>
                    <img src="https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="data-sharing" className="block w-11/12 mx-auto md:w-3/4 lg:w-1/2 lg:order-1 xl:h-custom xl:w-custom object-cover" />
                </figure>

            </div>
        </section>
    )
}