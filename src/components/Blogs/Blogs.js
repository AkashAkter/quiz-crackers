import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1>Question and Answer</h1>
            <div className='ques'>
                <h3>
                    Q1: What is the purpose of react router?
                </h3>
                <p>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                </p>
            </div>
            <div className='ques'>
                <h3>
                    Q2: How does context API work?
                </h3>
                <p>
                    The React Context API has been around as an experimental feature for a while now, but only in React's version 16.3.0 did it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.
                    This new API solves one major problem-prop drilling. Even if you're not familiar with the term, if you've worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.</p>
            </div>
            <div className='ques'>
                <h3>
                    Q3: useref Hook.
                </h3>
                <p>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>

        </div>
    );
};

export default Blogs;