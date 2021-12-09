import { useState } from "react";
import { Link } from "react-router-dom";

function Club({ app, onClubChange }) {

    const [isMembershipSelected, setIsMembershipSelected] = useState(true);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const [clubTitle, setClubTitle] = useState(app.clubTitle);
    const [clubImage, setClubImage] = useState(app.clubImage);
    const [clubDescription, setClubDescription] = useState(app.clubDescription);
    const [clubPhone, setClubPhone] = useState(app.clubPhone);
    const [clubEmail, setClubEmail] = useState(app.clubEmail);
    const [clubWebsite, setClubWebsite] = useState(app.clubWebsite);

    const handleEdit = (event) => {
        event.preventDefault();

        onClubChange(
            clubTitle,
            clubDescription,
            clubImage,
            clubPhone,
            clubEmail,
            clubWebsite
        )

        setIsEditOpen(false);
    }

    return (
        <div className="h-full w-full mx-auto bg-blue-500">
            <div className={`container max-w-xl py-10 mx-auto ${isEditOpen ? 'hidden' : 'block'}`}>
                <div id="header">
                    <img className="rounded-full mx-auto w-40 h-40 object-cover bg-black my-4" src={app.clubImage} alt="" />
                    <div className="text-white font-bold text-6xl text-center py-4">{app.clubTitle}</div>
                    <div className="text-center text-lg text-gray-300 cursor-pointer"
                        onClick={() => setIsEditOpen(!isEditOpen)}>
                        Edit
                    </div>
                    <div className="text-gray-200 text-2xl text-center py-4 max-w-xs mx-auto">{app.clubDescription}</div>
                    <div className="w-9/10 bg-gray-100 border-2 border-gray-300 rounded-lg px-10 py-4 md:px-24 mx-auto flex flex-row items-center gap-20  ">
                        <div className="w-1/3">
                            <a href={app.clubPhone ? 'tel:' + app.clubPhone : '#header'}>
                                <img src="/images/phone.png" alt="" className={`mx-auto w-12 object-fit ${!app.clubPhone ? 'opacity-60' : ''}`} />
                            </a>
                        </div>
                        <div className="w-1/3">
                            <a href={app.clubEmail ? 'mailto:' + app.clubEmail : '#header'}>
                                <img src="/images/email.png" alt="" className={`mx-auto w-24 object-fit ${!app.clubEmail ? 'opacity-60' : ''}`} />
                            </a>
                        </div>
                        <div className="w-1/3">
                            <a href={app.clubWebsite ? 'https://' + app.clubWebsite : '#header'}>
                                <img src="/images/website.png" alt="" className={`mx-auto w-12 object-fit ${!app.clubWebsite ? 'opacity-60' : ''}`} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="info" className="pt-10">
                    <div className="flex flex-row items-center">
                        <div onClick={() => setIsMembershipSelected(true)}
                            className="mx-auto">
                            <div className={`text-xl md:text-3xl text-white text-center ${isMembershipSelected ? 'pb-4 border-b-2 border-white' : ''}`}>
                                My Membership
                            </div>
                        </div>
                        <div className="mx-auto">
                            <div onClick={() => setIsMembershipSelected(false)}
                                className={`text-xl md:text-3xl text-white text-center ${!isMembershipSelected ? 'pb-4 border-b-2 border-white' : ''}`}>
                                My Forms
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-3xl mx-auto mt-10">
                        <div className={`text-center bg-gray-400 py-8 mx-auto border-2 border-gray-100 rounded-lg ${isMembershipSelected ? 'blocked' : 'hidden'}`}>
                            Membership
                        </div>
                        <div className={`text-center mx-auto bg-gray-400 py-8 border-2 border-gray-100 rounded-lg ${isMembershipSelected ? 'hidden' : 'blocked'}`}>
                            Forms
                        </div>
                    </div>
                </div>
                <div className="text-center text-white font-semibold py-4"><Link to={'/member'}>MEMBERS PAGE</Link></div>
            </div>
            <div className={`container max-w-xl py-10 mx-auto ${isEditOpen ? 'block' : 'hidden'}`}>
                <form className="flex flex-col justify-between px-5 max-w-md mx-auto"
                    method="POST"
                    onSubmit={(event) => handleEdit(event)}
                >
                    <input
                        aria-label="Enter Your Club Name"
                        type="text"
                        name="clubTitle"
                        placeholder="Club"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setClubTitle(target.value)}
                        value={clubTitle}
                    />
                    <input
                        aria-label="Enter description"
                        type="text"
                        placeholder="Description"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setClubDescription(target.value)}
                        value={clubDescription}
                    />
                    <input
                        aria-label="Add Club Profile picture"
                        type="text"
                        placeholder="Profile Picture (url)"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setClubImage(target.value)}
                        value={clubImage}
                    />
                    <input
                        aria-label="Phone number"
                        type="text"
                        placeholder="Phone"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setClubPhone(target.value)}
                        value={clubPhone}
                    />
                    <input
                        aria-label="Email Address"
                        type="email"
                        placeholder="Email Address"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setClubEmail(target.value)}
                        value={clubEmail}
                    />
                    <input
                        aria-label="Website"
                        type="text"
                        placeholder="Website"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                        border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setClubWebsite(target.value)}
                        value={clubWebsite}
                    />
                    <button
                        type="submit"
                        className="bg-green-400 text-white w-full rounded h-7 pb-8 pt-2 align-ce font-bold">Update</button>
                </form>
            </div>

        </div>
    );
}

export default Club;