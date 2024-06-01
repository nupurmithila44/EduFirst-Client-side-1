import { FaBook } from "react-icons/fa";


const Footer = () => {
    return (
        <>
        <div className="footer p-10 bg-neutral text-neutral-content">
        <aside>
                    <FaBook className="text-3xl bg-[#ff724f] "></FaBook>
                    <p className="text-base font-medium">EduFirst<br />Educational technology involves the integration</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
        </div>
        <div className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    </>
    );
};

export default Footer;