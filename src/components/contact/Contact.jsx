import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Jakarta, Indonesia",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "misadugam@gmail.com",
    link: "mailto:misadugam@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+62 812-9654-6535",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-center items-start">
          <div>
            <div className="flex justify-center items-center flex-col text-center">
              <p className="section-title max-lg:hidden font-semibold text-nowrap text-[#132238]">
                Contact Me
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                I'm available anytime. Feel free to contact me if you have any work
              </p>
            </div>
            <div className="my-8.75 flex flex-row justify-end items-center gap-4">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
