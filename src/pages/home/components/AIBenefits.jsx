import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AIBenefits({ icon, title, desc }) {
    return (
        <div>
            <FontAwesomeIcon icon={icon} className="mb-3 w-7 inline-block h-auto lg:w-6 lg:mb-4" />
            <h3 className="font-semibold text-base mb-3 xl:text-lg">{title}</h3>
            <p className="text-sm xl:text-base">{desc}</p>
        </div>
    )
}