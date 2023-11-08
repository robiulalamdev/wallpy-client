import React, { useState } from "react";
import "../../styles/uploadRules.css";
import banner from "../../assets/images/upload-rules/banner.png";
import UploadRulesUploadInput from "../../components/upload-rules-ui/UploadRulesUploadInput";
import { Iimg, iClose, uploadUp } from "../../utils/icons/global_icons";

const UploadRules = () => {
  const [accept, setAccept] = useState(false);
  const [step, setStep] = useState(1);
  const [images, setImages] = useState([]);

  const handleRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  console.log(step);
  return (
    <div className="container upload-rules-container">
      <h1 className="title">Upload Files</h1>
      <hr style={{ border: "1px solid #5A5A5A" }} />
      <p className="upload-rules-p">
        We strongly urge all users to carefully review our community rules prior
        to uploading any files. It is our ongoing commitment to vigilantly
        monitor uploads in order to uphold the integrity of our guidelines.
      </p>

      <section className="row upload-section mt-5 mx-auto ">
        <div className="col-md-6 p-3 p-md-4">
          {step === 1 && (
            <img className="img-fluid w-100 h-100" src={banner} alt="" />
          )}
          {step === 2 && (
            <UploadRulesUploadInput setImages={setImages} images={images} />
          )}
          {step === 3 && (
            <UploadRulesUploadInput setImages={setImages} images={images} />
          )}
        </div>
        <div className="col-md-6 upload-section-content mx-auto p-3 p-md-4">
          {step === 1 && (
            <>
              <h1 className="title">Accept to Continue</h1>
              <p className="mt-5">
                We are delighted that you've chosen to join our community. To
                ensure the highest quality of our wallpapers and maintain the
                integrity of our site, we request that you review our community
                rules before proceeding. Your cooperation is greatly
                appreciated.
              </p>
              <h1 className="cm-rules-title">
                Click to Read the Community Rules
              </h1>
              <div className="d-flex align-items-center gap-2 upload-checkbox cursor-pointer">
                <input
                  onClick={() => setAccept(!accept)}
                  className="cursor-pointer"
                  type="checkbox"
                  id="upload"
                  name="upload"
                  checked={accept}
                />
                <p onClick={() => setAccept(!accept)} className="">
                  I confirm I've read the community rules and want to continue.
                </p>
              </div>
              <hr style={{ border: "1px solid #5A5A5A" }} />
              <div className="d-flex justify-content-center mt-5">
                {accept ? (
                  <button
                    onClick={() => setStep(2)}
                    className="upload-btn-active "
                  >
                    Continue
                  </button>
                ) : (
                  <button disabled className="upload-btn-disabled ">
                    Continue
                  </button>
                )}
              </div>
            </>
          )}

          {step === 2 && (
            <div className="d-flex flex-column justify-content-between h-100">
              <h1 className="title">Files</h1>

              <div>
                {step === 2 && (
                  <>
                    {images?.map((img, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center gap-2 mt-3"
                      >
                        <span>{Iimg}</span>
                        <span className="img-title">{img?.name}</span>
                        <button onClick={() => handleRemove(index)}>
                          {iClose}
                        </button>
                      </div>
                    ))}
                  </>
                )}
                {step === 3 && (
                  <>
                    {images?.map((img, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center gap-2 mt-3"
                      >
                        <span>{Iimg}</span>
                        <div className="img-upload-progress"></div>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <div>
                {step === 2 && (
                  <p className="upload-checkbox text-center">
                    There are {images?.length} files pending for upload
                  </p>
                )}
                {step === 3 && (
                  <p className="upload-checkbox text-center">Upload complete</p>
                )}
                <hr style={{ border: "1px solid #5A5A5A" }} />
                <div className="d-flex justify-content-center gap-4 mt-5">
                  {images?.length > 0 ? (
                    <>
                      <button
                        onClick={() => setStep(3)}
                        className="upload-btn-active "
                      >
                        <span>Upload</span>
                        {uploadUp}
                      </button>
                      {step === 3 && (
                        <button className="upload-btn-active-purple ">
                          Continue
                        </button>
                      )}
                    </>
                  ) : (
                    <button disabled className="upload-btn-disabled ">
                      <span>Upload</span> {uploadUp}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="d-flex flex-column justify-content-between h-100">
              <h1 className="title">Files</h1>

              <div>
                {step === 2 && (
                  <>
                    {images?.map((img, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center gap-2 mt-3"
                      >
                        <span>{Iimg}</span>
                        <span className="img-title">{img?.name}</span>
                        <button onClick={() => handleRemove(index)}>
                          {iClose}
                        </button>
                      </div>
                    ))}
                  </>
                )}
                {step === 3 && (
                  <>
                    {images?.map((img, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center gap-2 mt-3"
                      >
                        <span>{Iimg}</span>
                        <div className="img-upload-progress"></div>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <div>
                {step === 2 && (
                  <p className="upload-checkbox text-center">
                    There are {images?.length} files pending for upload
                  </p>
                )}
                {step === 3 && (
                  <p className="upload-checkbox text-center">Upload complete</p>
                )}
                <hr style={{ border: "1px solid #5A5A5A" }} />
                <div className="d-flex justify-content-center gap-4 mt-5">
                  {images?.length > 0 ? (
                    <>
                      <button
                        onClick={() => setStep(3)}
                        className="upload-btn-active "
                      >
                        <span>Upload</span>
                        {uploadUp}
                      </button>
                      {step === 3 && (
                        <button className="upload-btn-active-purple ">
                          Continue
                        </button>
                      )}
                    </>
                  ) : (
                    <button disabled className="upload-btn-disabled ">
                      <span>Upload</span> {uploadUp}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UploadRules;
