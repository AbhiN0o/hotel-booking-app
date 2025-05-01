import ExclusiveOffers from "../components/ExclusiveOffers";
import FeaturedDestination from "../components/FeaturedDestination";
import Hero from "../components/Hero";

export default function Homepage(){
    return (
        <>
            <Hero />
            <FeaturedDestination />
            <ExclusiveOffers />
        </>
    )
}