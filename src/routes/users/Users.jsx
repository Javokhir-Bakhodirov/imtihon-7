import React from "react";
import Container from "../../utils/Container";
import { useGetUsersQuery } from "../../redux/api/usersApi";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const Users = () => {
    const { data, isLoading } = useGetUsersQuery();
    console.log(data?.data);

    if (isLoading) return <Loading />;

    return (
        <section className="users-section py-20">
            <Container>
                <div className="w-full">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
                        Users
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {data &&
                        data.data.map(user => {
                            return (
                                <div
                                    key={user.id}
                                    className="card bg-base-100 w-full shadow-xl">
                                    <figure>
                                        <img
                                            src={user.avatar}
                                            alt="user"
                                            className="w-full h-48 object-cover"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-lg md:text-xl">
                                            {user.first_name} {user.last_name}
                                        </h2>
                                        <p className="text-sm md:text-base">
                                            {user.email}
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link
                                                to={`/users/${user.id}`}
                                                className="btn btn-primary max-lg:btn-sm">
                                                Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </Container>
        </section>
    );
};

export default Users;
