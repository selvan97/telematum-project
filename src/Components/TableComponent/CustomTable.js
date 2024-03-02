import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import CustomName from "../CustomName/CustomName";
import pic1 from "../ASSETS/pic1.jpg";
import pic2 from "../ASSETS/pic2.jpg";
import pic3 from "../ASSETS/pic3.jpg";
import pic4 from "../ASSETS/pic4.jpg";
import pic5 from "../ASSETS/pic5.jpg";
import pic6 from "../ASSETS/pic6.jpg";
import "./CustomTable.css";



const CustomTable = () => {
  const appointments = [
    {
      patient_name:"John Doe",
      mobile_number: "123-456-7890",
      appointment_date: "2024-02-26",
      appointment_time: "10:00 AM",
      iconColor: "green",
      user_image: pic1,
      doctor: "Dr. Smith",
      injury: "Sprained ankle",
    },
    {
      patient_name: "Jane Smith",
      mobile_number: "987-654-3210",
      appointment_date: "2024-02-26",
      appointment_time: "11:30 AM",
      doctor: "Dr. Johnson",
      user_image: pic2,
      iconColor: "green",
      injury: "Back pain",
    },
    {
      patient_name: "Michael Johnson",
      mobile_number: "456-789-0123",
      appointment_date: "2024-02-26",
      appointment_time: "1:00 PM",
      doctor: "Dr. Lee",
      iconColor: "green",
      user_image: pic3,
      injury: "Headache",
    },
    {
      patient_name: "Emily Davis",
      mobile_number: "789-012-3456",
      appointment_date: "2024-02-26",
      appointment_time: "2:30 PM",
      doctor: "Dr. Patel",
      iconColor: "orange",
      user_image: pic4,
      injury: "Sore throat",
    },
    {
      patient_name: "David Wilson",
      mobile_number: "321-654-9870",
      appointment_date: "2024-02-26",
      appointment_time: "4:00 PM",
      doctor: "Dr. Garcia",
      iconColor: "orange",
      user_image: pic5,
      injury: "Fever",
    },
    {
      patient_name: "Sarah Brown",
      mobile_number: "654-321-0987",
      appointment_date: "2024-02-26",
      appointment_time: "5:30 PM",
      iconColor: "green",
      user_image: pic6,
      doctor: "Dr. Kim",
      injury: "Cough",
    },
  ];

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-500 uppercase bg-gray-100 border-b light:border-gray-700  ">
            <tr className="">
              <th scope="col" className="px-6 py-5 ">
                Patients
              </th>
              <th scope="col" className="px-6 py-5">
                date
              </th>
              <th scope="col" className="px-6 py-5">
                time
              </th>
              <th scope="col" className="px-6 py-5">
                doctor
              </th>
              <th scope="col" className="px-6 py-5">
                injury
              </th>
              <th scope="col" className="px-6 py-5 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="border-b light:border-gray-700">
                <td className="px-4 py-3     tracking-tighter">
                <CustomName
                    userImage={appointment.user_image}
                    patient_name={appointment.patient_name}
                    mobile_number={appointment.mobile_number}
                  />
                </td>
                <td className="px-4 py-3  text-gray-500 text-base whitespace-nowrap">
                  <span className="">
                    <FontAwesomeIcon icon={faCalendarCheck} className="mx-1" />
                  </span>
                  {appointment.appointment_date}
                </td>
                <td className="px-4 py-3  text-gray-500  text-base font-normal whitespace-nowrap">
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {appointment.appointment_time}
                </td>
                <td className="px-4 py-3  text-gray-500  text-base font-normal whitespace-nowrap">
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    style={{ color: appointment.iconColor }}
                  />{" "}
                  {appointment.doctor}
                </td>
                <td className="px-4 py-3 inline-block font-semibold tracking-tighter whitespace-nowrap rounded-lg  my-3  text-sm  bg-blue-100 text-black-800">
                  {appointment.injury}
                </td>
                <td className="px-4 py-3 text-center whitespace-nowrap ">
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    style={{ color: "#E4ECF7", fontSize: "1.5rem"}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
