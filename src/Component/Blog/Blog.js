import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container">
                <h5>01. What is CORS?</h5>
                <p><span className='fw-bold'>Ans:</span>Cross is a browser mechanism that does resource sharing. Cors allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. Cors also provides the potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. Cors is not a protection against cross-origin attacks.</p>
                <h5>02. .WHy are you using firebase? What other options do you have to implement authentication?</h5>
                <p><span className='fw-bold'>Ans:</span>Google Firebase is an application development platform. With firebase, we develop high-quality apps.Firebase allows developers to create iOS, Android, and Web apps . Using firebase we get lots of benifit such as Google Analytics For Firebase, Realtime Database & Firestore, Authentication, Crashlytics, Free Use of Dynamic Links etc.</p>
                <p>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
                <h5>03. How does the private route work?</h5>
                <p><span className='fw-bold'>Ans:</span> We used private route to protect selected pages in a React app from unauthenticated users. Private Routes in React Router require a user to be authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page.</p>
                <h5>04. </h5>
                <p><span className='fw-bold'>Ans:</span>Node is a run time open source development platform for executing JavaScript code and library for running web applications outside the client's browser.  Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.</p>
                <p>Node. js runs on chrome v8 engine which converts javascript code into machine code.</p>
            </div>
        </div>
    );
};

export default Blog;