import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Data from "./components/Data"
import plus from "./icons/plus.svg"
import note from "./icons/note.svg"
import patient from "./icons/patient.svg"
import folder from "./icons/folder.svg"
import upload from "./icons/upload.svg"
import report from "./icons/report.svg"
import setting from "./icons/setting.svg"
import logout from "./icons/logout.svg"

let navData = [
  {
    logo: plus,
    name: 'NEW'
  },
  {
    logo: patient,
    name: 'PATIENT'
  },
  {
    logo: folder,
    name: 'FOLDER'
  },
  {
    logo: upload,
    name: 'UPLOAD'
  },
  {
    logo: report,
    name: 'REPORT'
  },
  {
    logo: setting,
    name: 'SETTING'
  },
  {
    logo: logout,
    name: 'LOGOUT'
  },
]

let profiledata = {
  name: 'Diane Cooper',
  email: "diane.cooper@example.com",
  past: {
    name: "Past",
    number: '15'
  },
  upcoming: {
    name: "Upcoming",
    number: '02'
  },
  profileinfo: [
    {
      name: "Gender",
      data: "Female"
    },
    {
      name: "Birthday",
      data: "Feb 24th, 1997"
    },
    {
      name: "Phone Number",
      data: "(239) 555 -0108"
    },
    {
      name: "Registered Date",
      data: "Feb 24th, 1997"
    },
    {
      name: "Street Address",
      data: "JL. Diponegoro No. 21"
    },
    {
      name: "City",
      data: "Cilacap"
    },
    {
      name: "Zip Code",
      data: "655849"
    },
    {
      name: "Member Status",
      data: "Active Member"
    }
  ]
}

let filedata = [
  {
    logo: note,
    name: "Check Up Results.pdf"
  },
  {
    logo: note,
    name: "Check Up Results.pdf"
  },
  {
    logo: note,
    name: "Medical Prescription.pdf"
  },
  {
    logo: note,
    name: "Dental X-Ray Result.pdf"
  },
]

let usersrecords = [
  {
    date: {
      name: "26 Nov '19",
      data: "09.00 - 10.00"
    },
    treatment: {
      name: "Treatment",
      data: "Open Access"
    },
    info: [
      {
        name: "Dentist",
        data: "Drg.Adam H."
      },
      {
        name: "Nurse",
        data: "Jessicamila"
      },
      {
        name: "Note",
        icon: note
      }
    ]

  },
  {
    date: {
      name: "26 Nov '19",
      data: "09.00 - 10.00"
    },
    treatment: {
      name: "Treatment",
      data: "Open Access"
    },
    info: [
      {
        name: "Dentist",
        data: "Drg.Adam H."
      },
      {
        name: "Nurse",
        data: "Jessicamila"
      },
      {
        name: "Note",
        icon: note
      }
    ]

  }
]

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className='col-1 p-0 text-center'>
          <Nav navData={navData} />
        </div>
        <div className='col-11 mainsection container-fluid'>
          <Profile profiledata={profiledata} />
          <Data usersrecords={usersrecords} filedata={filedata} />
        </div>
      </div>
    </div>
  );
}

export default App;
