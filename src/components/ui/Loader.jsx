import { TailSpin } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className="w-full h-screen absolute bg-transparent top-0 left-0 z-[500]">
            <TailSpin
                visible={true}
                height="70"
                width="70"
                color="#002626"
                ariaLabel="tail-spin-loading"
                radius="3"
                wrapperClass="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
        </div>
    );
}