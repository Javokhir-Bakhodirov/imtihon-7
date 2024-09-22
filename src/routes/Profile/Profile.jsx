import Container from "../../utils/Container";

const Profile = () => {
    return (
        <section className="profile-section min-h-screen pt-60">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg"
                            alt={`John Doe`}
                            className="rounded-full shadow-lg w-48 h-48 object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 bg-base-100 p-6 shadow-lg rounded-lg">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            John Doe
                        </h1>
                        <p className="text-xl mb-2 text-zinc-700">
                            Email:
                            <span className="font-semibold">
                                johndoe@gmail.com
                            </span>
                        </p>
                        <p className="text-lg mb-2 text-zinc-700">
                            Job Title:
                            <span className="font-semibold">
                                Full Stack Developer
                            </span>
                        </p>
                        <p className="text-lg mb-2 text-zinc-700">
                            Location:{" "}
                            <span className="font-semibold">New York, USA</span>
                        </p>
                        <div className="card-actions mt-6">
                            <button className="btn btn-primary">
                                Edit Profile
                            </button>
                            <button className="btn btn-outline btn-secondary">
                                Delete Profile
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Profile;
