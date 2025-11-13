import React from 'react';
import { useLoaderData } from 'react-router';

const AllBooks = () => {
    const Book_data = useLoaderData();
    console.log(Book_data);

    return (
        <div className="overflow-x-auto p-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-5 text-left text-gray-700 font-semibold border-b">Title</th>
                        <th className="py-3 px-5 text-left text-gray-700 font-semibold border-b">Author</th>
                        <th className="py-3 px-5 text-left text-gray-700 font-semibold border-b">Genre</th>
                        <th className="py-3 px-5 text-left text-gray-700 font-semibold border-b">Rating</th>
                        <th className="py-3 px-5 text-left text-gray-700 font-semibold border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Book_data.map((book) => (
                        <tr key={book._id} className="hover:bg-gray-50">
                            <td className="py-3 px-5 border-b">{book.title}</td>
                            <td className="py-3 px-5 border-b">{book.author}</td>
                            <td className="py-3 px-5 border-b">{book.genre}</td>
                            <td className="py-3 px-5 border-b">{book.rating.toFixed(1)}</td>
                            <td className="py-3 px-5 border-b">
                                <a
                                    href={`/BookDetails/${book._id}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    View Details
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBooks;
