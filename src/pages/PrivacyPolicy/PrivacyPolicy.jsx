import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import "../../styles/privacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto pp-container">
        <h1 className="pp-title">Community Rules</h1>
        <hr style={{ border: "1px solid #5A5A5A" }} />

        <div className="pp-content-container mt-4">
          <h6 className="">Privacy Policy for The Wallpaper Society</h6>
          <p className="mt-5">Last Updated: [10/26/2023] </p>

          <p className="mt-2">
            Welcome to <span>The Wallpaper Society.</span> We are dedicated to
            safeguarding your privacy and ensuring a secure experience while
            using our website. This Privacy Policy explains how we collect, use,
            and protect your data.
          </p>

          <h6 className="mt-4">Information We Collect </h6>

          <p className="mt-5">We collect the following information:</p>

          <div className="mt-5">
            <p>
              1. <span>Email Addresses:</span> We collect email addresses solely
              for the purpose of user accounts.
            </p>
            <p>
              2. <span>Cookies:</span> We use necessary cookies for website
              functionality.
            </p>
          </div>

          <h6 className="mt-4">How We Use Your Information</h6>
          <p className="mt-4">
            We use the collected data for the following purposes:
          </p>

          <ul className="mt-4">
            <li>To provide essential services to our users.</li>
            <li>To enhance your user experience through necessary cookies.</li>
            <li>To maintain the security and functionality of the website.</li>
          </ul>

          <p className="mt-2">
            <span>Data Sharing:</span> We do not share, collect, or sell any
            user data.
          </p>
          <p className="mt-2">
            <span>Data Protection: </span>The security of your information is
            important to us and we will use reasonable security measures to
            prevent the loss, misuse or unauthorized alteration of your
            information under our control. However, given the inherent risks, we
            cannot guarantee absolute security and consequently, we cannot
            ensure or warrant the security of any information you transmit to us
            and you do so at your own risk.
          </p>
          <p className="mt-2">
            <span>User Rights: </span> Users can request the deletion of their
            accounts, which will automatically remove their email addresses from
            our servers.
          </p>
          <p className="mt-2">
            <span>Communication:</span> We do not have a newsletter or automatic
            communication system. Users can follow us on social media for
            updates.
          </p>
          <p className="mt-2">
            <span>Policy Updates:</span> Our privacy policy is continuously
            reviewed to ensure it accurately represents our data handling
            practices. We encourage users to regularly check for updates.
          </p>
          <p className="mt-2">
            <span> Contact Us:</span>
            For privacy-related concerns or inquiries, please contact us at{" "}
            <span className="underline">
              <ins>privacy@wallpapersociety.com</ins>
            </span>
            . Please note that this privacy policy is subject to change, and we
            encourage users to stay informed about our data practices by
            reviewing this policy periodically.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
