

const AddTouristSpot = () => {
    const handleAddTouristsSpot = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const imgURL = formData.get('imgURL');
        const touristsSpotName = formData.get('touristsSpotName');
        const countryName = formData.get('countryName');
        const location = formData.get('location');
        const shortDescription = formData.get('shortDescription');
        const averageCost = formData.get('averageCost');
        const seasonality = formData.get('seasonality');
        const travelTime = formData.get('travelTime');
        const totalVisitorsPerYear = formData.get('totalVisitorsPerYear');
        const userEmail = formData.get('userEmail');
        const username = formData.get('username');

        // Handle the form data
        console.log({
            imgURL,
            touristsSpotName,
            countryName,
            location,
            shortDescription,
            averageCost,
            seasonality,
            travelTime,
            totalVisitorsPerYear,
            userEmail,
            username
        });
    };

    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Add a Tourist Spot</h1>
            <form onSubmit={handleAddTouristsSpot} className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="imgURL"
                            placeholder="Enter the image URL"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tourist Spot Name</label>
                        <input
                            type="text"
                            name="touristsSpotName"
                            placeholder="Enter the tourist spot name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Country Name</label>
                        <input
                            type="text"
                            name="countryName"
                            placeholder="Enter the country name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter the location"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4 sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Short Description</label>
                        <textarea
                            name="shortDescription"
                            placeholder="Enter a short description"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Average Cost</label>
                        <input
                            type="text"
                            name="averageCost"
                            placeholder="Enter the average cost"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Seasonality</label>
                        <input
                            type="text"
                            name="seasonality"
                            placeholder="Enter the seasonality (e.g., summer, winter)"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Travel Time</label>
                        <input
                            type="text"
                            name="travelTime"
                            placeholder="Enter the travel time (e.g., 6 days)"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Total Visitors Per Year</label>
                        <input
                            type="number"
                            name="totalVisitorsPerYear"
                            placeholder="Enter total visitors per year"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    Add Tourist Spot
                </button>
            </form>
        </div>
    );
};

export default AddTouristSpot;
