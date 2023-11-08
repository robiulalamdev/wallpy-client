import React, { useState } from "react";
import "../../styles/accountVerify.css";
import BrandTab from "../../components/account-verify-ui/BrandTab";

const tabs = ["Brand", "Artist"];
const AccountVerification = () => {
  const [step, setStep] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="container account-verify-container">
      <h1 className="title">Request Verification</h1>
      <hr style={{ border: "1px solid #5A5A5A" }} />
      <section className="account-verify-form-section p-3">
        {step === 1 && (
          <>
            <h2>Type of Request</h2>
            <div className="account-verify-tab-container d-flex justify-content-around align-items-center">
              {tabs?.map((t, i) => (
                <button
                  onClick={() => setSelectedTab(i)}
                  className={`${selectedTab === i ? "btn-active" : ""}`}
                  key={i}
                >
                  {t}
                </button>
              ))}
            </div>

            {selectedTab === 0 && <BrandTab step={step} setStep={setStep} />}
          </>
        )}
        {step === 2 && (
          <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-5">
            <p className="account-verify-thank">
              Thank you for initiating the verification process. Please be aware
              that all verification procedures are subject to manual review, and
              additional verification may be necessary to confirm the identity
              of the requester. In the event further information is needed, we
              will contact you via email.
            </p>
            <button className="account-verify-submit-btn mx-auto">
              Submit
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AccountVerification;
