import { useState } from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Club from './pages/Club'
import Member from './pages/Member'

function App() {
  // Check if localStorage has previous data
  var appData = JSON.parse(localStorage.getItem('app'));

  // Persist state in localStorage if app is being loaded for the first time
  if (!appData) {
    appData = {
      clubTitle: 'JymGym',
      clubImage: 'https://images.pexels.com/photos/4164765/pexels-photo-4164765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      clubDescription: 'Open Gym 06:00 - 18:00 Rotchild 15 , Tel Aviv',
      clubPhone: '0555552555',
      clubEmail: 'info@jymgym.com',
      clubWebsite: null,
      memberName: 'Avi Bitter',
      memberBio: 'Warrior Ninja',
      memberImage: 'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      memberBirthday: 'June 20, 1990'
    }
    // Set localStorage to init state
    localStorage.setItem('app', JSON.stringify(appData));
  }

  const [app, setApp] = useState(appData);

  const handleClubChange = (clubTitle, clubDescription, clubImage, clubPhone, clubEmail, clubWebsite) => {

    let newApp = { ...app };

    newApp.clubTitle = clubTitle;
    newApp.clubDescription = clubDescription;
    newApp.clubImage = clubImage;
    newApp.clubPhone = clubPhone;
    newApp.clubEmail = clubEmail;
    newApp.clubWebsite = clubWebsite;

    console.log('club updated', newApp);

    setApp(newApp);

    localStorage.setItem('app', JSON.stringify(newApp));
  }

  const handleMemberChange = (memberName, memberBio, memberImage, memberBirthday) => {

    let newApp = { ...app };

    newApp.memberName = memberName;
    newApp.memberBio = memberBio;
    newApp.memberImage = memberImage;
    newApp.memberBirthday = memberBirthday;

    console.log('member updated', newApp);

    setApp(newApp);

    localStorage.setItem('app', JSON.stringify(newApp));
  }

  return (
    <div className="app">
      <div className=" bg-white md:flex flex-row-reverse items-center">
        <div className="w-full md:w-7/12">
          <img className="md:max-w-sm mx-auto p-6 md:py-5 md:px-0" src="/images/logo.png" alt="" />
          <div className="text-center font-bold text-3xl md:text-6xl text-black pb-8 md:pb-0">Driving Fitness <br /> Management Forward</div>
        </div>
        <div className="w-full md:w-5/12 ">
          <img style={{ maxHeight: '600px' }} className="w-full object-cover mx-auto"
            src={`https://images.pexels.com/photos/2475878/pexels-photo-2475878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Club app={app} onClubChange={handleClubChange} />} />
        <Route path="club" element={<Club app={app} onClubChange={handleClubChange} />} />
        <Route path="member" element={<Member app={app} onMemberChange={handleMemberChange} />} />
      </Routes>
    </div>
  );
}

export default App;
