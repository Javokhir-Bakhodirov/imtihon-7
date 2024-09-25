import React, { useState } from "react";
import {
    useGetSingleUserQuery,
    useDeleteUserMutation,
    useUpdateUserMutation,
} from "../../redux/api/usersApi";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../utils/Container";
import Loading from "../../components/loading/Loading";

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: user, isLoading, error } = useGetSingleUserQuery(id);
    const [deleteUser, { isLoading: isLoadingDelete }] =
        useDeleteUserMutation();
    const [updateUser] = useUpdateUserMutation();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false); // Update state
    const [showToast, setShowToast] = useState(false);
    const [name, setName] = useState(user?.data?.first_name || "");
    const [job, setJob] = useState("Software Developer");
    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await deleteUser(id).unwrap();
            setShowToast(true); //
            setTimeout(() => {
                setShowToast(false);
                navigate("/users");
            }, 2000);
        } catch (err) {
            setIsDeleting(false);
            console.error("Failed to delete user: ", err);
        }
    };

    const handleUpdate = async e => {
        e.preventDefault();
        setIsUpdating(true);
        try {
            await updateUser({ id, name, job }).unwrap();
            setIsUpdating(false);
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 2000);
            document.getElementById("update_modal").close();
        } catch (err) {
            setIsUpdating(false);
            console.error("Failed to update user: ", err);
        }
    };

    if (isLoading) return <Loading />;

    return (
        <section className="user-detail-section min-h-screen py-60 max-sm:py-28 max-sm:pb-16">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <img
                            src={user.data.avatar}
                            alt={`${user.data.first_name} ${user.data.last_name}`}
                            className="rounded-full shadow-lg w-48 h-48 object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 bg-base-100 p-6 shadow-lg rounded-lg">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            {user.data.first_name} {user.data.last_name}
                        </h1>
                        <p className="text-xl mb-2 text-zinc-700">
                            Email:{" "}
                            <span className="font-semibold">
                                {user.data.email}
                            </span>
                        </p>

                        <p className="text-lg mb-2 text-zinc-700">
                            Job Title:{" "}
                            <span className="font-semibold">
                                Software Developer
                            </span>
                        </p>

                        <div className="card-actions mt-6">
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    document
                                        .getElementById("update_modal")
                                        .showModal()
                                }>
                                Update
                            </button>

                            <button
                                className="btn btn-outline btn-error"
                                onClick={() =>
                                    document
                                        .getElementById("delete_modal")
                                        .showModal()
                                }>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

                <dialog
                    id="update_modal"
                    className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Update User</h3>
                        <form onSubmit={handleUpdate}>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Job</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    className="input input-bordered w-full"
                                    value={job}
                                    onChange={e => setJob(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="modal-action">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() =>
                                        document
                                            .getElementById("update_modal")
                                            .close()
                                    }>
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    disabled={isUpdating}>
                                    {isUpdating ? "Updating..." : "Update"}
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>

                <dialog
                    id="delete_modal"
                    className="modal modal-bottom sm:modal-middle"
                    style={{ position: "sticky", bottom: "0", top: "auto" }}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Are you sure you want to delete{" "}
                            {user.data.first_name} {user.data.last_name}'s
                            account?
                        </h3>
                        <div className="modal-action">
                            <button
                                className="btn"
                                type="button"
                                onClick={() =>
                                    document
                                        .getElementById("delete_modal")
                                        .close()
                                }>
                                Cancel
                            </button>
                            <button
                                className="btn btn-error"
                                onClick={handleDelete}
                                disabled={isDeleting}>
                                {isDeleting ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </dialog>

                {showToast && (
                    <div className="mt-16 toast toast-top toast-end">
                        <div className="alert alert-success">
                            <span>
                                {isUpdating
                                    ? "User updated successfully!"
                                    : "User deleted successfully!"}
                            </span>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default Details;
