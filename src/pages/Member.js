import { useState } from "react";
import { Link } from "react-router-dom";

function Member({ app, onMemberChange }) {

    const [isEditOpen, setIsEditOpen] = useState(false);

    const [memberName, setMemberName] = useState('');
    const [memberImage, setMemberImage] = useState('');
    const [memberBio, setMemberBio] = useState('');
    const [memberDay, setMemberDay] = useState('1');
    const [memberMonth, setMemberMonth] = useState('January');
    const [memberYear, setMemberYear] = useState('1969');

    const handleEdit = (event) => {
        event.preventDefault();
        let memberBirthday = `${memberMonth} ${memberDay}, ${memberYear}`;
        onMemberChange(
            memberName,
            memberBio,
            memberImage,
            memberBirthday
        )

        setIsEditOpen(false);
    }

    return (
        <div className="h-full w-full mx-auto bg-green-700">
            <div className={`container max-w-xl py-10 mx-auto ${isEditOpen ? 'hidden' : 'block'}`}>
                <div id="header">
                    <img className="rounded-full mx-auto w-40 h-40 object-cover bg-black my-4" src={app.memberImage} alt="" />
                    <div className="text-white font-bold text-6xl text-center py-4">{app.memberName}</div>
                    <div className="text-gray-200 text-2xl text-center max-w-xs mx-auto">{app.memberBio}</div>
                </div>
                <div id="member" className="pt-6">
                    <div className="max-w-3xl mx-auto mt-10 bg-gray-100 border border-gray-100 rounded-lg">
                        <div className="font-bold pl-5 py-4 text-lg">My Clubs</div>
                        <div className="py-6 bg-white flex flex-row justify-between">
                            <div className="flex flex-row items-center px-4">
                                <img className="w-10 rounded-full" src="/images/gym.jpg" />
                                <div className="flex flex-col items-start px-8">
                                    <div>{app.clubTitle}</div>
                                    <div className="text-green-600">Active</div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 items-center px-4">
                                <a target="_blank" href={`tel:${app.clubPhone}`}>
                                    <img className="w-10 rounded-full cursor-pointer" src="/images/call.jpg" />
                                </a>
                                <Link to={'/club'}><img className="w-10 rounded-full cursor-pointer" src="/images/right-arrow.png" /></Link>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="font-bold pl-5 py-4 text-lg">Personal Details</div>
                            <div className="flex flex-row gap-4 items-center px-4 cursor-pointer " onClick={() => setIsEditOpen(!isEditOpen)}>
                                <img className="w-10 rounded-full" src="/images/pencil.png" />
                                <div className="text-center text-xl py-4 text-gray-700 hover:underline hover:text-black">
                                    Edit
                                </div>
                            </div>

                        </div>
                        <div className="py-6 bg-white flex flex-row justify-between">
                            <div className="flex flex-row items-center px-4">
                                <img className="w-10 rounded-full" src="/images/cake.png" />
                                <div className="flex flex-col items-start px-8">
                                    <div>Birthday</div>
                                    <div>{app.memberBirthday}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white font-semibold py-4"><Link to={'/club'}>CLUBS</Link></div>
            </div>
            <div className={`container max-w-xl py-10 mx-auto ${isEditOpen ? 'block' : 'hidden'}`}>
                <form className="flex flex-col justify-between px-5 max-w-md mx-auto"
                    method="POST"
                    onSubmit={(event) => handleEdit(event)}
                >
                    <input
                        aria-label="Enter Your  Name"
                        type="text"
                        placeholder="Enter your name"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setMemberName(target.value)}
                        value={memberName}
                    />
                    <input
                        aria-label="Enter Bio"
                        type="text"
                        placeholder="Bio"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setMemberBio(target.value)}
                        value={memberBio}
                    />
                    <input
                        aria-label="Add Member Profile picture"
                        type="text"
                        placeholder="Profile Picture (url)"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setMemberImage(target.value)}
                        value={memberImage}
                    />
                    <input
                        aria-label="Birthday"
                        type="number"
                        placeholder="Day"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setMemberDay(target.value)}
                        value={memberDay}
                    />
                    <select
                        aria-label="Birthday"
                        className="text-sm text-black w-full mr-3 p-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setMemberMonth(target.value)}
                        value={memberMonth}>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <input
                        aria-label="Birthday"
                        type="number"
                        placeholder="Year"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setMemberYear(target.value)}
                        value={memberYear}
                        defaultValue="January"
                    />
                    <button
                        type="submit"
                        className="bg-green-400 text-white w-full rounded h-7 pb-8 pt-2 align-ce font-bold">Update</button>
                </form>
            </div>
        </div>
    );
}

export default Member;