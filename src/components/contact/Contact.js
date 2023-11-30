/************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.

 *************************************************************************
 */
import React from "react";
import styles from "./contact.module.css";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <div className="container">
      <div className={styles.contactSection}>
        <div className={styles.svgTop}></div>
        <div className={`content ${styles.contactContent}`}>
          <div className={styles.descContainer}>
            <h1>How to contribute your project to the Community Source Hub?</h1>
          </div>
          <div className={styles.descContainer}>
            <h2>Clone Our Repository</h2>
            <p>
              The site is currently in its soft launch phase, and we are
              currently only accepting contributions from internal Adobe
              employees. If you are an internal employee, please click{" "}
              <a href="https://git.corp.adobe.com/nnguyen/acs-dc-community">
                here
              </a>
              . If you are not an Adobe employee, we'll have a more formal way
              for you to submit your project soon.
            </p>
          </div>
          <div className={styles.descContainer}>
            <h2>Use Our Predefine Template</h2>
            <li>
              <strong>Clone Your Project:</strong>
              <p>
                Once your project is cloned, navigate to the directory{" "}
                public/data/tools.
              </p>
            </li>

            <li>
              <strong>Locate the Template Folder:</strong>
              <p>
                Inside the tools folder, you will find a directory named
                template.
              </p>
            </li>

            <li>
              <strong>Duplicate the Template:</strong>
              <p>
                Make a duplicate of the template folder and rename it to match
                your project name.
              </p>
            </li>

            <li>
              <strong>Organize Images:</strong>
              <p>
                Place all the relevant images inside the image folder within
                your newly created project folder.
              </p>
            </li>

            <li>
              <strong>Fill out Content Template:</strong>
              <p>
                Open the file named contentTemplate.json and fill in the details
                corresponding to your project.
              </p>
            </li>
          </div>
          <div className={styles.descContainer}>
            <h2>Update The ContentTemplate.json File</h2>
            <li>
              <strong>Title:</strong>
              <p>
                The name of your project. This will be displayed on the the
                features page about your project.
              </p>
            </li>

            <li>
              <strong>Tagline:</strong>
              <p>
                A short description of your project. This will be displayed on
                the search page.
              </p>
            </li>

            <li>
              <strong>Version:</strong>
              <p>The current version of your project.</p>
            </li>

            <li>
              <strong>Creator:</strong>
              <p>The name of the creator of the project.</p>
            </li>

            <li>
              <strong>Key Features:</strong>
              <p>
                Three key features you would like to highlight about your
                project.
              </p>
            </li>

            <li>
              <strong>Content:</strong>
              <p>
                A detailed description of your project. This is where you can
                format how your content will be displayed. Currently only three
                types of formatting are supported (text, images, and links).
              </p>
              <p>
                <strong>Text:</strong> To add text, simply type your text in the
                content field.
              </p>
              <p>
                <strong>Images:</strong> To add an image, provide the image name
                in the content field. The image must be located in the image
                folder of your project.
              </p>
              <p>
                <strong>Links:</strong> To add a link, provide the link name in
                the content field.
              </p>
            </li>

            <li>
              <strong>Installation:</strong>
              <p>
                A detailed description of how to install your project. If your
                project has a GitHub repository associated with it, this is a
                good area to supply a link to your repo. The structure follows
                the same concept as the content section. Please review the
                content section.
              </p>
            </li>
          </div>
          <div className={styles.descContainer}>
            <h2>Adding Your Tool</h2>
            <p>
              Once you've fully filled out the contentTemplate.json and supplied
              the required images, please navigate to public/data/pages and open
              the searchToolsContent.json file. The structure of this page will
              be explained below:
            </p>
            <p>
              <strong>id:</strong> This is the name of your project. This must
              match the name of your project folder.
            </p>
            <p>
              <strong>title:</strong> The title of the page. This will be
              displayed on the search page.
            </p>
            <p>
              <strong>desc:</strong> A short description of your project. This
              will be displayed on the search page.
            </p>
            <p>
              <strong>featureType:</strong> There's three options to choose
              from: "integration", "tool", and "sample". This will determine and
              categorize your submission.
            </p>
            <p>
              <strong>productType:</strong> There's two option to choose from:
              "Sign" or "Acrobat". This will display an icon on the search page,
              so other users can easily identify the product your project is
              associated with your submission.
            </p>
            <p>
              <strong>adobeCertified:</strong> There's two option to choose
              from: "true" or "false".Is this an Adobe certified project?
            </p>
            <p>
              <strong>featureFileName:</strong> This will be the same as the id
            </p>
          </div>
          <div className={styles.descContainer}>
            <h2>Create A Pull Request</h2>
            <p>
              Once you've fully added your submission, please commit and push to
              the repo and make a pull request. One of your team memebers will
              review your submission as needed.
            </p>
          </div>
          <div className={styles.descContainer}>
            <h2>Not Familiar With Github?</h2>
            <p>
              If you're not familiar with using GitHub, please use this link to
              submit your project.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.svgBottom}></div>
      <Footer />
    </div>
  );
};

export default Contact;
