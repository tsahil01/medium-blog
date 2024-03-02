import { Auth } from "../component/Auth";
import { Quote } from "../component/Quote";

export function Signup(){

    return <>
    <div className="flex flex-row w-full">
        <div className="md:w-1/2 w-full">
            <Auth authType="signup"/>
        </div>
        <div className="hidden md:block w-1/2">
            <Quote/>
        </div>
    </div>
    </>
}