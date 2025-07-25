import { Link } from "react-router";

const FeaturedEventCard = ({ event }) => {
    const { _id, eventName, eventDate, imageURL, location } = event;

    return (
        <div className="card bg-base-100 shadow-xl rounded-2xl">
            <figure className="w-full md:h-64">
                <img width="100%"
                    src={imageURL}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-lg md:text-xl">{eventName}</h2>
                <p className="md:text-lg font-medium">Location: <span className="text-gray-500">{location}</span></p>
                <p className="font-medium">Event Date: <span className="text-gray-500">{eventDate}</span></p>
            </div>
            <div className="px-6 pb-6">
                <Link to={`/event/${_id}`}>
                    <button className="btn btn-success md:text-lg font-bold w-full ">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedEventCard;